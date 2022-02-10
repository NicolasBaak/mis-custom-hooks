import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const NavBar = () => {
  return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                
                <Link to="/" className="navbar-brand">useContext</Link>
               
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" activeclassname="active" className="nav-link" aria-current="page" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" activeclassname="active" className="nav-link" >About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/loginscreen" activeclassname="active" className="nav-link" >Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  );
};
