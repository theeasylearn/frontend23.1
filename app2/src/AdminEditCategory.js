import { useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import VerifyLogin from "./VerifyLogin";
import { useParams } from "react-router-dom";
import getBase, { getImageBase } from './api';
import axios from 'axios';
import showError from "./toast-message";
import { ToastContainer } from "react-toastify";
export default function AdminEditCategory() {
  VerifyLogin();
  let { categoryid } = useParams();
  console.log(categoryid);
  let [title, setTitle] = useState('');
  let [photo, setPhoto] = useState('');
  let [islive, setIsLive] = useState('');
  let [isFetched, setIsFetched] = useState(false);
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
          setPhoto(response.data[2]['photo']);
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
        <div className="card">
          <div className="card-header text-bg-primary p-3">
            <h3 className="text-white">Categories</h3>
          </div>
          <div className="card-body">
            <h5 className="card-title fw-semibold mb-4">Edit Category</h5>
            <hr />
            <form action>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Edit Category title</label>
                <input type="text" name="title" id="title" className="form-control" placeholder="Category title" required
                  value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="photo" className="form-label">Change photo</label>
                <input type="file" name="photo" id="photo" className="form-control" required accept="image/*" onChange={(e) => setPhoto(e.target.files)} />
              </div>
              <b>is this category live?</b>
              <div className="form-check">
                <label htmlFor="yes">
                  <input type="radio"
                    value='1' id="yes"
                    onChange={(e) => setIsLive('1')} /> Yes
                </label>
              </div>
              <div className="form-check">
                <label htmlFor="no">
                  <input type="radio" value='0' id="no" name="islive"
                    onChange={(e) => setIsLive('0')} /> No
                </label>
              </div>
              <div className="text-end">
                <input type="submit" defaultValue="Save changes" className="btn btn-primary" />
                <input type="reset" defaultValue="clear all" className="btn btn-dark-light" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}