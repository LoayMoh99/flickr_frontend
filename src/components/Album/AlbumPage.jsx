import React, { useState , useEffect } from 'react';
import axios from "axios"
import ImageGrid from "../photostream/ImageGrid"
import '../photostream/ImageGrid.css'
import './AlbumPage.css'
import './AlbumCoverPhoto'
import './AlbumCoverPhoto.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import AlbumCoverPhoto from './AlbumCoverPhoto';
const endpoint = 'http://localhost:3001/'

function AlbumPage() {

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

  const back = <FontAwesomeIcon icon={faArrowLeft} color="black"/>
  return (
      <>
      <div className="AlbumPage-body">
      <a href="#" id="backAlbum">{back } Back to albums list</a>
        <AlbumCoverPhoto />
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
    );
}

export default AlbumPage;