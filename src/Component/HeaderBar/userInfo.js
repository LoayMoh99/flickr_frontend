import React from 'react';
import './userInfo.css';
import '../../fonts/font/flaticon.css';
import '../../bootstrab/bootstrap.css';
import {showEdit} from './edit.js'
import {closeEdit} from './edit'
import defaultProfile from '../../img/deefault.jpg';
export default function Userinfo(){
    return(
        <div>
            <div>
                <div className="uName">
                    <div className="overlay">
                        <i className="flaticon-edit" onClick={()=>showEdit()}></i>
                        <div className="userInfo">
                            <img src={defaultProfile}></img>
                            <div className="nameAndInfo">
                                <h1>user name</h1>
                                <div className="numbers">
                                    <div className="follwingFollowers">
                                        <p>User Email</p>
                                        <ul>
                                            <li><a>followers</a></li>
                                            <li><a>following</a></li>
                                        </ul>
                                    </div>
                                    <div className="joined">
                                        <p># of Photos</p>
                                        <p>Joined Year number</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navAndSearch extraPadding">
                    <ul className="editNav">
                        <li>About</li>
                        <li>Photostream</li>
                        <li>Albums</li>
                        <li>Favs</li>
                        <li>Galleries</li>
                        <li>Groups</li>
                        <li>stats</li>
                        <li>Camera Roll</li>
                    </ul>
                </div>
            </div>
        <div className="modal-container">
                <div className="overlay2"></div>
                <div className="modal-body">
                    <div className="navAndSearch">
                        <ul className="editNav">
                            <li>Photostream</li>
                            <li>Albums</li>
                            <li>Upload</li>
                        </ul>
                        <div className="searchAndClose">
                        <div className="searchBox">
                            <button className="searchBtn">
                                <i className="flaticon-search"></i>
                            </button>
                            <input type="text" placeholder="Photos, People or Groups   "/>
                        </div>
                        <i className="flaticon-close" onClick={()=>closeEdit()}></i>
                        </div>
                    </div>
                    <div className="showPicInItems"></div>
                    <div className="slctBtn">
                        <button>select</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
