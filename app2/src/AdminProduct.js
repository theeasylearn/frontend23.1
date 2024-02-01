import AdminMenu from "./AdminMenu";
export default function AdminProduct()
{
    return(<div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    {/* Sidebar Start */}
    <AdminMenu />
    {/*  Sidebar End */}
    {/*  Main wrapper */}
    <div className="body-wrapper">
      <div style={{"min-height":"100vh"}} className="container-fluid bg-secondary-subtle border">
        <div className="card">
          <div className="card-header text-bg-primary p-3 d-flex justify-content-between">
            <h3 className="text-white">Products</h3>
            <a href="admin-insert-product.html" className="btn btn-light">Add product</a>
          </div>
          <div className="card-body">
            <h5 className="card-title fw-semibold mb-4">Existing Product</h5>
            <hr />
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th width="5%">Sr no</th>
                  <th width="15%">Category</th>
                  <th width="25%">Title</th>
                  <th width="20%">Photo</th>
                  <th width="10%">Price</th>
                  <th width="5%">Is live?</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mobile</td>
                  <td>IPhone 15</td>
                  <td>
                    <a className="example-image-link" href="https://picsum.photos/600?random=1" data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                      <img src="https://picsum.photos/150?random=1" className="img-fluid example-image" />
                    </a>
                  </td>
                  <td>125000</td>
                  <td>Yes</td>
                  <td className="d-flex justify-content-evenly">
                    <h1><a href="admin-product-detail.html"><i className="ti ti-eye" /></a> </h1>
                    <h1><a href="#"><i className="ti ti-trash" /></a> </h1>
                    <h1><a href="admin-edit-product.html"><i className="ti ti-pencil" /></a></h1> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}