import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import AdminLogin from './AdminLogin';
import AdminForgotPassword from './AdminForgotPassword';
import AdminCategory from './AdminCategory';
import AdminEditCategory from './AdminEditCategory'
import AdminAddCategory from './AdminAddCategory'
import AdminInsertProduct from './AdminInsertProduct'
import AdminEditProduct from './AdminEditProduct'
import AdminProductDetail from './AdminProductDetail'
import AdminOrder from './AdminOrder'
import AdminOrderDetail from './AdminOrderDetail'
import AdminUser from './AdminUser'
import AdminDashboard from './AdminDashboard'
import AdminChangePassword from './AdminChangePassword'
import PageNotFound from './PageNotFound'
import AdminLogout from './AdminLogout'
const root = ReactDOM.createRoot(document.getElementById('root'));

function MyRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AdminLogin />} />
                <Route path="/change-password" element={<AdminChangePassword />} />
                <Route path="/home" element={<AdminDashboard />} />
                <Route path="/forgot-password" element={<AdminForgotPassword />} />
                <Route path="/category" element={<AdminCategory />} />
                <Route path="/edit-category" element={<AdminEditCategory />} />
                <Route path="/add-category" element={<AdminAddCategory />} />
                <Route path="/insert-product" element={<AdminInsertProduct />} />
                <Route path="/edit-product" element={<AdminEditProduct />} />
                <Route path="/product-detail" element={<AdminProductDetail />} />
                <Route path="/order" element={<AdminOrder />} />
                <Route path="/order-detail" element={<AdminOrderDetail />} />
                <Route path="/user" element={<AdminUser />} />
                <Route path="/logout" element={<AdminLogout />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

root.render(<MyRouter />);
