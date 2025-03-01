import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <header className="header">
            <div className="logo mt-2">
                <h4>Rv Corner React Study</h4>
            </div>
            <nav className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
                <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
                <NavLink to="/services" className="nav-link" activeClassName="active">Services</NavLink>
                <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
            </nav>
        </header>
    );
};

export default Header;
