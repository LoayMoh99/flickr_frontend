import React,{useState , useEffect } from 'react';
import axios from "axios"
import './EditModal.css';
import './CreateNewAlbumModal.css';
const endpoint = 'http://localhost:3001/'

function CreateNewAlbumModal(props) {

  //new titles and description
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription , setInputDescription] = useState("");
  const [isNull,setIsNull]=useState(true);
  const { imgIdsCreateAlbum } = props; 
  const coverPhotoId = imgIdsCreateAlbum[0];
  console.log(props.imgIdsCreateAlbum);

  function handleTitleChange(event) {
    const newTitle = event.target.value;
    setInputTitle(newTitle);
    if(inputTitle==="")
    {
        setIsNull(true);
    }
    else{
        setIsNull(false);
    }
    console.log(inputTitle);
  }

  function handleDescriptionChange(event) {
    const newDescription  = event.target.value;
    setInputDescription(newDescription);
    console.log(inputDescription);
  }



//     const album = {
//       "title": inputTitle,
//       "description":inputDescription,
//       "photos":imgIdsCreateAlbum,
//       "coverPhoto":coverPhotoId
//        }


    const album = { 
        "id" : 29,
        "title": inputTitle,
        "description":inputDescription,
        "createdAt": "2021-03-02",
        "updatedAt": "2021-05-04",
        // "photos" : [
        //   {
        //       "photo_id" : 0,
        //       "photo_url" : "https://picsum.photos/300/200?random=1",
        //       "photo_owner_id": 0,
        //       "num_favs": 30,
        //       "num_views": 60,
        //       "num_comments":10,
        //       "photo_owner_name": "Khadija Khaled",
        //       "title": "First Photo Title",
        //       "privacy": true,
        //       "description": "First Photo description",
        //       "createdAt" : "2021-05-04"
        //   }
        // ],
        "photos":imgIdsCreateAlbum,
        //coverPhoto:"https://picsum.photos/300/200?random=1"
        coverPhoto:coverPhotoId
          
    };
    async function createAlbum (album){
    console.log(album);
    try{

        const response = await axios.post(endpoint + 'album', album);
        console.log("status");
        console.log(response.status);
    }catch (error){
        if (error.response){
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request){
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error);
    }
    }

    function create (){
        if(!isNull) //title is a required input can not be null
        {
            createAlbum(album);
        }
        props.onRequestCreateClose();
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
         
            <input className="createTitle" type="text" placeholder="Album name" onChange={handleTitleChange} required/>
            {/* <hr /> */}
            <textarea className="createDescription" placeholder="Description (optional)" onChange={handleDescriptionChange} />
           
         
          
          <div className="createFooter">
            <button
              id="save_edit"
              type="button"
              onClick={create} 
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
