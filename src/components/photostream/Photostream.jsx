import React,{useState,useEffect} from "react"
import ImageGrid from "./ImageGrid"
import NavBar from "./NavBar"
import Slideshow from "./Slideshow"
import './ImageGrid.css'
import ImageDetails from '../imageDetails/ImageDetails'
import axios from "axios"
import $ from 'jquery'; 
import { Link , Route, useParams } from 'react-router-dom'
const endpoint = 'http://localhost:3001/'

function Photostream(){

    //Get photos
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const {data,status} = await axios.get( endpoint+'photos',);
        console.log(status);
        if (status === 200){
            setPhotos(data);
        }
    };
 
    fetchData();
    },[]);
    const navStyle={
    color:'white'
};
    
    
    const [isModalOpen, setModalIsOpen] = useState(false);
    const [isPhoto, setPhoto] = useState(false);

    function toggleModal(){
        setModalIsOpen(!isModalOpen);
        console.log("l modal fata7")

    }
    let isPhotoSelected;
    function showPhoto(id){
        console.log("PhotoStream",id);
        isPhotoSelected=id;
        setPhoto(true);
        console.log("after click",isPhotoSelected);
        
    }
    console.log("isPhoto",isPhoto);
    console.log("sent id",isPhotoSelected);
    

    return (
        <>
        <div className="photostream-body">
        <NavBar 
            onSlideshow={toggleModal}
        />

        <div className="grid">
        {photos.map(photo => (
            <Link  style={navStyle} to={`/imagedetails/${photo.id}`}>
            <ImageGrid
            id = {photo.id}
            url ={photo.photoUrl} 
            title ={photo.title} 
            description = {photo.description}
            date = {photo.createdAt}
            privacy = {photo.privacy}
            ownerId = {photo.ownerId}
            numberOfFavs = {photo.Fav.length}
            numberOfComments ={photo.comments.length}
            onOpenRequest={showPhoto}
            /></Link>
        ))}
        <div className="placeholder"></div>
        </div>

        <main>
        {isModalOpen && <Slideshow onRequestClose={toggleModal} />}
        </main>
        </div>
        </>
   ) 
}

export default Photostream;