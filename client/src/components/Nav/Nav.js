import React from "react";
import { Link } from "react-router-dom";
import AuthButtons from "./AuthButtons";

const Nav = (props) =>
    <ul className="nav navbar-nav navbar-right" style={{paddingRight: "20px", lineHeight: "50px"}}>
        <li className={window.location.pathname === "/" ? "active" : ""}>
            <Link to="/" className = "homeLink">Home</Link>
        </li> 
        <li className={window.location.pathname === "/profile" ? "active" : ""}>
            <Link to="/profile">My Profile</Link>
        </li>
        <li className={window.location.pathname === "/resource" ? "active" : ""}>
            <Link to="/resource">Resources</Link>
        </li>
        <li className={window.location.pathname === "/blog" ? "active" : ""}>
            <Link to="/blog">Emergency Prep Blog</Link>
        </li>
        <li className={window.location.pathname === "/emergencyMap" ? "active" : ""}>
            <Link to="/emergencyMap">Emergency Map</Link>
        </li>
        <li><AuthButtons auth={props.auth} />
        </li>
    </ul>;

export default Nav;