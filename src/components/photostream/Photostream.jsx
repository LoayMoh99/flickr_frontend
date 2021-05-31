import React,{useState,useEffect} from "react"
import ImageGrid from "./ImageGrid"
import NavBar from "./NavBar"
import './ImageGrid.css'
import {GetUserPhotos} from "../../services/userServices"
import GetPeoplePhotos from "../../services/peopleServices"
import ImageDetails from '../imageDetails/imageDetails'
import axios from "axios"
import $ from 'jquery'; 
import { Link , Route, useParams } from 'react-router-dom'
const endpoint = 'http://localhost:3001/'

function Photostream(props){

    //user/people boolean -> from userInfo token handling
    // const [isUser , setIsUser] = useState(props.isUser)
    const [isUser , setIsUser] = useState(true);
    // const [userId , setUserId] = useState(props.userId);
    const [userId , setUserId] = useState(0)
    const [isFav , setIsFav] = useState(false)

    //Get photos
    const [userPhotos, setUserPhotos] = useState([]);
    const [peoplePhotos, setPeoplePhotos] = useState([]);
    const [photos, setPhotos] = useState([]);
    
    const navStyle={
    color:'white'
    };
    
    
    const [isModalOpen, setModalIsOpen] = useState(false);
    const [isPhoto, setPhoto] = useState(false);

    //get request
    useEffect( () =>{
        //get user photos
        GetUserPhotos().then( response => {
            setUserPhotos(response.data);
        })

        //get people photos by userId
        GetPeoplePhotos(userId).then( response => {
            setPeoplePhotos(response.data);
        })
    // },[userPhotos,userId])
    },[userId])
    
    let isPhotoSelected;
    function showPhoto(id){
        console.log("PhotoStream",id);
        isPhotoSelected=id;
        setPhoto(true);
        console.log("after click",isPhotoSelected);
        //props.history.push('/imagedetails/id}');
        
    }
    console.log("isPhoto",isPhoto);
    console.log("sent id",isPhotoSelected);
    

    return (
        <>
        <div className="photostream-body">
            <NavBar 
                viewMode = {isUser}
            />
            <div className="grid">
            {isUser?
                <>
                    {userPhotos.map(photo => (
                    //<Link  style={navStyle} to={`/imagedetails/${photo.id}`}>
                    <ImageGrid
                    id = {photo.id}
                    url ={photo.photoUrl} 
                    title ={photo.title} 
                    description = {photo.description}
                    privacy = {photo.privacy}
                    ownerId = {photo.ownerId}
                    numberOfFavs = {photo.num_favs}
                    numberOfComments ={photo.comments.length}
                    ownerName = "YOU!"
                    viewMode = {isUser}
                    favMode = {isFav}
                    onOpenRequest={showPhoto}
                    />//</Link>
                ))}
                </>
                :
                <>
                    {peoplePhotos.map(photo => (
                    //<Link  style={navStyle} to={`/imagedetails/${photo.id}`}>
                    <ImageGrid
                    id = {photo.id}
                    url ={photo.photoUrl} 
                    title ={photo.title} 
                    description = {photo.description}
                    privacy = {photo.privacy}
                    ownerId = {photo.ownerId}
                    numberOfFavs = {photo.numberOfFavs}
                    numberOfComments ={photo.numberOfComments}
                    ownerName ={photo.userName}
                    viewMode = {isUser}
                    favMode = {true}
                    onOpenRequest={showPhoto}
                    />//</Link>
                ))}
                </>
            }

            <div className="placeholder"></div>
            </div>
        </div>
        </>
    ) 
}

export default Photostream;