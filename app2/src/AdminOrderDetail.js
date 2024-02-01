import AdminMenu from "./AdminMenu";
export default function AdminOrderDetail()
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
            <h3 className="text-white">Order ID 1001</h3>
            <button type="button" className="btn btn-success" onclick="window.print()">Print</button>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <tbody><tr>
                    <td width="25%">Order id</td>
                    <td width="25%">1</td>
                    <td width="25%">Name</td>
                    <td width="25%">Ankit Patel</td>
                  </tr>
                  <tr>
                    <td width="25%">Date</td>
                    <td width="25%">Mon 29-jan-2024</td>
                    <td width="25%">Mobile</td>
                    <td width="25%">9662512857</td>
                  </tr>
                  <tr>
                    <td width="25%">Order Status</td>
                    <td width="25%">Confirmed</td>
                    <td width="25%">Email</td>
                    <td width="25%">ankit3385@gmail.com</td>
                  </tr>
                  <tr>
                    <td width="25%">Payment Status</td>
                    <td width="25%">Received Online</td>
                    <td width="25%">City &amp; Pincode</td>
                    <td width="25%">Bhavnagar 364001</td>
                  </tr>
                  <tr>
                    <td width="25%">Remarks</td>
                    <td width="25%">Gift packed requested</td>
                    <td width="25%">Address</td>
                    <td width="25%">105 Eva surbhi, <br />
                      Opp aksharwadi, waghawadi road
                    </td>
                  </tr>
                </tbody></table>
            </div>
            <div className="table-responsive">
              <tfooter>
              </tfooter><table className="table table-sm table-bordered  table-striped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th className="text-end">Price</th>
                    <th className="text-end">Quantity</th>
                    <th className="text-end">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>IPhone</td>
                    <td className="text-end">125000</td>
                    <td className="text-end">2</td>
                    <td className="text-end">250000</td>
                  </tr>
                </tbody>
                <tbody><tr>
                    <td colSpan={4}><b>Grand total</b></td>
                    <td className="text-end">250000</td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}