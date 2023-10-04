import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Profile from './pages/Profile';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Sign_up from './pages/Sign_up;'

function App() {
    return (
        <Router>
            <div className='container'>
                <ul>
                    <li>
                        <Link to='/Login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/Sign_up'>Sign up</Link>
                    </li>
                </ul>

                <Routes>
                    <Route exact path="/Login" element={<Login />} />
                    <Route exact path="/Sign_up" element={<Sign_up />} />
                </Routes>

            </div>
        </Router>
    );
}

export default App;
