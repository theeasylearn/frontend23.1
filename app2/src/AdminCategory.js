import AdminMenu from "./AdminMenu"
export default function AdminCategory() {
    return (<div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
        {/* Sidebar Start */}
        <AdminMenu />
        {/*  Sidebar End */}
        {/*  Main wrapper */}
        <div className="body-wrapper">
            <div style={{ "min-height": "100vh" }} className="container-fluid bg-secondary-subtle border">
                <div className="card">
                    <div className="card-header text-bg-primary p-3 d-flex justify-content-between">
                        <h3 className="text-white">Categories</h3>
                        <a href="admin-add-category.html" className="btn btn-light">Add category</a>
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
                                <tr>
                                    <td>1</td>
                                    <td>Mobile</td>
                                    <td>
                                        <a className="example-image-link" href="https://picsum.photos/600?random=1" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                                            <img className="img-fluid example-image" src="https://picsum.photos/120?random=1" />
                                        </a>
                                    </td>
                                    <td>
                                        Yes
                                    </td>
                                    <td className="d-flex justify-content-between">
                                        <h1><a href="#"><i className="ti ti-trash" /></a> </h1>
                                        <h1><a href="admin-edit-category.html"><i className="ti ti-pencil" /></a></h1>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}