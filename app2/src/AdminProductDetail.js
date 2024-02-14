import { useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import axios from "axios";
import getBase,{getImgBase} from "./api";
import showError from "./toast-message";
import 'react-toastify/dist/ReactToastify.css';

export default function AdminProductDetail() {
  let url = window.location.href;
  // console.log(url);
  let last_slash_position = url.lastIndexOf("/") + 1;
  // console.log(last_slash_position);
  let productid = url.substring(last_slash_position, url.length);
  // console.log(productid);
  let [product, setProduct] = useState({});
  
  useEffect(() => {
    if (product.id === undefined) {
      let apiAddress = getBase() + "product.php?productid=" + productid;
      axios({
        method: 'get',
        url: apiAddress,
        responseType: 'json'
      }).then((response) => {
        console.log(response);
        if (response.status !== 200) {
          showError("could not reach server, please contact developer.");
        }
        else if (response.data[0]['error'] !== 'no') {
          showError(response.data[0]['error']);
        }
        else if (response.data[1]['total'] === 0) {
          showError('no product found');
        }
        else 
        {
          setProduct(response.data[2]);
        }
      });
    }
  });

  return (<div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    <AdminMenu />
    <div className="body-wrapper">
      <div style={{ "min-height": "100vh" }} className="container-fluid bg-secondary-subtle border">
        <div className="card">
          <div className="card-header text-bg-primary p-3">
            <h3 className="text-white">Products</h3>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title fw-semibold mb-4">IPhone - 15 </h5>
              <div className="d-flex justify-content-between">
                <h1><a href="#"><i className="ti ti-trash" /></a> </h1>
                <h1><a href="/edit-product"><i className="ti ti-pencil" /></a></h1>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <a className="example-image-link" href="https://picsum.photos/600?random=1" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                  <img src={getImgBase() + "product/" + product.photo} className="img-fluid example-image" />
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <table className="table table-bordered table-striped">
                  <tbody><tr>
                    <td>Category</td>
                    <td>{product.categorytitle}</td>
                  </tr><tr>
                      <td width="30%">Name</td>
                      <td width="70%">{product.title}</td>
                    </tr>
                    <tr>
                      <td>ID</td>
                      <td>{product.id}</td>
                    </tr>
                    <tr>
                      <td>Price</td>
                      <td>{product.price}</td>
                    </tr>
                    <tr>
                      <td>Stock</td>
                      <td>{product.stock}</td>
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <td>{product.weight}</td>
                    </tr>
                    <tr>
                      <td>Size</td>
                      <td>{product.size}</td>
                    </tr>
                    <tr>
                      <td>Is Live</td>
                      <td>{(product.islive == 1)?"Yes":"No"}</td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h4>Product Description</h4>
                <p>{product.detail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}