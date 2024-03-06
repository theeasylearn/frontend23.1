import AdminMenu from "./AdminMenu";
import { motion } from "framer-motion";
import VerifyLogin from "./VerifyLogin";
import { useEffect, useState } from "react";
import getBase from "./api";
import showError from "./toast-message";
import axios from "axios";
export default function AdminDashboard() {
  VerifyLogin();
  
  let [category,setCategory] = useState(0);
  let [product,setProduct] = useState(0);
  let [user,setUser] = useState(0);
  let [daily,setDaily] = useState(0);
  let [weekly,setWeekly] = useState(0);
  let [monthly,setMonthly] = useState(0);
  let [yearly,setYearly] = useState(0);

  useEffect(()=>{
      let apiAddress = getBase() + "summery.php";
      axios.get(apiAddress,{
        responseType:'json'
      }).then((response) => {
          console.log(response.data);
          let error = response.data[0]['error'];
          if(error !== 'no')
            showError(error);
          else 
          {
            setCategory(response.data[1]['categories']);
            setProduct(response.data[1]['products']);
            setUser(response.data[1]['users']);
            setDaily(response.data[1]['daily']);
            setWeekly(response.data[1]['weekly']);
            setMonthly(response.data[1]['monthly']);
            setYearly(response.data[1]['yearly']);
          }
      })
      .catch((error) => {
          showError('oops something went wrong please contact administrator');
      });
  });
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
    >
      <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
        {/* Sidebar Start */}
        <AdminMenu />
        {/*  Sidebar End */}
        {/*  Main wrapper */}
        <div className="body-wrapper">
          <div style={{ "min-height": "100vh" }} className="container-fluid bg-secondary-subtle border">
            <div className="row">
              <div className="col-lg-3">
                <div className="card bg-warning-subtle shadow">
                  <div className="card-body">
                    <h5>Today Orders</h5>
                    <hr />
                    <h6>{daily}</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card bg-info-subtle shadow">
                  <div className="card-body">
                    <h5>Weekly Orders</h5>
                    <hr />
                    <h6>{weekly}</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card bg-success-subtle shadow">
                  <div className="card-body">
                    <h5>Monthly Orders</h5>
                    <hr />
                    <h6>{monthly}</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card bg-danger-subtle shadow">
                  <div className="card-body">
                    <h5>Yearly Orders</h5>
                    <hr />
                    <h6>{yearly}</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4">
                <div className="card text-bg-dark shadow">
                  <div className="card-body">
                    <h5 className="text-white">Users</h5>
                    <hr />
                    <h6 className="text-white">{user}</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card text-bg-light-gray shadow">
                  <div className="card-body">
                    <h5>Products</h5>
                    <hr />
                    <h6>{product}</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card text-bg-success shadow">
                  <div className="card-body">
                    <h5 className="text-white">Categories</h5>
                    <hr />
                    <h6 className="text-white">{category}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}