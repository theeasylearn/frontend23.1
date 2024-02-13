import AdminMenu from "./AdminMenu";
import { useEffect, useState } from "react";
import getBase, { getImgBase } from "./api";
import showError from "./toast-message";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
export default function AdminProduct() {

  //create state array/list
  let [products,setProduct] = useState([]);
  useEffect(()=>
  {
      var apiAddress = getBase() + "product.php";
      //api call
      if(products.length === 0)
      {
          fetch(apiAddress)
          .then((response) => response.json())
          .then((data)=>{
              console.log(data);
              //fetch 1st object
              let error = data[0]['error'];
              if(error !== 'no')
              {
                 showError(error);
              }
              else 
              {
                  let total = data[1]['total'];
                  if(total === 0)
                  {
                      showError('no products available');
                  }
                  else 
                  {
                    //delete 1st 2 object
                    data.splice(0,2);
                    setProduct(data);
                  }
              }
          })
          .catch((error)=>{
            showError('oops something went wrong, please contact developer....');
          });
      }
  })
  let DisplayProduct = function (item) {
    return (<tr>
      <td>{item.id}</td>
      <td>{item.categorytitle}</td>
      <td>{item.title}</td>
      <td>
        <a className="example-image-link" href={getImgBase() + "/product/" + item.photo}  data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
          <img src={getImgBase() + "/product/" + item.photo} className="img-fluid example-image" />
        </a>
      </td>
      <td>{item.price}</td>
      <td>{(item.islive === '1')?"yes":"no"}</td>
      <td className="d-flex justify-content-evenly">
        <h1><Link to={'/product-detail/' + item.id} ><i className="ti ti-eye" /></Link> </h1>
        <h1><a href="#"><i className="ti ti-trash" /></a> </h1>
        <h1><a href="/edit-product"><i className="ti ti-pencil" /></a></h1> </td>
    </tr>);
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
            <a href="admin-insert-product.html" className="btn btn-light">Add product</a>
          </div>
          <div className="card-body">
            <h5 className="card-title fw-semibold mb-4">Existing Product</h5>
            <hr />
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th width="5%">Sr no</th>
                  <th width="15%">Category</th>
                  <th width="25%">Title</th>
                  <th width="20%">Photo</th>
                  <th width="10%">Price</th>
                  <th width="5%">Is live?</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  {products.map((item) => DisplayProduct(item))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}