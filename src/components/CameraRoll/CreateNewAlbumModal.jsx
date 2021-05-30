import React,{useState , useEffect } from 'react';
import './EditModal.css';
import './CreateNewAlbumModal.css';

function CreateNewAlbumModal(props) {

  //new titles and description
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription , setInputDescription] = useState("");
  
  console.log(props.imgIdsCreateAlbum);
  function handleTitleChange(event) {
    const newTitle = event.target.value;
    setInputTitle(newTitle);
    // API
    console.log(inputTitle);
  }

  function handleDescriptionChange(event) {
    const newDescription  = event.target.value;
    setInputDescription(newDescription);
    // API
    console.log(inputDescription);
  }

  return (
    <>

      <div className="modal__backdrop_edit">
        <div className="modal__container_create">
          <span className="close_edit" onClick={props.onRequestCreateClose}>&times;</span>
          <h3 className="modal__title_edit">
            Create a new album
          </h3>
          {/* <div className="title-desc-container"> */}
            <input className="createTitle" type="text" placeholder="Album name" onChange={handleTitleChange} />
            {/* <hr /> */}
            <textarea className="createDescription" placeholder="Description (optional)" onChange={handleDescriptionChange} />

          {/* </div> */}
          
          <div className="createFooter">
            <button
              id="save_edit"
              type="button"
             // onClick={props.onRequestEditClose} // should be modified to actually upadate the database with the last edit
            >
              Create
            </button>
            <button id="cancel_edit" type="button" onClick={props.onRequestCreateClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>

    </>
  );
}

export default CreateNewAlbumModal;
