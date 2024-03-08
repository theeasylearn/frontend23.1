import {useState } from "react";
import { Link } from "react-router-dom";
import getBase from "./api";
import axios from "axios";
import showError, { showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AdminForgotPassword()
{
    //create state variable
    let [email,setEmail] = useState();
    let navigate = useNavigate();
    let recoverAccount = function(e)
    {
        e.preventDefault();
        console.log(email);
        let apiAddress = getBase() + "/forgot_password.php?email=" + email;
        axios.get(apiAddress,{
            responseType:'json'
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if(error !== 'no')
              showError(error); 
            else 
            {
                let success =  response.data[1]['success'];
                let message =  response.data[2]['message'];
                if(success === 'no')
                  showError(message);
                else 
                {
                  showMessage(message);
                  setTimeout(() =>  {
                      navigate("/");
                  },2000);
                }
            }
        }).catch((error) => 
        {
            showError('oops something went wrong, contact administrator');
        });
    }
    return (<div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
      <ToastContainer />
    <div className="position-relative overflow-hidden bg-warning-subtle min-vh-100 d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className="row justify-content-center w-100">
          <div className="col-md-8 col-lg-6 col-xxl-3">
            <div className="card mb-0">
              <div className="card-body">
                <h1 className="text-warning text-center fw-bold">Online shop</h1>
                <hr />
                <p className="text-center h5 fw-bold text-uppercase">Recover Account</p>
                <form onSubmit={recoverAccount} >
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} 
                    onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <input type="submit" className="btn btn-warning w-100 py-8 fs-4 mb-4 rounded-2" value='Recover Account' />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}