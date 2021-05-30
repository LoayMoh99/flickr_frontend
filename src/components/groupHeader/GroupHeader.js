import React,{useState,useEffect} from 'react';
import '../HeaderBar/userInfo.css';
import '../../fonts/font/flaticon.css';
import './extraGroupDesign.css'
import {showEdit} from '../HeaderBar/edit'
import {closeEdit} from '../HeaderBar/edit.js'
import defaultProfile from '../../img/deefault.jpg';
import groupBG from '../../img/groupBG.jpg'
import groupimg from '../../img/images.png'
import Header from '../navbar/mainNav'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
const endpoint = 'http://localhost:3001/'


export default function GroupHeader(props){
    const [groupInfo, setgroupInfo] = useState([]);
    const [isJoiningGroup,setJoiningGroup]=useState(false);
    useEffect(() => {
        const fetchData = async () => {
        const {data,status} = await axios.get( endpoint+'groups?id'+props.groupID,);
        console.log(status);
        if (status === 200){
            setgroupInfo(data[0]);
            console.log("el group Fataaa7");
            //setJoiningGroup(groupInfo.join)//////API
        }
        console.log(groupInfo);
};
fetchData();
},[]);
    
    const [isGroupPhotos,setGroupPhotos] = useState(false);
    const [isGroupOverview,setGroupOverview] = useState(true);
    const [isGroupMembers,setGroupMembers] = useState(false);
    const plusIcon = <FontAwesomeIcon icon={faPlus} color="DarkGrey" />;

    const navStyle={
        color:'white'
    };

    function updateOverview(){
        setGroupOverview(true);
        setGroupPhotos(isGroupPhotos && !isGroupPhotos);
        setGroupMembers(isGroupMembers && !isGroupMembers);
    }

    function updateGroupPhotos(){
        setGroupOverview(isGroupOverview && !isGroupOverview);
        setGroupPhotos(true);
        setGroupMembers(isGroupMembers && !isGroupMembers);
    }

    function updateGroupMember(){
        setGroupOverview(isGroupOverview && !isGroupOverview);
        setGroupPhotos(isGroupPhotos && !isGroupPhotos);
        setGroupMembers(true);
    }
    
    return(
        
        <div>
            <div>
            <Header/>
            </div>
            <div>
                <div className="uName" style={{backgroundImage: `url(${groupBG})`}}>
                    <div className="overlay1">
                        <div className="userInfo">
                            <div className="profImg" style={{backgroundImage: `url(${groupimg})`}}></div>
                            <div className="nameAndInfo">
                                <div id="groupNameAndButtton">
                                    <h1>{groupInfo.name}</h1>
                                    {!isJoiningGroup&&<button>{plusIcon} Follow</button>}
                                </div>
                                <div className="numbers">
                                    <div className="follwingFollowers">
                                        <p>{props.username}</p>
                                        <ul className="NavbarAndheaderul"  id="groupAdj">
                                            <li>Members</li>
                                            <li> Photos</li>
                                        </ul>
                                    </div>
                                    <div className="joined">
                                        <p>{props.num_public_photos} Photos</p>
                                        <p>Joined {props.date_joined}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navAndSearch extraPadding">
                    <ul className="editNav NavbarAndheaderul">
                        <li className=" mainHeadeNavCoices" className={isGroupOverview && "defaultSelect"}  onClick={updateOverview}>Overvirw</li>
                        <li className=" mainHeadeNavCoices" className={isGroupPhotos && "defaultSelect"}  onClick={updateGroupPhotos}>Photos</li>
                        <li className=" mainHeadeNavCoices" className={isGroupMembers && "defaultSelect"}  onClick={updateGroupMember}>Members</li>
                    </ul>
                </div>
            </div>
            <div>
                {/* {isPhotoStream && <Photostream/>}
                {isCameraRoll && <CameraRoll/>} */}
            </div>
        </div>
    );
}