import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // ✅ Import the new CSS file

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">🔥 ChatApp</div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/chat">Chat</Link>
            </div>
        </nav>
    );
};

export default Navbar;
