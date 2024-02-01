import AdminMenu from "./AdminMenu";
export default function AdminEditCategory()
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
            <h3 className="text-white">Categories</h3>
          </div>
          <div className="card-body">
            <h5 className="card-title fw-semibold mb-4">Edit Category</h5>
            <hr />
            <form action>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Edit Category title</label>
                <input type="text" name="title" id="title" className="form-control" placeholder="Category title" required />
              </div>
              <div className="mb-3">
                <label htmlFor="photo" className="form-label">Change photo</label>
                <input type="file" name="photo" id="photo" className="form-control" required accept="image/*" />
              </div>
              <b>is this category live?</b>
              <div className="form-check">
                <label htmlFor="yes">
                  <input type="radio" defaultValue={1} id="yes" name="islive" /> Yes
                </label>
              </div>
              <div className="form-check">
                <label htmlFor="no">
                  <input type="radio" defaultValue={0} id="no" name="islive" /> No
                </label>
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