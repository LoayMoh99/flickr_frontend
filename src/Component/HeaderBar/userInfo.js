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
                        <li className="defaultSelect mainHeadeNavCoices" >About</li>
                        <li className=" mainHeadeNavCoices">Photostream</li>
                        <li className=" mainHeadeNavCoices">Albums</li>
                        <li className=" mainHeadeNavCoices">Favs</li>
                        <li className=" mainHeadeNavCoices">Galleries</li>
                        <li className=" mainHeadeNavCoices">Groups</li>
                        <li className=" mainHeadeNavCoices">stats</li>
                        <li className=" mainHeadeNavCoices">Camera Roll</li>
                    </ul>
                </div>
            </div>
        <div className="modal-container">
                <div className="overlay2"></div>
                <div className="modal-body">
                    <div className="navAndSearch">
                        <ul className="editNav">
                            <li className="defaultSelect mainHeadeNavCoices2">Photostream</li>
                            <li className=" mainHeadeNavCoices2">Albums</li>
                            <li className=" mainHeadeNavCoices2">Upload</li>
                        </ul>
                        <div className="searchAndClose">
                        <div className="searchBox2">
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
