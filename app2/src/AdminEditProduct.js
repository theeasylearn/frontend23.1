import { useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import VerifyLogin from "./VerifyLogin";
import { useParams } from "react-router-dom";
import getBase, { getImgBase } from './api';
import axios from 'axios';
import showError, { showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function AdminEditProduct() {
  VerifyLogin();
  let navigate = useNavigate();

  let { productid } = useParams();
  console.log(productid);
  var [name, setName] = useState("");
  var [price, setPrice] = useState("");
  var [photo, setPhoto] = useState(null);
  var [oldPhoto, setOldPhoto] = useState(null);
  var [stock, setStock] = useState("");
  var [size, setSize] = useState("");
  var [weight, setWeight] = useState("");
  var [comments, setComments] = useState("");
  var [selectedCategory, setSelectedCategory] = useState("");
  var [isLive, setIsLive] = useState("");
  var [category, setCategory] = useState([]);
  
  let resetInput = function() {
      setName('');
      setPrice('');
      setStock('');
      setSize('');
      setComments('');
      setWeight('');
  }

  let updateProduct = function (event) {
    event.preventDefault();
    console.log({
      name,
      price,
      photo,
      stock,
      size,
      weight,
      comments,
      selectedCategory,
      isLive,
    });
    //call api 
    let apiAddress = getBase() + "update_product.php";
    let form = new FormData();
    // input : name,photo,price,stock,detail,productid,categoryid (required) 
    form.append("name", name);
    form.append("photo", photo);
    form.append("price", price);
    form.append("stock", stock);
    form.append("categoryid", selectedCategory);
    form.append("detail", comments);
    form.append("productid", productid);
    form.append("size", size);
    form.append("weight", weight);
    form.append("islive", isLive);
    console.log(form);
    axios(
      {
        url: apiAddress,
        method: 'post',
        responseType: 'json',
        data: form
      }).then((response) => {
        console.log(response);
        console.log(response.data);
        let error = response.data[0]['error'];
        if (error !== 'no') {
          showError(error);
        }
        else {
          let success = response.data[1]['success'];
          let message = response.data[2]['message'];
          if (success === 'no')
            showError(message);
          else {
            showMessage(message);
            setTimeout(() => {
              navigate("/product");
            }, 2000);
          }
        }
      }).catch((error) => {
        showError('oops something went wrong on server.');
      });

  }

  let fetchSingleProduct = function () {
    let apiAddress = getBase() + "product.php?productid=" + productid;
    console.log(apiAddress);
    axios.get(apiAddress, {
      responseType: 'json'
    }).then((response) => {
      console.log(response.data);
      let error = response.data[0]['error'];
      if (error !== 'no') {
        showError(error);
      }
      else if (response.data[1]['total'] === 0) {
        showError('no product found');
      }
      else {
        let product = response.data[2];
        setName(product['title']);
        setPrice(product['price']);
        setComments(product['detail']);
        setIsLive(product['islive']);
        setSize(product['size']);
        setStock(product['stock']);
        setWeight(product['weight']);
        setOldPhoto(product['photo']);
        setSelectedCategory(product['categoryid']);
      }
    }).catch((error) => {
      if (error.code === 'ERR_NETWORK')
        showError('either you are or api is offline');
    })
  }
  let fetchCategories = function () {
    let apiAddress = getBase() + 'category.php';
    //call api 
    fetch(apiAddress)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        //get 1st object's key error
        let error = data[0]['error'];
        console.log(error);
        if (error !== 'no')
          alert(error);
        else {
          //get 2nd object's key total
          let total = data[1]['total']
          if (total === 0) {
            alert('no category available');
          }
          else {
            //delete 2 object from begining
            data.splice(0, 2);
            //store data into state
            setCategory(data);
            // console.log(categories);
          }
        }
      })
      .catch(error => {
        console.log(error);
        showError('networking error!, its seems your internet connection is not working');
      });
  }
  useEffect(() => {
    if (category.length === 0) {
      fetchSingleProduct();
      fetchCategories();
    }
  });
  return (<div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    {/* Sidebar Start */}
    <AdminMenu />
    {/*  Sidebar End */}
    {/*  Main wrapper */}
    <div className="body-wrapper">
      <div style={{ "min-height": "100vh" }} className="container-fluid bg-secondary-subtle border">
        <ToastContainer />
        <div className="card">
          <div className="card-header text-bg-primary p-3 d-flex justify-content-between">
            <h3 className="text-white">Products</h3>
          </div>
          <div className="card-body">
            <h5 className="card-title fw-semibold mb-4">Edit product</h5>
            <hr />
            <form onSubmit={updateProduct} encType="multipart/form-data">
              <div className="row">
                <div className="col-9">
                  {/* 1st row */}
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <label htmlFor="categoryId" className="form-label">Select category</label>
                      <select className="form-select" id="categoryId" name="categoryId" required onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value=''>Select</option>
                        {category.map((item) => {
                          return <option value={item.id}>{item.title}</option>
                        })}
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="productName" className="form-label">Name</label>
                      <input type="text" className="form-control" id="productName" name="productName" value={name} required
                        onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="productPrice" className="form-label">Price</label>
                      <input type="number" className="form-control" id="productPrice" name="productPrice" required value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                  </div>
                  {/* 2nd row */}
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <label htmlFor="productPhoto" className="form-label">Photo</label>
                      <input type="file" className="form-control" id="productPhoto" name="productPhoto" accept="image/*" required onChange={(e) => setPhoto(e.target.files[0])} />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="productStock" className="form-label">Stock</label>
                      <input type="number" className="form-control" id="productStock" name="productStock" required value={stock}
                        onChange={(e) => setStock(e.target.value)} />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="productWeight" className="form-label">Weight</label>
                      <input type="number" className="form-control" id="productWeight" name="productWeight" required value={weight}
                        onChange={(e) => setWeight(e.target.value)} />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="productSize" className="form-label">Size</label>
                      <input type="text" className="form-control" id="productSize" name="productSize" value={size}
                        onChange={(e) => setSize(e.target.value)} />
                    </div>
                  </div>
                  {/* 3rd row */}
                  <div className="row mb-3">
                    <div className="col-md-2">
                      <b>Is this product live?</b>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="isLive" id="yes" value="1" required checked={isLive === '1'} onChange={(e) => setIsLive('1')} />
                        <label className="form-check-label" htmlFor="yes">
                          (Yes)
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="isLive" id="no" value="0" required checked={isLive === '0'} onChange={(e) => setIsLive('0')} />
                        <label className="form-check-label" htmlFor="no">
                          (No)
                        </label>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <label htmlFor="productDescription" className="form-label">Product Description</label>
                      <textarea className="form-control" id="productDescription" name="productDescription" rows={3} required value={comments}
                        onChange={(e) => setComments(e.target.value)} />
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <img src={getImgBase() + "product/" + oldPhoto} className="img-fluid" />
                </div>
              </div>
              {/* Submit button */}
              <div className="row">
                <div className="col-12 text-end">
                  <input type="submit" value="Save changes" className="btn btn-primary" />
                  <input type="reset" onClick={resetInput} value="clear all" className="btn btn-dark-light" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}