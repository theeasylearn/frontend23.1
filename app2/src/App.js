import React from 'react';
import { BrowserRouter, Route, Link, Routes, Outlet } from 'react-router-dom';

const Home = () => {
    return <div>Home Page</div>;
};

const About = () => {
    return <div>About Page</div>;
};

function App() {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <hr />
                <Outlet />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
