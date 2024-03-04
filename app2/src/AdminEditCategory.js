import { useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import VerifyLogin from "./VerifyLogin";
import { useParams } from "react-router-dom";
import getBase, { getImgBase } from './api';
import axios from 'axios';
import showError,{showMessage} from "./toast-message";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function AdminEditCategory() {
  VerifyLogin();
  let { categoryid } = useParams();
  console.log(categoryid);
  let [title, setTitle] = useState('');
  let [oldPhoto, setOldPhoto] = useState('');
  let [photo, setPhoto] = useState('');
  let [islive, setIsLive] = useState('');
  let [isFetched, setIsFetched] = useState(false);
  let navigate = useNavigate();
  
  let updateCategory = function (event) {
    event.preventDefault();
    console.log(title, photo, islive);
    let apiAddress = getBase() + "update_category.php";
    let form = new FormData();
    form.append("title", title);
    form.append("photo", photo);
    form.append("islive", islive);
    form.append("id", categoryid);

    axios({
      method: 'post',
      responseType: 'json',
      data: form,
      url: apiAddress
    }).then((response) => {
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
            navigate("/category");
          }, 2000);
        }
      }
    }).catch((error) => {
      if (error.code == 'ERR_NETWORK')
        showError('either you or server is offline');
    });
  }
  useEffect(() => {
    if (isFetched === false) {
      let apiAddress = getBase() + `category.php?id=${categoryid}`;
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
          showError('no category found')
        }
        else {
          setTitle(response.data[2]['title']);
          setOldPhoto(response.data[2]['photo']);
          setIsLive(response.data[2]['islive']);
          setIsFetched(true);
        }
      }).catch((error) => {
        console.log(error);
        if (error.code === 'ERR_NETWORK')
          showError('either you are or server is offline');
      })
    }
  });
  return (<div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    {/* Sidebar Start */}
    <AdminMenu />
    {/*  Sidebar End */}
    {/*  Main wrapper */}
    <div className="body-wrapper">
      <ToastContainer />
      <div style={{ "min-height": "100vh" }} className="container-fluid bg-secondary-subtle border">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header text-bg-primary p-3">
                <h3 className="text-white">Categories</h3>
              </div>
              <div className="row">
                <div className="col-3 p-4">
                  <h5 className="fw-bold">Existing Image</h5>
                  <img className="img-fluid"
                    src={getImgBase() + "/category/" + oldPhoto} />
                </div>
                <div className="col-9">
                  <div className="card-body">
                    <h5 className="card-title fw-semibold mb-4">Edit Category</h5>
                    <hr />
                    <form action onSubmit={updateCategory}>
                      <div className="mb-3">
                        <label htmlFor="title" className="form-label">Edit Category title</label>
                        <input type="text" name="title" id="title" className="form-control" placeholder="Category title" required
                          value={title} onChange={(e) => setTitle(e.target.value)} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="photo" className="form-label">Change photo</label>
                        <input type="file" name="photo" id="photo" className="form-control" required accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} />

                      </div>
                      <b>is this category live?</b>
                      <div className="form-check">
                        <label htmlFor="yes">
                          <input type="radio"
                            value='1' id="yes" checked={islive === '1'}
                            onChange={(e) => setIsLive('1')} /> Yes
                        </label>
                      </div>
                      <div className="form-check">
                        <label htmlFor="no">
                          <input type="radio" value='0' id="no" name="islive"
                            onChange={(e) => setIsLive('0')} checked={islive === '0'} /> No
                        </label>
                      </div>
                      <div className="text-end">
                        <input type="submit" value="Save changes" className="btn btn-primary" />
                        <input type="reset" defaultValue="clear all" className="btn btn-dark-light" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}