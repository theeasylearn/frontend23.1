import AdminMenu from "./AdminMenu";
export default function AdminDashboard()
{
    return(<div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    {/* Sidebar Start */}
    <AdminMenu />
    {/*  Sidebar End */}
    {/*  Main wrapper */}
    <div className="body-wrapper">
      <div style={{"min-height":"100vh"}} className="container-fluid bg-secondary-subtle border">
        <div className="row">
          <div className="col-lg-3">
            <div className="card bg-warning-subtle shadow">
              <div className="card-body">
                <h5>Today Orders</h5>
                <hr />
                <h6>10</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card bg-info-subtle shadow">
              <div className="card-body">
                <h5>Weekly Orders</h5>
                <hr />
                <h6>70</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card bg-success-subtle shadow">
              <div className="card-body">
                <h5>Monthly Orders</h5>
                <hr />
                <h6>120</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card bg-danger-subtle shadow">
              <div className="card-body">
                <h5>Yearly Orders</h5>
                <hr />
                <h6>1200</h6>
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
                <h6 className="text-white">75000</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card text-bg-light-gray shadow">
              <div className="card-body">
                <h5>Products</h5>
                <hr />
                <h6>75</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card text-bg-success shadow">
              <div className="card-body">
                <h5 className="text-white">Categories</h5>
                <hr />
                <h6 className="text-white">50</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}