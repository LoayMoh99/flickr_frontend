import React,{useState,useEffect} from 'react';
import '../HeaderBar/userInfo.css';
import '../../fonts/font/flaticon.css';
import './extraGroupDesign.css'
import defaultProfile from '../../img/deefault.jpg';
import groupBG from '../../img/groupBG.jpg'
import groupimg from '../../img/images.png'
import {GetGroupById} from "../../services/groupServices"
import GroupPhotos from '../GroupPhotos/GroupPhotos'
import Header from '../navbar/mainNav'
import Join from '../Search/Join'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";


export default function GroupHeader(props){
    const path = props.location.pathname;
    const index = path.split('/');
    const id = index[2];
    console.log({id});
    const [groupInfo, setgroupInfo] = useState([]);
    const [isJoiningGroup,setJoiningGroup]=useState(true);
    const [isUndefined,setisUndefined]=useState(true);
    
    useEffect(() => {
        GetGroupById(id).then( response => {
            console.log(response);
            if(response.data!=undefined){
                setgroupInfo(response.data);
                if(response.data.role){
                    setJoiningGroup(true);
                    console.log({isJoiningGroup})
                }
                else{
                    setJoiningGroup(false);
                }
            }
        })

},[]);

    
    return(
        
        <div>
            <div>
            <Header isLogged={true}/>
            </div>
            <div>
                <div className="uName" style={{backgroundImage: `url(${groupBG})`}}>
                    <div className="overlay1">
                        <div className="userInfo">
                            <div className="profImg" style={{backgroundImage: `url(${groupimg})`}}></div>
                            <div className="nameAndInfo">
                                <div id="groupNameAndButtton">
                                    <h1>{groupInfo.name}</h1>
                                    <div id="joinBtnInGroup">
                                    <Join
                                    key={id} 
                                    group_id={id}
                                    role={isJoiningGroup}
                                    />
                                    </div>
                                </div>
                                <div className="numbers">
                                    <div className="follwingFollowers">
                                        <ul className="NavbarAndheaderul"  id="groupAdj">
                                            <li>{groupInfo.count_members} Members</li>
                                            <li>{groupInfo.count_photos} Photos</li>
                                        </ul>
                                    </div>
                                    <div className="joined">
                                        {/* <p>{groupInfo.count_members} Photos</p> */}
                                        <p>Joined {groupInfo.createdAt}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navAndSearch extraPadding">
                    <ul className="editNav NavbarAndheaderul">
                        <li className=" mainHeadeNavCoices" className="defaultSelect">Photos</li>
                    </ul>
                </div>
            </div>
            <div>
                <GroupPhotos id={id} isMember={isJoiningGroup}/>
            </div>
        </div>
    );
}
