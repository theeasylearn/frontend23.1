import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';
import AdminLogin from './AdminLogin';
import AdminForgotPassword from './AdminForgotPassword';
import AdminCategory from './AdminCategory';
import AdminEditCategory from './AdminEditCategory';
import AdminAddCategory from './AdminAddCategory';
import AdminInsertProduct from './AdminInsertProduct';
import AdminEditProduct from './AdminEditProduct';
import AdminProductDetail from './AdminProductDetail';
import AdminOrder from './AdminOrder';
import AdminOrderDetail from './AdminOrderDetail';
import AdminUser from './AdminUser';
import AdminDashboard from './AdminDashboard';
import AdminChangePassword from './AdminChangePassword';
import PageNotFound from './PageNotFound';
import AdminLogout from './AdminLogout';
import AdminProduct from './AdminProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MyRouter() {
  const AnimatedRoute = ({ component }) => {
    const location = useLocation();

    return (
      <motion.div
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '100%' }}
      >
        {component}
      </motion.div>
    );
  };

  return (
    <BrowserRouter>
      <div>
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path="/" element={<AnimatedRoute component={<AdminLogin />} />} />
            <Route path="/change-password" element={<AnimatedRoute component={<AdminChangePassword />} />} />
            <Route path="/home" element={<AnimatedRoute component={<AdminDashboard />} />} />
            <Route path="/forgot-password" element={<AnimatedRoute component={<AdminForgotPassword />} />} />
            <Route path="/category" element={<AnimatedRoute component={<AdminCategory />} />} />
            <Route path="/edit-category/:categoryid" element={<AnimatedRoute component={<AdminEditCategory />} />} />
            <Route path="/add-category" element={<AnimatedRoute component={<AdminAddCategory />} />} />
            <Route path="/product" element={<AnimatedRoute component={<AdminProduct />} />} />
            <Route path="/insert-product" element={<AnimatedRoute component={<AdminInsertProduct />} />} />
            <Route path="/edit-product/:productid" element={<AnimatedRoute component={<AdminEditProduct />} />} />
            <Route path="/product-detail/:productid" element={<AnimatedRoute component={<AdminProductDetail />} />} />
            <Route path="/order" element={<AnimatedRoute component={<AdminOrder />} />} />
            <Route path="/order-detail/:orderid" element={<AnimatedRoute component={<AdminOrderDetail />} />} />
            <Route path="/user" element={<AnimatedRoute component={<AdminUser />} />} />
            <Route path="/logout" element={<AnimatedRoute component={<AdminLogout />} />} />
            <Route path="*" element={<AnimatedRoute component={<PageNotFound />} />} />
          </Routes>
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

root.render(<MyRouter />);
