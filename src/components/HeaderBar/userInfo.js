import React,{useState,useEffect} from 'react';
import './userInfo.css';
import '../../fonts/font/flaticon.css';
import {showEdit} from './edit.js'
import {closeEdit} from './edit'
import defaultProfile from '../../img/deefault.jpg';
import Photostream from '../photostream/Photostream'
import CameraRoll from '../CameraRoll/CamreRoll'
import axios from 'axios'
import {Link} from "react-router-dom";
import Faves from '../Faves/Faves';
import AlbumPreview from '../Album/AlbumPreview'
import {GetUser} from "../../services/userServices"
/*componentDidMount(){
    axios.get('')
    .then

}*/

export default function Userinfo(props){

    const [userInfo, setUserInfo] = useState([]);
    //get request
    useEffect( () =>{
      //get user photos
      GetUser().then( response => {
        setUserInfo(response.data);
        console.log(response)
      })

  },[])

console.log('Anaaaa fl useeer',localStorage.token);

    const [isPhotoStream,setPhotoStream] = useState(true);
    const [isCameraRoll,setCameraRoll] = useState(false);
    const [isAbout,setAbout] = useState(false);
    const [isFaves,setFaves] = useState(false);
    const [isAlbums,setAlbums] = useState(false);
    const [isGallery,setGallery] = useState(false);
    const [isGroup,setGroup] = useState(false);
    const [isStats,setStats] = useState(false);

    function updateStat(){
        setPhotoStream(isPhotoStream && !isPhotoStream);
        setCameraRoll(isCameraRoll && !isCameraRoll);
        setAlbums(isAlbums && !isAlbums);
        setAbout(isAbout && !isAbout);
        setFaves(isFaves && !isFaves);
        setGallery(isGallery && !isGallery);
        setGroup(isGroup && !isGroup);
        setStats(true);
    }
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

    function updateStatGallery(){
        setPhotoStream(isPhotoStream && !isPhotoStream);
        setCameraRoll(isCameraRoll && !isCameraRoll);
        setAlbums(isAlbums && !isAlbums);
        setAbout(isAbout && !isAbout);
        setFaves(isFaves && !isFaves);
        setGallery(true);
        setGroup(isGroup && !isGroup);
        setStats(isStats && !isStats);
    }

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

    /*const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
        const result = await axios(
            'https://58003e7c-80ff-4927-a2f7-95afb9b9542b.mock.pstmn.io/getuserinfo',
        );

        setData(result);
        };
    
        fetchData();
    });
    console.log(data);*/
    const navStyle={
        color:'white'
    };
    return(
        <div>
            <div>
                <div className="uName" style={{backgroundImage: `url(${userInfo.BackGround})`}}>
                    <div className="overlay1">
                        <i className="flaticon-edit" onClick={()=>showEdit()}></i>
                        <div className="userInfo">
                            <div className="profImg" style={{backgroundImage: `url(${userInfo.Avatar})`}}></div>
                            <div className="nameAndInfo">
                                <h1>{userInfo.Fname} {userInfo.Lname}</h1>
                                <div className="numbers">
                                    <div className="follwingFollowers">
                                        <p>{userInfo.UserName}</p>
                                        <ul className="NavbarAndheaderul">
                                            <li><a>{userInfo.Followers} followers</a></li>
                                            <li><Link  style={navStyle} to="/FollwingFollowers"><a>{userInfo.Following} following</a></Link></li>
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
                        <li className=" mainHeadeNavCoices" className={isGallery && "defaultSelect"}  onClick={updateStatGallery}>Galleries</li>
                        <li className=" mainHeadeNavCoices" className={isGroup && "defaultSelect"}  onClick={updateStatGroup}>Groups</li>
                        <li className=" mainHeadeNavCoices" className={isStats && "defaultSelect"}  onClick={updateStat}>stats</li>
                        <li className=" mainHeadeNavCoices" className={isCameraRoll && "defaultSelect"}  onClick={updateStatCameraRoll}>Camera Roll</li>
                    </ul>
                </div>
            </div>
            <div>
                {isPhotoStream && <Photostream />}
                {isCameraRoll && <CameraRoll/>}
                {isFaves && <Faves/>}
                {isAlbums && <AlbumPreview/>}
            </div>
        <div className="modal-container">
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
