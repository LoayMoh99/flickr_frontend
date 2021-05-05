import React,{useState,useEffect} from 'react';
import './userInfo.css';
import '../../fonts/font/flaticon.css';
import {showEdit} from './edit.js'
import {closeEdit} from './edit'
import defaultProfile from '../../img/deefault.jpg';
import Photostream from '../photostream/Photostream'
import CameraRoll from '../CameraRoll/CamreRoll'
import axios from 'axios'

/*componentDidMount(){
    axios.get('')
    .then

}*/

export default function Userinfo(props){
    const [isPhotoStream,setPhotoStream] = useState(true);
    const [isCameraRoll,setCameraRoll] = useState(false);
    function updateStat(){
        setPhotoStream(!isPhotoStream);
        setCameraRoll(!isCameraRoll);
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
    return(
        <div>
            <div>
                <div className="uName" >
                    <div className="overlay1">
                        <i className="flaticon-edit" onClick={()=>showEdit()}></i>
                        <div className="userInfo">
                            <img src={defaultProfile}></img>
                            <div className="nameAndInfo">
                                <h1>{props.firstName} {props.lastName}</h1>
                                <div className="numbers">
                                    <div className="follwingFollowers">
                                        <p>{props.username}</p>
                                        <ul className="NavbarAndheaderul">
                                            <li><a>{props.num_followers} followers</a></li>
                                            <li><a>{props.num_following} following</a></li>
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
                        <li className="mainHeadeNavCoices">About</li>
                        <li className=" mainHeadeNavCoices defaultSelect" onClick={updateStat}>Photostream</li>
                        <li className=" mainHeadeNavCoices">Albums</li>
                        <li className=" mainHeadeNavCoices">Favs</li>
                        <li className=" mainHeadeNavCoices">Galleries</li>
                        <li className=" mainHeadeNavCoices">Groups</li>
                        <li className=" mainHeadeNavCoices">stats</li>
                        <li className=" mainHeadeNavCoices"  onClick={updateStat}>Camera Roll</li>
                    </ul>
                </div>
            </div>
            <div>
                {isPhotoStream && <Photostream/>}
                {isCameraRoll && <CameraRoll/>}
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
