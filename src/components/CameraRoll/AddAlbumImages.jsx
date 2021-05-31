import React,{useState , useEffect } from 'react';
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const endpoint = 'http://localhost:3001/'

function AddAlbumImages(props) {
    const check = <FontAwesomeIcon icon={faCheckCircle} color="cornflowerblue" size="1x"/>;
    const  { albumCover , albumTitle , albumPhotos , imgAddIds , albumId }= props;
    const [photoCount,setPhotoCount]= useState(albumPhotos.length);
    const [isChecked,setIsChecked]= useState(false);

    console.log(imgAddIds);
    console.log(albumId);
    
    const imgSelected={"photos":imgAddIds};

    async function deletePhotoFromAlbum (id,imgIdsToDelete)
    {
        try{
           // const response = await axios.delete(endpoint+'album/photos?album_id='+id, imgIdsToDelete) ;
            const response = await axios.delete(endpoint+'album/photos/'+id, imgIdsToDelete) ;
            setPhotoCount(response.data.length);
            return(response)
        } catch (error){
            if (error.response){
            /*
            * The request was made and the server responded with a
            * status code that falls out of the range of 2xx
            */
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request){
              /*
              * The request was made but no response was received, `error.request`
              * is an instance of XMLHttpRequest in the browser and an instance
              * of http.ClientRequest in Node.js
              */
              console.log(error.request);
            } else {
              // Something happened in setting up the request and triggered an Error
              console.log('Error', error.message);
            }
            console.log(error);
        }
      };


      async function addPhotoToAlbum (id, object)
      {
                try{
             //const response = await axios.post(endpoint+'album?album_id='+id, object);
            const response = await axios.post(endpoint+'album/'+id , object);
            //Success
            setPhotoCount(response.data.length);
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
    


    // to toggle isChecked boolean
    const toggleChecked = () => {
        if(isChecked) // was initially checked, hence the user want to delete this/these photos from the selected album
        {
            deletePhotoFromAlbum (albumId,imgSelected);
        }
        else{ // was initially unchecked, hence the user want to add this/ these photos to the selected album 
            addPhotoToAlbum(albumId,imgSelected);
        }
        setIsChecked(!isChecked);
      };
  
      function containsPhotos(obj) {
        return imgAddIds.some((elem) => elem._id === obj._id);
      }
  
    // to check whether the selected photos ids are all present in a specific album or not
    const isPhotoPresent =()=>{
        // for loop on elements of selected photos ids 
        // compare the id in each loop  with the ids present in the album
        // if true (the id is present) then count ++
        // after looping .. check whether the count is equal to array of selected ids
        // if yes .. this means all selected ids are present in this album .. then make it checked
        // if no .. not all the selected photos ids are present .. then make it unchecked

        let count =0;
        albumPhotos.forEach(element => {
            if(containsPhotos(element))
            {
                count = count + 1 ;
            }
        }); 
        if(count === imgAddIds.length)
        {
            setIsChecked(true);
        }
        else
        {
            setIsChecked(false);
        }
        


    };
  
    useEffect(() => {
        isPhotoPresent()
    },[]);


    return (
      <>

            <div className="userAlbumAdd" onClick={toggleChecked}>
              <div className="userAlbumCover">
                {/* <div className="row"> */}
                  <img className="img-responsive" id="contentAdd" src={albumCover} alt="image_flickr" />
                  <div>
                    <h5 className="albumTitleAdd">{albumTitle}</h5>
                    <h5 className="albumInfoAdd">
                    {photoCount}
                    {' '}
                    items
                    </h5>
                  </div>
                  {/* <div> */}
                  {isChecked&&
                  (
                  <div className="checkIcon">
                    {check}
                  </div>
                  )}
                  {/* </div> */}
                {/* </div> */}
            </div>
            </div>

      </>
     );
    }
    
export default AddAlbumImages;
    