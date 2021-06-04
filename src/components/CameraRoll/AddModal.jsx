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
import GetUserAlbums,{GetPeopleAlbums} from "../../services/albumServices"

import AddAlbumImages from './AddAlbumImages';
import './AddModal.css';
const endpoint = 'http://localhost:3001/'

function AddModal(props) {

  const [album,setAlbum] =useState([]);
  const  { imgAddIds }= props;

  //This function is called whenever this album page is opened
  //It gets the details of the selected album and set the const album with these details 


    //get request
    useEffect( () =>{
      //get user photos
      GetUserAlbums().then( response => {
        setAlbum(response.data);
      })
  },[])

  const plus = <FontAwesomeIcon icon={faPlus} color="DarkGrey" />;



  return (
    <>

      <div className="modal__backdrop_edit">
        <div className="modalContainerAdd">
          <span className="closeAdd" onClick={props.onRequestAddClose}>&times;</span>
          <div className="row">
            <h3 className="modal__title_edit list-label">Add to: </h3>
            <h3 className="modalAdd">Album </h3>
          </div>
          <hr id="hrSearch"/>

          <div className="addBody">
            {album.map(album=>  
            (<AddAlbumImages 
            albumCover = {album.coverPhoto.photoUrl}
            albumTitle = {album.title}
           albumId ={album._id}
            albumPhotos = {album.photos}
            imgAddIds = {imgAddIds}
           />)
           ) 
            }
         </div>
         <hr id="hrBottom"/>
         <a href="#" className="newAlbum" onClick={props.onRequestCreate}>
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
