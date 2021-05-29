import React,{useState,useEffect} from "react"
import ImageGrid from "../photostream/ImageGrid"
import NavBar from "../photostream/NavBar"
import axios from "axios"
const endpoint = 'http://localhost:3001/'

function Faves(){

//Get Fav photos
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



return (
    <>
    <div className="photostream-body">
    <NavBar 
        viewMode = {false}
    />

    <div className="grid">
    {photos.map(photo => (
        <ImageGrid
        id = {photo.photo_id}
        url ={photo.photo_url} 
        title ={photo.title} 
        description = {photo.description}
        date = {photo.createdAt}
        privacy = {photo.privacy}
        ownerName = {photo.photo_owner_name}
        ownerId = {photo.photo_owner_id}
        numberOfFavs = {photo.num_favs}
        numberOfComments ={photo.num_comments}
        numberOfViews={photo.num_views}
        />
    ))}
    <div className="placeholder"></div>
    </div>

    </div>
    </>
)
}

export default Faves;