export default function AdminMenu() {
    return (<aside className="left-sidebar">
        {/* Sidebar scroll*/}
        <div>
            <div className="brand-logo d-flex align-items-center justify-content-between">
                <h3 className="text-primary">Online shop</h3>
                <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                    <i className="ti ti-x fs-8" />
                </div>
            </div>
            {/* Sidebar navigation*/}
            <nav className="sidebar-nav scroll-sidebar shadow" data-simplebar>
                <ul id="sidebarnav">
                    <li className="sidebar-item">
                        <a className="sidebar-link" href="admin-dashboard.html" aria-expanded="false">
                            <span>
                                <i className="ti ti-home" />
                            </span>
                            <span className="hide-menu">Dashboard</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link" href="admin-category.html" aria-expanded="false">
                            <span>
                                <i className="ti ti-category" />
                            </span>
                            <span className="hide-menu">Category</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link" href="admin-product.html" aria-expanded="false">
                            <span>
                                <i className="ti ti-gift" />
                            </span>
                            <span className="hide-menu">Products</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link" href="admin-order.html" aria-expanded="false">
                            <span>
                                <i className="ti ti-garden-cart" />
                            </span>
                            <span className="hide-menu">Orders</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link" href="admin-users.html" aria-expanded="false">
                            <span>
                                <i className="ti ti-users" />
                            </span>
                            <span className="hide-menu">Users</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link" href="admin-change-password.html" aria-expanded="false">
                            <span>
                                <i className="ti ti-settings-automation" />
                            </span>
                            <span className="hide-menu">Change Password</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a className="sidebar-link" href="admin-logout.html" aria-expanded="false">
                            <span>
                                <i className="ti ti-logout" />
                            </span>
                            <span className="hide-menu">Logout</span>
                        </a>
                    </li>
                </ul>
            </nav>
            {/* End Sidebar navigation */}
        </div>
        {/* End Sidebar scroll*/}
    </aside>);
}