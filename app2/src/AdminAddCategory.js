import { useState } from "react";
import AdminMenu from "./AdminMenu"
import VerifyLogin from "./VerifyLogin"
import getBase from "./api";
import axios from "axios";
import showError, { showMessage } from "./toast-message";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
export default function AdminAddCategory()
{
    VerifyLogin();
    //create 3 state variables 
    let [title,setTitle] = useState('');
    let [photo,setPhoto] = useState('');
    let [islive,setIsLive] = useState('');
    let navigate = useNavigate();
    //create inner function
    let insertCategory = function(event)
    {
      event.preventDefault(); //this is required to prevent reloading webpage
      // console.log(title,photo,islive);
      // call api 
      let apiAddress = getBase() + "insert_category.php";
      let form = new FormData(); //formData javascript built in class
      form.append("title",title);
      form.append("photo",photo);
      form.append("islive",islive);
      console.log(form);
      axios({
          method:'post',
          responseType:'json',
          url:apiAddress,
          data: form
      }).then((response) => {
          console.log(response.data);
          //create error variable 
          let error = response.data[0]['error'];
          if(error !== 'no')
          {
              showError(error);
          }
          else 
          {
            let success = response.data[1]['success'];
            let message = response.data[2]['message'];
            if(success === 'no')
              showError(message);
            else 
            {
              showMessage(message);
              setTimeout(() => {
                navigate("/category");
              },2000);
            }
          }
      }).catch((error) =>{
          console.log(error);
      })
    }
    return(<div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    {/* Sidebar Start */}
    <AdminMenu />
    {/*  Sidebar End */}
    {/*  Main wrapper */}
    <div className="body-wrapper">
      <ToastContainer />
      <div style={{"min-height":"100vh"}} className="container-fluid bg-secondary-subtle border">
        <div className="card">
          <div className="card-header text-bg-primary p-3">
            <h3 className="text-white">Categories</h3>
          </div>
          <div className="card-body">
            <h5 className="card-title fw-semibold mb-4">Add new Category</h5>
            <hr />
            <form method="post" encType="multipart/form-data" onSubmit={insertCategory}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Category title</label>
                <input type="text" name="title" id="title" className="form-control" placeholder="Category title" required 
                value={title} onChange={(e) => setTitle(e.target.value)}/>
              </div>
              <div className="mb-3">
                <label htmlFor="photo" className="form-label">Select photo</label>
                <input type="file" name="photo" id="photo" className="form-control" required accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} />
              </div>
              <b>is this category live?</b>
              <div className="form-check">
                <label htmlFor="yes">
                  <input type="radio" value={1} onChange={(e) => setIsLive(e.target.value)} id="yes" name="islive" /> Yes
                </label>
              </div>
              <div className="form-check">
                <label htmlFor="no">
                  <input type="radio" value={0} onChange={(e) => setIsLive(e.target.value)}  id="no" name="islive" /> No
                </label>
              </div>
              <div className="text-end">
                <input type="submit" value="Save changes" className="btn btn-primary" />
                <input type="reset" value="clear all" className="btn btn-dark-light" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}