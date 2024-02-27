import AdminMenu from "./AdminMenu";
import { useEffect, useState } from "react";
import getBase, { getImgBase } from "./api";
import showError from "./toast-message";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import VerifyLogin from "./VerifyLogin";

export default function AdminOrder() {
  //create state array
  let [data, setData] = useState([]);
  let [isDataFetched, setDataFetched] = useState(false);
  VerifyLogin();
  useEffect(() => {
    if (isDataFetched === false) {
      var apiAddress = getBase() + "orders.php";
      axios({
        url: apiAddress,
        responseType: 'json',
        method: 'get'
      }).then((response) => {
        console.log(response);
        if (response.status !== 200) {
          showError('oops,something went wrong, please contact administrator');
        }
        else if (response.data[0]['error'] !== 'no') {
          showError(response.data[0]['error']);
        }
        else if (response.data[1]['total'] === 0) {
          showError('no orders found');
        }
        else {
          response.data.splice(0, 2); //remove 1st 2 object
          setData(response.data);
          setDataFetched(true);
        }
      });
    }
  });
  let DisplayOrder = function (item) {
    return (<tr>
      <td>{item.id}</td>
      <td>{item.billdate}</td>
      <td>Confirmed</td>
      <td>{item.amount}</td>
      <td>{item.city} <br />
        {item.pincode}
      </td>
      <td>
        <h1><Link to={"/order-detail/" + item.id}><i className="ti ti-eye" /></Link> </h1>
      </td>
    </tr>);
  }
  return (<div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    {/* Sidebar Start */}
    <AdminMenu />
    {/*  Sidebar End */}
    {/*  Main wrapper */}
    <div className="body-wrapper">
      <div style={{ "min-height": "100vh" }} className="container-fluid bg-secondary-subtle border">
        <div className="card">
          <div className="card-header text-bg-primary p-3">
            <h3 className="text-white">Orders</h3>
          </div>
          <div className="card-body">
            <h5 className="card-title fw-semibold mb-4">Existing orders</h5> <hr />
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <td width="10%">ID</td>
                    <td>Date</td>
                    <td>Status</td>
                    <td>Amount</td>
                    <td>City <br /> Pincode</td>
                    <td width="10%">Action</td>
                  </tr>
                </thead>
                <tbody>
                    {data.map((item)=> DisplayOrder(item))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}