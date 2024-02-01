import AdminMenu from "./AdminMenu";
export default function AdminOrder()
{
    return(<div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    {/* Sidebar Start */}
    <AdminMenu />
    {/*  Sidebar End */}
    {/*  Main wrapper */}
    <div className="body-wrapper">
      <div style={{"min-height":"100vh"}} className="container-fluid bg-secondary-subtle border">
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
                  <tr>
                    <td>1</td>
                    <td>Mon 29-jan-2024</td>
                    <td>Confirmed</td>
                    <td>145000</td>
                    <td>Bhavnagar <br />
                      364001
                    </td>
                    <td>
                      <h1><a href="admin-order-detail.html"><i className="ti ti-eye" /></a> </h1>
                    </td>
                  </tr>
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