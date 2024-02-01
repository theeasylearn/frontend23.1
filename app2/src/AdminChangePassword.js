import AdminMenu from "./AdminMenu";
export default function AdminChangePassword()
{
    return(<div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    {/* Sidebar Start */}
    <AdminMenu/>
    {/*  Sidebar End */}
    {/*  Main wrapper */}
    <div className="body-wrapper">
      <div style={{"min-height":"100vh"}} className="container-fluid bg-secondary-subtle border">
        <div className="card">
          <div className="card-header text-bg-primary p-3">
            <h3 className="text-white">Change password</h3>
          </div>
          <div className="card-body">
            <form action>
              <div className="mb-3">
                <label htmlFor="currentPassword" className="form-label">Current Password</label>
                <input type="password" className="form-control" id="currentPassword" name="currentPassword" required />
              </div>
              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">New Password</label>
                <input type="password" className="form-control" id="newPassword" name="newPassword" required />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmNewPassword" className="form-label">Confirm New Password</label>
                <input type="password" className="form-control" id="confirmNewPassword" name="confirmNewPassword" required />
              </div>
              <div className="text-end">
                <input type="submit" defaultValue="Save changes" className="btn btn-primary" />
                <input type="reset" defaultValue="clear all" className="btn btn-dark-light" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}