import AdminMenu from "./AdminMenu"
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import showError, { showMessage } from "./toast-message";
import 'react-toastify/dist/ReactToastify.css';
import getBase, { getImgBase } from "./api";
import VerifyLogin from "./VerifyLogin";
import { Link } from "react-router-dom";
import axios from 'axios';
export default function AdminCategory() {
    // /create state array
    VerifyLogin();
    let [categories, setCategory] = useState([]);
    useEffect(() => {
        //api call 
        if (categories.length === 0) {
            var apiAddress = getBase() + "category.php";
            fetch(apiAddress)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    let error = data[0]['error'];
                    if (error !== 'no') {
                        alert(error);
                    }
                    else {
                        let total = data[1]['total'];
                        if (total === 0) {
                            alert('no category available');
                        }
                        else {
                            data.splice(0, 2); //delete 1st 2 objects from list
                            setCategory(data);
                        }
                    }
                })
                .catch((error) => {
                    showError('oops something went wrong, please contact developer....');
                });
        }

    });
    let DeleteCategory = function(e,id)
    {
        console.log(id);
        let apiAddress = getBase() + "delete_category.php?id=" + id;
        axios({
            method:'get',
            responseType:'json',
            url:apiAddress
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if(error !=='no')
                showError(error);
            else 
            {
                showMessage(response.data[1]['message']);
                let temp = categories.filter((item) => {
                    if(item.id !== id)
                        return item
                });
                setCategory(temp);  
            }
        }).catch((error)=>{
            if(error.code === 'ERR_NETWORK')
                showError('either you are or server is offline');
        });
        e.preventDefault();

    }
    let DisplayCategory = function (item) {

        return (<tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>
                <a className="example-image-link" href="https://picsum.photos/600?random=1" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                    <img className="img-fluid example-image"
                        src={getImgBase() + "/category/" + item.photo} />
                </a>
            </td>
            <td>
                {(item.islive === "1" ? "Yes" : "No")}
            </td>
            <td className="d-flex justify-content-between">
                <h1><a href="#" onClick={(e) => DeleteCategory(e,item.id)}><i className="ti ti-trash" /></a> </h1>
                <h1><Link to={"/edit-category/" + item.id}><i className="ti ti-pencil" /></Link></h1>
            </td>
        </tr>);
    }
    return (<div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
        {/* Sidebar Start */}
        <AdminMenu />
        {/*  Sidebar End */}
        {/*  Main wrapper */}
        <div className="body-wrapper">
            <ToastContainer />
            <div style={{ "min-height": "100vh" }} className="container-fluid bg-secondary-subtle border">
                <div className="card">
                    <div className="card-header text-bg-primary p-3 d-flex justify-content-between">
                        <h3 className="text-white">Categories</h3>
                        <Link to="/add-category" className="btn btn-light">Add category</Link>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title fw-semibold mb-4">Existing Category</h5> <hr />
                        <table className="table table-bordered" width="100%">
                            <thead>
                                <tr>
                                    <th width="5%">Sr no</th>
                                    <th>Name</th>
                                    <th width="50%">Photo</th>
                                    <th width="5%">Is Live?</th>
                                    <th width="15%">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((item) => DisplayCategory(item))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}