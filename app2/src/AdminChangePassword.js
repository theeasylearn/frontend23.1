import AdminMenu from "./AdminMenu";
import VerifyLogin from "./VerifyLogin";
import { useState } from "react";
import {ToastContainer} from 'react-toastify';
import { useCookies } from "react-cookie";
import showError, { showMessage } from "./toast-message";
import getBase from "./api.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function AdminChangePassword()
{
    VerifyLogin();
    var [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
    let [password, setPassword] = useState();
    let [newpassword,setNewPassword] = useState();
    let [confirmpassword,setConfirmPassword] = useState();
    let navigate = useNavigate(); 
    let ChangePassword = function(event)
    {
        console.log(password,newpassword,confirmpassword);
        if(newpassword!==confirmpassword)
        {
          showError("new password and confirm new password are not same");
        }
        else 
        {
            //api calling
            let apiAddress = getBase() + "change_password.php";
            let form = new FormData();
            form.append("password",password);
            form.append("newpassword",newpassword);
            form.append("id",cookies['id']);
            console.log(form);
            axios({
              url: apiAddress,
              method: 'post',
              responseType :'json',
              data: form
            }).then((response) =>{
                console.log(response);
                let error = response.data[0]['error'];
                console.log(error);
                if(error !== 'no')
                  showError(error);
                else  
                {
                    let success = response.data[1]['success'];
                    let message = response.data[2]['message'];
                    
                    if(success === 'no')
                    {
                        showError(message);
                    }
                    else 
                    {
                        showMessage(message);
                        removeCookie('id');
                        setTimeout(() => {
                            navigate("/");
                        },2000);
                    }
                }
            })
        }
        event.preventDefault();
    }
    return(<div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    <AdminMenu/>
    <div className="body-wrapper">
      <ToastContainer />
      <div style={{"min-height":"100vh"}} className="container-fluid bg-secondary-subtle border">
        <div className="card">
          <div className="card-header text-bg-primary p-3">
            <h3 className="text-white">Change password</h3>
          </div>
          <div className="card-body">
            <form action onSubmit={ChangePassword}>
              <div className="mb-3">
                <label htmlFor="currentPassword" className="form-label">Current Password</label>
                <input type="password" className="form-control" id="currentPassword" name="currentPassword" required 
                value={password} onChange={(event) => setPassword(event.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">New Password</label>
                <input type="password" className="form-control" id="newPassword" name="newPassword" required
                value={newpassword} onChange={(event) => setNewPassword(event.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmNewPassword" className="form-label">Confirm New Password</label>
                <input type="password" className="form-control" id="confirmNewPassword" name="confirmNewPassword" required
                value={confirmpassword} onChange={(event) => setConfirmPassword(event.target.value)} />
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