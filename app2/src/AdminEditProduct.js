import AdminMenu from "./AdminMenu";
import VerifyLogin from "./VerifyLogin";
export default function AdminEditProduct()
{
    VerifyLogin();
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
          </div>
          <div className="card-body">
            <h5 className="card-title fw-semibold mb-4">Edit product</h5>
            <hr />
            <form>
              {/* 1st row */}
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="categoryId" className="form-label">Select category</label>
                  <select className="form-select" id="categoryId" name="categoryId" required>
                    <option>Select</option>
                    <option value={1}>Category 1</option>
                    <option value={2}>Category 2</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="productName" className="form-label">Name</label>
                  <input type="text" className="form-control" id="productName" name="productName" required />
                </div>
                <div className="col-md-4">
                  <label htmlFor="productPrice" className="form-label">Price</label>
                  <input type="number" className="form-control" id="productPrice" name="productPrice" required />
                </div>
              </div>
              {/* 2nd row */}
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="productPhoto" className="form-label">Photo</label>
                  <input type="file" className="form-control" id="productPhoto" name="productPhoto" accept="image/*" required />
                </div>
                <div className="col-md-3">
                  <label htmlFor="productStock" className="form-label">Stock</label>
                  <input type="number" className="form-control" id="productStock" name="productStock" required />
                </div>
                <div className="col-md-2">
                  <label htmlFor="productWeight" className="form-label">Weight</label>
                  <input type="number" className="form-control" id="productWeight" name="productWeight" required />
                </div>
                <div className="col-md-3">
                  <label htmlFor="productSize" className="form-label">Size</label>
                  <input type="text" className="form-control" id="productSize" name="productSize" />
                </div>
              </div>
              {/* 3rd row */}
              <div className="row mb-3">
                <div className="col-md-2">
                  <b>Is this product live?</b>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="isLive" id="yes" defaultValue="Yes" required />
                    <label className="form-check-label" htmlFor="yes">
                      (Yes)
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="isLive" id="no" defaultValue="No" required />
                    <label className="form-check-label" htmlFor="no">
                      (No)
                    </label>
                  </div>
                </div>
                <div className="col-md-10">
                  <label htmlFor="productDescription" className="form-label">Product Description</label>
                  <textarea className="form-control" id="productDescription" name="productDescription" rows={3} required defaultValue={""} />
                </div>
              </div>
              {/* Submit button */}
              <div className="row">
                <div className="col-12 text-end">
                  <input type="submit" defaultValue="Save changes" className="btn btn-primary" />
                  <input type="reset" defaultValue="clear all" className="btn btn-dark-light" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}