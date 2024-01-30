import React from 'react';
import { BrowserRouter, Route, Link, Routes, Outlet } from 'react-router-dom';
const Home = () => {
    console.log('home route');
    <div>Home Page</div>
};
const About = () => {
    console.log('about route');
    <div>About Page</div>
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
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;
