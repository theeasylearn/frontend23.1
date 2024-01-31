export default function AdminForgotPassword()
{
    return (<div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    <div className="position-relative overflow-hidden bg-warning-subtle min-vh-100 d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className="row justify-content-center w-100">
          <div className="col-md-8 col-lg-6 col-xxl-3">
            <div className="card mb-0">
              <div className="card-body">
                <h1 className="text-warning text-center fw-bold">Online shop</h1>
                <hr />
                <p className="text-center h5 fw-bold text-uppercase">Recover Account</p>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <a href="./index.html" className="btn btn-warning w-100 py-8 fs-4 mb-4 rounded-2">Recover account</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}