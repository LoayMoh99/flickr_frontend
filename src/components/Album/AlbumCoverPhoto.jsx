import React,{useState} from 'react';
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
const endpoint = 'http://localhost:3001/'

function AlbumCoverPhoto(props) {
//const coverPhoto="https://picsum.photos/500/300?random=1";
// const {isUser}= props; // from props
const isUser =true;
const { coverPhoto, title, description , photos , album_id } = props;
const pen =  <FontAwesomeIcon icon={faPen} color="white" size="1x" />;
const avatarUrl="https://picsum.photos/500/300?random=1";
const countPhotos=photos.length;

const userName= "Khadija Swelam";

  //new titles and description
  const [inputTitle, setInputTitle] = useState(title);
  const [inputDescription , setInputDescription] = useState(description);
  const [isChanged, setIsChanged] = useState (false);

  function handleTitleChange(event) {
    const newTitle = event.target.value;
    setInputTitle(newTitle);
    setIsChanged(true);
    console.log(inputTitle);
  }

  function handleDescriptionChange(event) {
    const newDescription  = event.target.value;
    setInputDescription(newDescription);
    setIsChanged(true);
    console.log(inputDescription);
  }
  const albumUpdated ={
    "title": inputTitle,
    "description":inputDescription,
  };

    async function UpdateAlbum (id, object){
    try{
        // const response = await axios.put(endpoint+'album?album_id='+id, object)
        const response = await axios.put(endpoint+'album/'+id , object)
        //Success
        return(response)
    } catch (error){
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

    };

    function Update(){
        UpdateAlbum (album_id, albumUpdated);
        setIsChanged(false);
    };


return (
    <>
   <div className="coverPhoto" style={{backgroundImage: `url(${coverPhoto})`}}>
       <div className="overlayAlbum">
                <div className="spaceAlbumHeader">
                    {/* <span className="spaceTop" >   */}
                       {isUser&& <a href="/#" className="editPen" >   
                                {pen}
                        </a>}
                    {isUser&&<div className="inputBarAlbumCover">
                        <div id="inputFormatAlbum">
                            <div class="form-group" >
                                <input type="text" className="form-control"  onChange={handleTitleChange} value={inputTitle}></input> 
                            </div>
                            <div class="form-group">
                                <textarea className="formControlTextarea" rows="3"  onChange={handleDescriptionChange}>{inputDescription}</textarea> 
                            </div>
                        </div>

                    </div>}
                    {!isUser&&<div className="inputBarAlbumCover">
                        <div id="inputFormatAlbum">
                            <div class="form-group" >
                                <input type="text" className="form-control"  value={inputTitle} disabled></input> 
                            </div>
                            <div class="form-group">
                                <textarea className="formControlTextarea" rows="3"disabled >{inputDescription}</textarea> 
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
                        {userName}
                </a>
            </h5>
        </div>
   </div>
    </>
  );
}

export default AlbumCoverPhoto;