import React from 'react'
import './footer.css'

export default function Footer(){
    return(
        <div className="footer">
            <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <div className="navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link" href="#">About</a>
                    <a className="nav-link" href="#">Home</a>
                    <a className="nav-link" href="#">Jops</a>
                    <a className="nav-link" href="#">Blog</a>
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
                    <ul class="nav">
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