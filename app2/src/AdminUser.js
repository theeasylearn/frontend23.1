import AdminMenu from "./AdminMenu";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import getBase from "./api";
import axios from 'axios';
import showError from "./toast-message";

export default function AdminUser() {
  //create state array
  let [users, setUser] = useState([]);
  useEffect(() => {
    if (users.length == 0) {
      //api call
      axios({
        method: 'get',
        responseType: 'json',
        url: getBase() + "users.php"
      }).then((response) => {
        console.log(response);
        if (response.status === 200) {
          var data = response.data;
          console.log(data);
          var error = data[0]['error'];
          if (error !== 'no')
            showError(error)
          else if (data[1]['total'] === '0')
            showError('no users found');
          else {
            data.splice(0, 2);
            setUser(data);
          }
        }
      })
        .catch((error) => {
          console.log(error)
        });
    }
  });
  let DisplayUser = function (item) {
    return (<tr>
      <td>{item.id}</td>
      <td>{item.email}</td>
      <td>{item.mobile}</td>
      <td>
        <h1><a href="admin-order.html"><i className="ti ti-eye" /></a> </h1>
      </td>
    </tr>);
  }
  return (<div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    <AdminMenu />
    <div className="body-wrapper">
      <ToastContainer />
      <div style={{ "min-height": "100vh" }} className="container-fluid bg-secondary-subtle border">
        <div className="card">
          <div className="card-header text-bg-primary p-3">
            <h3 className="text-white">Users</h3>
          </div>
          <div className="card-body">
            <h5 className="card-title fw-semibold mb-4">Existing Users</h5> <hr />
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <td width="10%">ID</td>
                    <td>Email</td>
                    <td>Mobile</td>
                    <td width="10%">Action</td>
                  </tr>
                </thead>
                <tbody>
                    {users.map((item) => DisplayUser(item))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}