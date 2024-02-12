import { useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import axios from "axios";
import getBase from "./api";
import showError from "./toast-message";
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
        else {
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
                <h1><a href="admin-edit-product.html"><i className="ti ti-pencil" /></a></h1>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <a className="example-image-link" href="https://picsum.photos/600?random=1" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                  <img src="https://picsum.photos/500?random=1" className="img-fluid example-image" />
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <table className="table table-bordered table-striped">
                  <tbody><tr>
                    <td>Category</td>
                    <td>Mobile</td>
                  </tr><tr>
                      <td width="30%">Name</td>
                      <td width="70%">IPhone - 15</td>
                    </tr>
                    <tr>
                      <td>ID</td>
                      <td>1001</td>
                    </tr>
                    <tr>
                      <td>Price</td>
                      <td>125000</td>
                    </tr>
                    <tr>
                      <td>Stock</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <td>300 grams</td>
                    </tr>
                    <tr>
                      <td>Size</td>
                      <td>100 x 125 x 25</td>
                    </tr>
                    <tr>
                      <td>Is Live</td>
                      <td>Yes</td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h4>Product Description</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit deserunt quod enim quidem saepe rem atque sed? Eveniet nulla perferendis, placeat odit corrupti nostrum nisi possimus delectus tempora aperiam. Maxime necessitatibus perspiciatis iusto est adipisci distinctio, quos quae rem dolor aut. Perspiciatis amet, commodi ducimus porro, cum quisquam non similique nisi harum, ut facilis omnis? Dignissimos quo eveniet quidem non ipsum doloremque ipsam sapiente accusantium beatae deleniti iusto dolores ad tempora earum fugit, sunt ex. Voluptas magni facere minima temporibus quia optio ea ex dolorum vero numquam deleniti, in necessitatibus beatae recusandae natus! Quidem omnis quaerat est officiis id ipsam, asperiores fugit facilis dolorem nobis ullam exercitationem ex amet aut, doloremque at quo. Natus nesciunt autem hic perferendis. Reprehenderit pariatur id aspernatur quisquam molestias nemo neque nobis aut! Similique dolore, tempore, expedita repellendus quam quas, pariatur natus aliquid velit neque voluptatem reprehenderit illum! Quisquam, unde molestiae! Sit dolor veniam magni minus cum enim officiis molestias! Vitae cupiditate, quisquam odit inventore atque voluptas voluptatum adipisci totam voluptatibus ea officia et tempore laborum ex labore at corrupti quos maxime. Aliquam quas est, illum numquam sunt eveniet officia placeat ad a laboriosam commodi dolorem itaque ab nisi qui, consequuntur consequatur dolores quidem consectetur!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}