import AdminMenu from "./AdminMenu";

export default function AdminUser()
{
    return (<div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    <AdminMenu />
    {/*  Main wrapper */}
    <div className="body-wrapper">
      <div style={{"min-height":"100vh"}} className="container-fluid bg-secondary-subtle border">
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
                    <td>Created At</td>
                    <td width="10%">Action</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>ankit3385@gmail.com</td>
                    <td>9662512857</td>
                    <td>01-02-2024</td>
                    <td>
                      <h1><a href="admin-order.html"><i className="ti ti-eye" /></a> </h1>
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
  );
}