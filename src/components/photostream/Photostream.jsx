import React,{useState,useEffect} from "react"
import ImageGrid from "./ImageGrid"
import NavBar from "./NavBar"
import './ImageGrid.css'
import getUserPhotos from "../../services/userServices"

function Photostream(props){

    //Get photos
    const [photos, setPhotos] = useState([]);

    //get request
    useEffect( () =>{
        getUserPhotos().then( response => {
            setPhotos(response.data);
        })
    },[])

    //user/people boolean
    // const [isUser , setIsUser] = useState([props.isUser])
    const [isUser , setIsUser] = useState([true])

    return (
        <>
        <div className="photostream-body">
            <NavBar 
                viewMode = {isUser}
            />

            <div className="grid">
            {photos.map(photo => (
                <ImageGrid
                id = {photo.id}
                url ={photo.photoUrl} 
                title ={photo.title} 
                description = {photo.description}
                privacy = {photo.privacy}
                ownerId = {photo.ownerId}
                numberOfFavs = {photo.num_favs}
                numberOfComments ={photo.comments.length}
                />
            ))}
            <div className="placeholder"></div>
            </div>
        </div>
        </>
   ) 
}

export default Photostream;