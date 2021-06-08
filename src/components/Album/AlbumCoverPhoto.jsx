import React,{useState} from 'react';
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import {UpdateAlbum} from '../../services/albumServices';


/** Renders AlbumCoverPhoto component to show album cover photo and infos
 * @author Khadija Khaled
 * @namespace AlbumCoverPhoto
 * @category Functional Component
 * @extends Component
 * @property {String} props.coverPhoto -Cover photo url
 * @property {String} props.title -Album title 
 * @property {String} props.description -Album description
 * @property {Array} props.photos -Album photos
 * @property {String} props.album_id -Album id
 * @property {String} props.ownerFname -Album owner Fname
 * @property {string} props.ownerLname -Album owner Lname
 * @property {boolean} props.isUser -Is it the user 's album or someoneelse 's
 */

function AlbumCoverPhoto(props) {

const { coverPhoto, title, description , photos , album_id , ownerFname ,ownerLname, isUser } = props;
const pen =  <FontAwesomeIcon icon={faPen} color="white" size="1x" />;

const countPhotos=photos.length;



  //new titles and description
  const [inputTitle, setInputTitle] = useState(title);
  const [inputDescription , setInputDescription] = useState(description);
  const [isChanged, setIsChanged] = useState (false);


  /** Saves the current value of the Album title in input tag
    * @memberof AlbumCoverPhoto
    * @method handleTitleChange
    * @param {event} event -Tirggered event on change in input value
    */
  function handleTitleChange(event) {
    const newTitle = event.target.value;
    setInputTitle(newTitle);
    setIsChanged(true);
    console.log(inputTitle);
  }

    /** Saves the current value of the album description in textarea tag
    * @memberof AlbumCoverPhoto
    * @method handleDescriptionChange
    * @param {event} event -Tirggered event on change in input value
    */
  function handleDescriptionChange(event) {
    const newDescription  = event.target.value;
    setInputDescription(newDescription);
    setIsChanged(true);
    console.log(inputDescription);
    if(newDescription==="")
    {
        setInputDescription("Click here to enter a description for this album");
    }
  }
  const albumUpdated ={
    "title": inputTitle,
    "description":inputDescription,
  };


    function Update(){

      UpdateAlbum (album_id, albumUpdated).then( response => {
        console.log(response.status);
    })  
        setIsChanged(false);
    };


return (
    <>
   <div className="coverPhoto" style={{backgroundImage: `url(${coverPhoto})`}}>
       <div className="overlayAlbum">
                <div className="spaceAlbumHeader">
                    {isUser?<div className="inputBarAlbumCover">
                        <div id="inputFormatAlbum">
                            <div class="form-group" >
                                <input type="text" className="form-control"  onChange={handleTitleChange} value={inputTitle}></input> 
                            </div>
                            <div class="form-group">
                                <textarea className="formControlTextarea" rows="3"  onChange={handleDescriptionChange}>{inputDescription}</textarea> 
                            </div>
                        </div>

                    </div>
                    : <div className="inputBarAlbumCover">
                        <div id="inputFormatAlbum">
                            <div class="form-group" >
                            <input type="text" className="form-control"  value={inputTitle} disabled></input> 
                            {/* <h3>{inputTitle}</h3> */}
                            </div>
                            <div class="form-group">
                                <textarea className="formControlTextarea" rows="3" disabled >{inputDescription}</textarea> 
                            </div>
                        </div>

                    </div>}
                    {
                        isChanged&&<button className="doneEdit"onClick={Update}>Done</button> 
                    }  

               </div>
               <h5 className="countPhotos">
                {countPhotos}
               {' '}
                photos</h5>
         {/* <div className="spaceTop">
           <img className="img-responsive avatarPhoto"src={avatarUrl} alt="image_flickr" />
        </div> */}
            <h5 className="userName"> 
                <a class="userName" href="/#">
                        By:
                        {' '}
                        {ownerFname}
                        {' '}
                        {ownerLname}
                </a>
            </h5>
        </div>
   </div>
    </>
  );
}

export default AlbumCoverPhoto;