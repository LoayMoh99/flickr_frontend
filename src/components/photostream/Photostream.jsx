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
var count=0;

function Photostream(props){

    //user/people boolean -> from userInfo token handling
    const [isUser , setIsUser] = useState(props.isUser)
    const [userId , setUserId] = useState(props.userId);
    const [isFav , setIsFav] = useState(false)

    //Get photos
    const [userPhotos, setUserPhotos] = useState([]);
    const [peoplePhotos, setPeoplePhotos] = useState([]);
    const [photos, setPhotos] = useState([]);
    
    const navStyle={
    color:'white'
    };
    
    //setUserId(props.useId);
    //setIsUser(props.isUser);
    const [isModalOpen, setModalIsOpen] = useState(false);
    const [isPhoto, setPhoto] = useState(false);
count++;
    //get request
    useEffect( () =>{
        if (props.isUser){
            //get user photos
            GetUserPhotos().then( response => {
                setUserPhotos(response.data.photos);
                setIsUser(true);
            })
        }else{
            //get people photos by userId
            GetPeoplePhotos(userId).then( response => {
                setPeoplePhotos(response.data);
                setUserPhotos(response.data);
                setIsUser(false);
            })
        }
    // },[userPhotos,userId])
    // },[userId])
},[props.isUser])
    
    // let isPhotoSelected;
    // function showPhoto(id){
    //     console.log("PhotoStream",id);
    //     isPhotoSelected=id;
    //     console.log("after click",isPhotoSelected);
    //     props.history.push('/imagedetails/id}');
        
    // }  
    
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

                  //  <Link  style={navStyle} to={`/imagedetails/${photo._id}` }>
                    <ImageGrid
                    id = {photo._id}
                    url ={photo.photoUrl} 
                    title ={photo.title} 
                    description = {photo.description}
                    privacy = {photo.privacy}
                    ownerId = {photo.ownerId}
                    numberOfFavs = {photo.Fav.length}
                    numberOfComments ={photo.comments.length}
                    ownerName = "YOU!"
                    viewMode = {isUser}
                    favMode = {isFav}
                    // onOpenRequest={showPhoto}
                    />//</Link>
                ))}
                </>
                :
                <>
                    {peoplePhotos.map(photo => (
                    //<Link  style={navStyle} to={`/imagedetails/${photo.id}`}>
                    <ImageGrid
                    id = {photo._id}
                    url ={photo.photoUrl} 
                    title ={photo.title} 
                    description = {photo.description}
                    privacy = {photo.privacy}
                    ownerId = {photo.ownerId}
                    numberOfFavs = {photo.numberOfFavs}
                    numberOfComments ={photo.numberOfComments}
                    ownerName ={'you'}
                    viewMode = {isUser}
                    favMode = {true}
                    // onOpenRequest={showPhoto}
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