/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState , useEffect } from 'react';
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import AddAlbumImages from './AddAlbumImages';
import './AddModal.css';
const endpoint = 'http://localhost:3001/'

function AddModal(props) {

  const [album,setAlbum] =useState([]);
  const  { imgAddIds }= props;

  //This function is called whenever this album page is opened
  //It gets the details of the selected album and set the const album with these details 
  useEffect(() => {
    const fetchData = async () => {
    const {data,status} = await axios.get( endpoint+'album',);
    console.log(status);
    console.log("got the album");
  
    if (status === 200){
        setAlbum(data);
    }
   
};

  fetchData();
},[album]);
console.log(album);

  // const albumCover='https://picsum.photos/id/237/200/300';
  //const search = <FontAwesomeIcon icon={faSearch} color="DarkGrey" />;
  const plus = <FontAwesomeIcon icon={faPlus} color="DarkGrey" />;



  return (
    <>

      <div className="modal__backdrop_edit">
        <div className="modalContainerAdd">
          <span className="closeAdd" onClick={props.onRequestAddClose}>&times;</span>
          <div className="row">
            <h3 className="modal__title_edit list-label">Add to: </h3>
            {/* <span className="space-add" /> */}
            <h3 className="modalAdd">Album </h3>
          </div>
          <hr id="hrSearch"/>
          {/* <div className="row">
            <div className="searchIcon">
             {search}
            </div>
          <input type="text" placeholder="Search albums" className="searchInput" tabIndex="0" />
          </div>
          <hr id="hrSearch"/> */}


          <div className="addBody">
            {album.map(album=>  
            (<AddAlbumImages 
            albumCover = {album.coverPhoto.photoUrl}
            albumTitle = {album.title}
            //photoCount = {album.photos.length}
            albumId ={album._id}
            albumPhotos = {album.photos}
            imgAddIds = {imgAddIds}
           />)
           ) 
            }
         </div>
         <hr id="hrBottom"/>
         <a href="/#" className="newAlbum" onClick={props.onRequestCreate}>
            {plus}
            {' '}
               Create new album
         </a>
         <button
              id="doneAdd"
              type="button"
              onClick={props.onRequestAddClose}
            >Done</button>
        </div>
      </div>
    </>
  );
}

export default AddModal;
