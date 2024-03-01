import { ToastContainer } from "react-toastify";
import AdminMenu from "./AdminMenu";
import { useEffect, useState } from "react";
import getBase from "./api";
import axios from "axios";
import showError, { showMessage } from "./toast-message";
import { useNavigate } from "react-router-dom";
export default function AdminInsertProduct() {
  /* create state variable for each and every input */
  var [categoryID, setCategoryID] = useState('');
  var [name, setName] = useState('');
  var [price, setPrice] = useState(0); // Assuming price is a number, adjust the initial value accordingly
  var [stock, setStock] = useState(0); // Assuming stock is a number, adjust the initial value accordingly
  var [weight, setWeight] = useState('');
  var [size, setSize] = useState('');
  var [photo, setPhoto] = useState('');
  var [isLive, setIsLive] = useState(false); // Assuming isLive is a boolean, adjust the initial value accordingly
  var [description, setDescription] = useState('');

  var navigate = useNavigate();
  //create state array 
  let [categories, setCategory] = useState([]);
  useEffect(() => {
    if (categories.length === 0) {
      let apiAddress = getBase() + "category.php";
      axios({
        method: 'get',
        responseType: 'json',
        url: apiAddress
      }).then((response) => {
        console.log(response);
        let error = response.data[0]['error'];
        if (error !== 'no')
          showError(error);
        else if (response.data[1]['total'] === 0) {
          showError('no category found');
        }
        else {
          response.data.splice(0, 2);
          setCategory(response.data);
        }
      }).catch((error) => {
        console.log(error);
        if (error.code === 'ERR_NETWORK')
          showError('you are offline or server is offline');

      });
    }
  });
  let insertProduct = function (event) {
    event.preventDefault();
    console.log(categoryID, name, price, stock, weight, size, photo, description, isLive);
    //api calling
    let apiAddress = getBase() + "insert_product.php";
    let form = new FormData();
    form.append("categoryid", categoryID);
    form.append("name", name);
    form.append("price", price);
    form.append("stock", stock);
    // form.append("size",size);
    // form.append("weight",weight);
    // form.append("islive",isLive);
    form.append("detail", description);
    form.append("photo", photo);
    console.log(form);

    axios({
      method: 'post',
      url: apiAddress,
      responseType: 'json',
      data: form
    }).then((response) => {
      console.log(response);
      let error = response.data[0]['error'];
      if (error !== 'no') {
        showError(error);
      }
      else {
        let success = response.data[1]['success'];
        let message = response.data[2]['message'];
        if (success === 'no') {
          showError(message);
        }
        else {
          showMessage(message);
          setTimeout(() => {
            navigate("/product");
          }, 2000);
        }
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  return (<div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    {/* Sidebar Start */}
    <AdminMenu />
    {/*  Sidebar End */}
    {/*  Main wrapper */}
    <div className="body-wrapper">
      <ToastContainer />
      <div style={{ "min-height": "100vh" }} className="container-fluid bg-secondary-subtle border">
        <div className="card">
          <div className="card-header text-bg-primary p-3 d-flex justify-content-between">
            <h3 className="text-white">Products</h3>
          </div>
          <div className="card-body">
            <h5 className="card-title fw-semibold mb-4">Add new product</h5>
            <hr />
            <form onSubmit={insertProduct} method="post" encType="multipart/form-data">
              {/* 1st row */}
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="categoryId" className="form-label">Select category</label>
                  <select
                    className="form-select"
                    id="categoryId"
                    name="categoryId"
                    required
                    value={categoryID}
                    onChange={(event) => setCategoryID(event.target.value)}>
                    <option value=''>Select</option>
                    {categories.map((item) => {
                      return <option value={item['id']}>{item['title']}</option>
                    })}
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="productName" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    name="productName"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="productPrice" className="form-label">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    id="productPrice"
                    name="productPrice"
                    required
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </div>
              </div>
              {/* 2nd row */}
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="productPhoto" className="form-label">Photo</label>
                  <input
                    type="file"
                    className="form-control"
                    id="productPhoto"
                    name="productPhoto"
                    accept="image/*"
                    required
                    onChange={(event) => setPhoto(event.target.files[0])}
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="productStock" className="form-label">Stock</label>
                  <input
                    type="number"
                    className="form-control"
                    id="productStock"
                    name="productStock"
                    required
                    value={stock}
                    onChange={(event) => setStock(Number(event.target.value))}
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="productWeight" className="form-label">Weight</label>
                  <input
                    type="number"
                    className="form-control"
                    id="productWeight"
                    name="productWeight"
                    required
                    value={weight}
                    onChange={(event) => setWeight(event.target.value)}
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="productSize" className="form-label">Size</label>
                  <input
                    type="text"
                    className="form-control"
                    id="productSize"
                    name="productSize"
                    value={size}
                    onChange={(event) => setSize(event.target.value)}
                  />
                </div>
              </div>
              {/* 3rd row */}
              <div className="row mb-3">
                <div className="col-md-2">
                  <b>Is this product live?</b>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="isLive"
                      id="yes"
                      value="Yes"
                      required
                      checked={isLive}
                      onChange={() => setIsLive(true)}
                    />
                    <label className="form-check-label" htmlFor="yes">
                      (Yes)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="isLive"
                      id="no"
                      value="No"
                      required
                      checked={!isLive}
                      onChange={() => setIsLive(false)}
                    />
                    <label className="form-check-label" htmlFor="no">
                      (No)
                    </label>
                  </div>
                </div>
                <div className="col-md-10">
                  <label htmlFor="productDescription" className="form-label">Product Description</label>
                  <textarea
                    className="form-control"
                    id="productDescription"
                    name="productDescription"
                    rows={3}
                    required
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </div>
              </div>
              {/* Submit button */}
              <div className="row">
                <div className="col-12 text-end">
                  <input type="submit" value="Save changes" className="btn btn-primary" />
                  <input type="reset" value="Clear all" className="btn btn-dark-light" />
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