import {useState } from "react";
import { Link } from "react-router-dom";
import getBase from "./api";
import axios from "axios";
import showError, { showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
export default function AdminLogin()
{
    let [email,setEmail] = useState();
    let [password,setPassword] = useState();
    let Login = function(event)
    {
        console.log(email,password);
        let apiAddress = getBase() + "login.php";
        //required input : email, password
        //create object of FormData class
        let form = new FormData(); 
        form.append("email",email);
        form.append("password",password);
        axios({
            method:'post',
            responseType:'json',
            url:apiAddress,
            data:form
        }).then((response)=>{
            console.log(response);
            //create variable to store error
            let error = response.data[0]['error'];
            if(error!='no')
            {
                showError(error);
            }
            else 
            {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if(success == 'no')
                {
                    showError(message);
                }
                else 
                {
                    showMessage(message);
                    
                }
            }
        })
        event.preventDefault();
    }
    return (<div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
        <ToastContainer />
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center w-100">
                <div className="row justify-content-center w-100">
                    <div className="col-md-8 col-lg-6 col-xxl-3">
                        <div className="card mb-0">
                            <div className="card-body">
                                <h1 className="text-primary text-center fw-bold">Online shop</h1>
                                <hr />
                                <p className="text-center h5 fw-bold text-uppercase">admin login</p>
                                <form onSubmit={Login}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                        <input
                                        value={email} onChange={(event) => setEmail(event.target.value)} required
                                        type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input
                                        value={password} onChange={(event)=>setPassword(event.target.value)} required
                                        type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-4 text-end">
                                        <Link className="text-primary fw-bold" 
                                        to="/forgot-password">Forgot Password ?</Link>
                                    </div>
                                    <input type="submit" className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2" value="Sign In" />
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