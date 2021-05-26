import React, { useState, useEffect } from 'react'
import '../../fonts/font/flaticon.css'
import './Upload.css'
import flickrPhoto from '../../img/flickr.jpg'
import { Link } from 'react-router-dom'
import './UploadActions'

export default function Upload(props){
    
    
    const imageUpload = (e) => {
        const file = e.target.files[0];
        getBase64(file).then(base64 => {
            localStorage["fileBase64"] = base64;
            console.debug("file stored",base64);
        });
    };
    const navStyle={
        color:'white'
    };
    return(
        <div className="uploadNavbar">
            <nav className="navbar fix_nav">
            <div className="container-fluid">
            <div className="logoPlusNav">
            <Link className="uploadLink" style={navStyle} to="/">
                <a className="flickLogoName" href="#top">
                    <img src={flickrPhoto} alt="flickrLogo"></img>
                </a>
            </Link>
            <Link  style={navStyle} to="/">
                <span>Your Photostream</span>
            </Link>
            </div>
            </div>
            </nav>
            <div className="uploadText">
                <h3>You can upload 1000 more photos and videos</h3>
                <p>Drag & drop photos here</p>
                <p>or</p>
                <div>
                <input type="file"  id="imageFile" name='imageFile'  onChange={imageUpload}/>
                </div>
            </div>
        </div>
    );
    const getBase64 = (file) => {
        return new Promise((resolve,reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
            reader.readAsDataURL(file);
        });}
    
}