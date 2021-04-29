import React from 'react';
import './userInfo.css';
import '../../fonts/font/flaticon.css';
import '../../bootstrab/bootstrap.css';
import defaultProfile from '../../img/deefault.jpg';
export default function Userinfo(){
    return(
        <div className="uName">
            <div className="overlay">
                <i className="flaticon-edit"></i>
                <div className="userInfo">
                    <img src={defaultProfile}></img>
                    <div className="nameAndInfo">
                        <h2>user name</h2>
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
    );
}
