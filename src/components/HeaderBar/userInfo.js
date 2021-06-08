import React,{useState,useEffect} from 'react';
import './userInfo.css';
import '../../fonts/font/flaticon.css';
import defaultProfile from '../../img/deefault.jpg';
import Header from '../navbar/mainNav'
import Photostream from '../photostream/Photostream'
import CameraRoll from '../CameraRoll/CamreRoll'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link , Route, useParams } from 'react-router-dom'
import GetPeoplePhotos, {GetPeopleByIdentefier} from "../../services/peopleServices"
import Faves from '../Faves/Faves';
import AlbumPreview from '../Album/AlbumPreview'
import {GetUser,GetUserPhotos,UpdateUser,checkUserByIdentifier,FollowPeople,UnFollowPeople} from "../../services/userServices"
import GroupPhotos from "../GroupPhotos/GroupPhotos"

/** Renders UserInfo component 
 * @author Farah Mostafa
 * @namespace UserInfo
 * @category Functional Component
 * @extends Component
 * @property {String} props -User id
 */

export default function Userinfo(props){
    
 
    const path = props.location.pathname;
    const index = path.split('/');
    var id = index[2];
    if(id==undefined){ 
    id='null';
    }
    console.log(id);


    const [userPhotos, setUserPhotos] = useState([]);
    const [peoplePhotos, setPeoplePhotos] = useState([]);
    const [userId , setUserId] = useState(0);
    const [userInfo, setUserInfo] = useState([]);
    const [isUser , setIsUser] = useState(id=='null'?true:false);
    const [IsUserinfo , setIsUserInfo] = useState(false);
    const [userName , setUserName] = useState('');
    
    
    //get request
    useEffect( () =>{
        /** Check if i am in my profile of others profile 0=>my account 1=>others account
        * @memberof UserInfo
        * @method checkUserByIdentifier
        * @param {String} id-the id of the user i am curruntly in his/her profile
        * @returns respone of user check by id
        * @example
        * {
        "message": "boolean=1"
        }
        */
        checkUserByIdentifier(id).then(response=>{
            if(response.data.boolean === 1){
        //         //get user
        /** Gets the information of the user (Background,Avatar,#of following,#of followers etc..)
        * @memberof UserInfo
        * @method GetUser
        * @returns respone of Get user
        * @example
        * {
        "Fname": "string",
        "Lname": "string",
        "Following": 0,
        "Followers": 0,
        "views": 0,
        "Date_joined": "2021-06-08",
        "Email": "string",
        "UserName": "string",
        "Photo": 0,
        "Avatar": "https://upload.wikimedia.org/wikipedia/en/c/c4/Mickey_Mouse_%28fair_use%29.png",
        "BackGround": "https://upload.wikimedia.org/wikipedia/en/c/c4/Mickey_Mouse_%28fair_use%29.png",
        "About": {
            "Description": "string",
            "Hometown": "string",
            "Occupation": "string",
            "CurrentCity": "string"
        }
        }
        */
                GetUser().then( response => {
                    setUserInfo(response.data);
                    setIsUserInfo(true);
                    setPhotoStream(true);
                console.log(response.data)
                })
                setFollowing(false);
                setIsUser(true);
            }
            else{
                ////Not me!
                setIsUser(false);
                setUserId(id);
                /** Gets the information of the others by their id (Background,Avatar,#of following,#of followers etc..)
                * @memberof UserInfo
                * @method GetPeopleByIdentefier
                * @param {String} id-the id of the user i am curruntly in his/her profile
                * @returns respone of Get user
                * @example
                * {
                "Fname": "string",
                "Lname": "string",
                "Following": 0,
                "Followers": 0,
                "views": 0,
                "Date_joined": "2021-06-08",
                "Email": "string",
                "UserName": "string",
                "Photo": 0,
                "Avatar": "https://upload.wikimedia.org/wikipedia/en/c/c4/Mickey_Mouse_%28fair_use%29.png",
                "BackGround": "https://upload.wikimedia.org/wikipedia/en/c/c4/Mickey_Mouse_%28fair_use%29.png",
                "About": {
                    "Description": "string",
                    "Hometown": "string",
                    "Occupation": "string",
                    "CurrentCity": "string"
                }
                }
                */
                GetPeopleByIdentefier(id).then(response=>{
                    updateStatPhotStream();
                    setUserInfo(response.data);
                    setUserName(response.data.UserName)
                    setIsUserInfo(true);
                    setPhotoStream(true);
                    if(response.data.Follow===true){
                        setFollowing(true);
                    }
                    else{
                        setFollowing(false);
                    }
                })
            }
        })
    },[id])


    const [isPhotoStream,setPhotoStream] = useState(true);
    const [isCameraRoll,setCameraRoll] = useState(false);
    const [isAbout,setAbout] = useState(false);
    const [isFaves,setFaves] = useState(false);
    const [isAlbums,setAlbums] = useState(false);
    const [isGallery,setGallery] = useState(false);
    const [isGroup,setGroup] = useState(false);
    const [isStats,setStats] = useState(false);
    const [photos, setPhotos] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState([]);
    const [avatarBackground, setAvatarBackground] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);
    const [userData, setUserData] = useState([]);
    //Initially not following the other user
    const [isFollowing,setFollowing]=useState(true);
    const plusIcon = <FontAwesomeIcon icon={faPlus} color="DarkGrey" />;




    function changeSelection(newimageUrl) {
        setSelectedPhoto(newimageUrl);
        console.log("ana fe el changeSelection");
        if(avatarBackground===1){
            const newUserInfo={
                "Fname": userInfo.Fname,
                "Lname": userInfo.Lname,
                "Password": userInfo.Password,
                "Avatar": userInfo.Avatar,
                "BackGround": newimageUrl,
                "About": {
                "Description": userInfo.About.Description,
                "Hometown": userInfo.About.Hometown,
                "Occupation": userInfo.About.Occupation,
                "CurrentCity": userInfo.About.CurrentCity
                }
            }
            UpdateUser(newUserInfo).then(response=>{
                console.log("response.data",response.data);
                GetUser();
            })
        }
        else{
            const newUserInfo={
                "Fname": userInfo.Fname,
                "Lname": userInfo.Lname,
                "Password": userInfo.Password,
                "Avatar": newimageUrl,
                "BackGround": userInfo.BackGround,
                "About": {
                "Description": userInfo.About.Description,
                "Hometown": userInfo.About.Hometown,
                "Occupation": userInfo.About.Occupation,
                "CurrentCity": userInfo.About.CurrentCity
                }
            }
            UpdateUser(newUserInfo).then(response=>{
                console.log(response.data);
                GetUser();
            })
        }
    }

    /** close Edit Modal to update user information
    * @memberof UserInfo
    * @method closeEdit
    */

    function closeEdit(){
        setModalOpen(false);
    }

    /** Show Edit Modal to update user information
    * @memberof UserInfo
    * @method showEdit
    */

    function showEdit(num){
        setModalOpen(true);
        setAvatarBackground(num);
    }
    const userFollow={
        "peopleid": id
    };

    /** Toggle the follow button in case of clicking follow or unfollow
    * @memberof UserInfo
    * @method toggleFollow
    */

    async function toggleFollow(){
        if(isFollowing===false){
            FollowPeople(userFollow).then( response => {
            setFollowing(!isFollowing);
        })
    }
        else{
            UnFollowPeople(id).then( response => {
            setFollowing(!isFollowing);
            })
    }
    }
    

    /** set the about with true to open it and close the components
    * @memberof UserInfo
    * @method updateStatAbout
    */

    function updateStatAbout(){
        setPhotoStream(isPhotoStream && !isPhotoStream);
        setCameraRoll(isCameraRoll && !isCameraRoll);
        setAlbums(isAlbums && !isAlbums);
        setAbout(true);
        setFaves(isFaves && !isGallery);
        setGallery(isGallery && !isFaves);
        setGroup(isGroup && !isGroup);
        setStats(isStats && !isStats);
    }

    /** set the Photostream with true to open it and close the components
    * @memberof UserInfo
    * @method updateStatPhotStream
    */

    function updateStatPhotStream(){
        setPhotoStream(true);
        setCameraRoll(isCameraRoll && !isCameraRoll);
        setAlbums(isAlbums && !isAlbums);
        setAbout(isAbout && !isAbout);
        setFaves(isFaves && !isFaves);
        setGallery(isGallery && !isGallery);
        setGroup(isGroup && !isGroup);
        setStats(isStats && !isStats);
    }

    /** set the CameraRoll with true to open it and close the components
    * @memberof UserInfo
    * @method updateStatCameraRoll
    */

    function updateStatCameraRoll(){
        setPhotoStream(isPhotoStream && !isPhotoStream);
        setCameraRoll(true);
        setAlbums(isAlbums && !isAlbums);
        setAbout(isAbout && !isAbout);
        setFaves(isFaves && !isFaves);
        setGallery(isGallery && !isGallery);
        setGroup(isGroup && !isGroup);
        setStats(isStats && !isStats);
    }

    /** set the Album with true to open it and close the components
    * @memberof UserInfo
    * @method updateStatAlbum
    */

    function updateStatAlbum(){
        setPhotoStream(isPhotoStream && !isPhotoStream);
        setCameraRoll(isCameraRoll && !isCameraRoll);
        setAlbums(true);
        setAbout(isAbout && !isAbout);
        setFaves(isFaves && !isFaves);
        setGallery(isGallery && !isGallery);
        setGroup(isGroup && !isGroup);
        setStats(isStats && !isStats);
    }

    /** set the Favs with true to open it and close the components
    * @memberof UserInfo
    * @method updateStatFaves
    */

    function updateStatFaves(){
        setPhotoStream(isPhotoStream && !isPhotoStream);
        setCameraRoll(isCameraRoll && !isCameraRoll);
        setAlbums(isAlbums && !isAlbums);
        setAbout(isAbout && !isAbout);
        setFaves(true);
        setGallery(isGallery && !isGallery);
        setGroup(isGroup && !isGroup);
        setStats(isStats && !isStats);
    }

    /** set the Group with true to open it and close the components
    * @memberof UserInfo
    * @method updateStatGroup
    */

    function updateStatGroup(){
        setPhotoStream(isPhotoStream && !isPhotoStream);
        setCameraRoll(isCameraRoll && !isCameraRoll);
        setAlbums(isAlbums && !isAlbums);
        setAbout(isAbout && !isAbout);
        setFaves(isFaves && !isFaves);
        setGallery(isGallery && !isGallery);
        setGroup(true);
        setStats(isStats && !isStats);
    }
    const navStyle={
        color:'white'
    };


    return(
        
        <div>
            <Header isLogged={true}/>
            <div>
                <div className="uName" style={{backgroundImage: `url(${userInfo.BackGround})`}}>
                    <div className="overlay1">
                        {isUser && <i className="flaticon-edit" onClick={()=>{showEdit(1)}}></i>}
                        <div className="userInfo">
                            <div className="profImg" onClick={()=>{showEdit(2)}} style={{backgroundImage: `url(${userInfo.Avatar})`}}></div>
                            <div className="nameAndInfo">
                                <h1>{userInfo.Fname} {userInfo.Lname}</h1>
                                {!isUser &&
                                <div>
                                {!isUser && !isFollowing &&<button className="followButton" onClick={toggleFollow}>{plusIcon} Follow</button>}
                                {!isUser && isFollowing &&<button className="followButton" onClick={toggleFollow}> UnFollow</button>}
                                </div>}
                                <div className="numbers">
                                    <div className="follwingFollowers">
                                        <p>{userInfo.UserName}</p>
                                        <ul className={IsUserinfo&&"NavbarAndheaderul"}>
                                        {isUser? <li><Link  style={navStyle} to='/Followers'>{IsUserinfo&& userInfo.Followers.length} followers</Link></li>:<></>}
                                            {/* <li><Link  style={navStyle} to="/FollwingFollowers">{userInfo.Following} following</Link></li> */}
                                            <li><Link  style={navStyle} to={`/FollwingFollowers/${isUser}/${id}`}>{IsUserinfo &&userInfo.Following.length} following</Link></li>
                                        </ul>
                                    </div>
                                    <div className="joined">
                                        <p>{userInfo.Photo} Photos</p>
                                        <p>Joined {userInfo.Date_joined}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navAndSearch extraPadding">
                    <ul className="editNav NavbarAndheaderul">
                        <li className="mainHeadeNavCoices" className={isAbout && "defaultSelect" }  onClick={updateStatAbout}>About</li>
                        <li className=" mainHeadeNavCoices " className={isPhotoStream && "defaultSelect"} onClick={updateStatPhotStream}>Photostream</li>
                        <li className=" mainHeadeNavCoices" className={isAlbums && "defaultSelect"}  onClick={updateStatAlbum}>Albums</li>
                        <li className=" mainHeadeNavCoices" className={isFaves && "defaultSelect"}  onClick={updateStatFaves}>Favs</li>
                        <li className=" mainHeadeNavCoices" className={isGroup && "defaultSelect"}  onClick={updateStatGroup}>Groups</li>
                        {isUser && <li className=" mainHeadeNavCoices" className={isCameraRoll && "defaultSelect"}  onClick={updateStatCameraRoll}>Camera Roll</li>}
                    </ul>
                </div>
            </div>
            <div>
                {isPhotoStream && <Photostream isUser={isUser} userId={id}/>}
                {isCameraRoll && <CameraRoll/>}
                {isFaves && <Faves isUser={isUser} userId={id} userName={userName}/>}
                {isAlbums && <AlbumPreview isUser={isUser} userId={id} userName={userName}/>}
            </div>
        {isModalOpen && <div className="modal-container">
                <div className="overlay2"></div>
                <div className="modal-body">
                    <div className="navAndSearch">
                        <ul className="editNav NavbarAndheaderul">
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
                        <i className="flaticon-close" onClick={closeEdit}></i>
                        </div>
                    </div>
                    <div className="showPicInItems">
                    {userPhotos.map(photo=>(<img onClick={()=>{setSelectedPhoto(photo.photoUrl)}} src={photo.photoUrl}/>))}
                    </div>
                    <div className="slctBtn">
                        <button onClick={()=>changeSelection(selectedPhoto)}>select</button>
                    </div>
                </div>
            </div>}
        </div>
    );
}
