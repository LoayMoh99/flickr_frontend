/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import './AddModal.css';

function AddModal(props) {

  const albumCover='https://picsum.photos/id/237/200/300';
  const search = <FontAwesomeIcon icon={faSearch} color="DarkGrey" />;
  const plus = <FontAwesomeIcon icon={faPlus} color="DarkGrey" />;
  const check = <FontAwesomeIcon icon={faCheckCircle} color="cornflowerblue" size="1x"/>;
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
          <div className="row">
            <div className="searchIcon">
             {search}
            </div>
          <input type="text" placeholder="Search albums" className="stuff-selection-search" tabIndex="0" />
          </div>
          <hr id="hrSearch"/>

          <div className="addBody">

            <div className="userAlbumAdd">
              <div className="userAlbumCover">
                {/* <div className="row"> */}
                  <img className="img-responsive" id="contentAdd" src={albumCover} alt="image_flickr" />
                  <div>
                    <h5 className="albumTitleAdd">test1</h5>
                    <h5 className="albumInfoAdd">3 items</h5>
                  </div>
                  <div className="checkIcon">
                    {check}
                  </div>
                {/* </div> */}
            </div>
            </div>

            <div className="userAlbumAdd">
              <div className="userAlbumCover">
                {/* <div className="row"> */}
                  <img className="img-responsive" id="contentAdd" src={albumCover} alt="image_flickr" />
                  <div>
                    <h5 className="albumTitleAdd">test1</h5>
                    <h5 className="albumInfoAdd">3 items</h5>
                  </div>
                  <div className="checkIcon">
                    {check}
                  </div>
                {/* </div> */}
            </div>
            </div>
         </div>
         <hr id="hrBottom"/>
         <a href="/#" className="newAlbum">
            {plus}
            {' '}
               Create new album
         </a>
         <button
              id="doneAdd"
              type="button"
             // onClick={props.onRequestEditClose} // should be modified to actually upadate the database with the last edit
            >Done</button>
        </div>
      </div>
    </>
  );
}

export default AddModal;
