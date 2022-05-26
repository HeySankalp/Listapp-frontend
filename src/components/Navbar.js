import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../logo.png'

const Navbar = (props) => {

    const navigate = useNavigate();
    let location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        localStorage.removeItem('loggedInUser');
        props.showAlert("primary","Logout successfully!");
        navigate('/login');
    }




    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                <img src={logo} alt="" width="30" height="30" className="d-inline-block align-text-top mx-1"/>
                    The<span style={{color:'#f17126'}}>Math</span>Company</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>

                    {!localStorage.getItem('token') ?
                        <form className="d-flex">
                            <Link to="/login" className="btn btn-outline-light mx-1" role="button">Login</Link>
                            <Link to="/signup" className="btn btn-outline-light mx-2" role="button">Signup</Link>
                        </form> :<div><i style={{color:'white'}} className="fa-solid fa-circle-user fa-xl"></i><span className='mx-2' style={{color:'#f17126',fontWeight:600}}>{localStorage.getItem('userName')}</span>  <button onClick={handleLogout} className="btn btn-outline-light mx-2">Logout</button></div>}
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
