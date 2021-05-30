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


  const [album,setAlbum] =useState([]);
  // const { album_id } = props;
  const album_id=0;

  //This function is called whenever this album page is opened
  //It gets the details of the selected album and set the const album with these details 
  useEffect(() => {
    const fetchData = async () => {
    const {data,status} = await axios.get( endpoint+'album?_id='+album_id,);
    console.log(status);
    console.log("got the album");
  
    if (status === 200){
        setAlbum(data);
    }
   
};

  fetchData();
},[]);
console.log(album);


  const back = <FontAwesomeIcon icon={faArrowLeft} color="black"/>
  return (
      <>
      <div className="AlbumPage-body">
      <a href="#" id="backAlbum">{back } Back to albums list</a>
      { album.map(album=> 
        <AlbumCoverPhoto 
        coverPhoto = {album.coverPhoto}
        title = {album.title}
        description = {album.description}
        />
        )}
        
       <div className="grid">
        {album.map(album => album.photos.map(photo => (
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
        )))}
        <div className="placeholder"></div>
        </div>
        </div>

      </>
    );
}

export default AlbumPage;