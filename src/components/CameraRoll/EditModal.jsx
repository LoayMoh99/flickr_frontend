/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React, {useState} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa-tag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import './EditModal.css';
import DropdownPrivacy from './DropdownPrivacy'; 

function EditModal(props) {
  const tag = <FontAwesomeIcon icon={faTag} color="DarkGrey" />;
  const people = <FontAwesomeIcon icon={faUserFriends} color="DarkGrey" />;
  const [tagAdded,setTagAdded] = useState(false);
  const [peopleAdded, setPeopleAdded]= useState(false);
  const [inputTag, setInputTag] = useState("");
  const [inputPeople , setInputPeople] = useState("");
  
  function handleTagChange(event){
    setTagAdded(true);
    const newTag = event.target.value;
    setInputTag(newTag);
    console.log(inputTag);
    if(newTag==="")
    {
      setTagAdded(false);
    }
  }
  function handlePeopleChange(event){
    setPeopleAdded(true);
    const newPeople = event.target.value;
    setInputPeople(newPeople);
    console.log(inputPeople);
    if(newPeople==="")
    {
      setPeopleAdded(false);
    }
  }

  


  return (
    <>

      <div className="modal__backdrop_edit">
        <div className="modal__container_edit">
          <span className="close_edit" onClick={props.onRequestEditClose}>&times;</span>
          <h3 className="modal__title_edit">
            Editing
            {' '}
            {props.countEdit}
            {' '}
            photos
            {' '}
          </h3>
          <div className="title-desc-container">
            <input className="edit-title" type="text" placeholder="Change title" onChange={handleTagChange}/>
            <hr />
            <textarea className="edit-description" placeholder="Change description" onChange={handlePeopleChange}/>

          </div>
          <span className="privacy-label">Who can see this photo ?</span>

          <span className="space" />
          <DropdownPrivacy />
          <div className="row">
            <div className="edit-tag">
              {tag}
              {'  '}
              <input type="text" className="no-outline" placeholder="Add new tags" />
            </div>
            <div className="edit-tag">
              {people}
              {'  '}
              <input type="text" className="no-outline" placeholder="Add new people" />
            </div>
          </div>
          <div className="edit-footer">
            <button
              id="save_edit"
              type="button"
              onClick={props.onRequestEditClose} // should be modified to actually upadate the database with the last edit
            >
              Save
            </button>
            <button id="cancel_edit" type="button" onClick={props.onRequestEditClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>

    </>
  );
}

export default EditModal;
