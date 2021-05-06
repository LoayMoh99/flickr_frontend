import React from 'react'
import './footer.css'
import {Link} from "react-router-dom";
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

export default function Footer(){
    const navStyle={
        color:'white'
    };
    return(
        <div className="footer">
            <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <div className="navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link style={navStyle} to="/About">
                    <a className="nav-link" href="#">About</a>
                    </Link>
                    <Link style={navStyle} to="/">
                    <a className="nav-link" href="#">Home</a>
                    </Link>
                    <Link style={navStyle} to="/Jobs">
                    <a className="nav-link" href="#">Jobs</a>
                    </Link>
                    <Link style={navStyle} to="/Blog">
                    <a className="nav-link" href="#">Blog</a>
                    </Link>
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Developers</a>
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Guidelines</a>
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Help</a>
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Report Abuse</a>
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Help form</a>
                </div>
                </div>
            </div>
            </nav>
            <div className="downFooter navbar">
            <div className="container">
                    <ul class="nav NavbarAndheaderul">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    </ul>
                    <p>SmugMug+Flickr. Connecting people through photography.</p>
                    <div className="socialMedia">
                        <i className="flaticon-facebook"></i>
                        <i className="flaticon-twitter"></i>
                        <i className="flaticon-instagram"></i>
                    </div>
                    </div>
            </div>
        </div>
    )
}