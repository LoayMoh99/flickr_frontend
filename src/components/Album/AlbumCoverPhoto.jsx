import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
function AlbumCoverPhoto() {
const coverPhoto="https://picsum.photos/500/300?random=1";
const pen =  <FontAwesomeIcon icon={faPen} color="white" size="1x" />;
const avatarUrl="https://picsum.photos/500/300?random=1";
const countPhotos=30;
const userName= "Khadija Swelam";
return (
    <>
    {/* <div className="overlayAlbum"> */}
        {/* <div className="coverPhoto">
            <div className="overlayAlbum" style={{backgroundImage: `url(${coverPhoto})`}}>
                <p>helloooooooooooooooooooooooo
                    oooooooooooooooooooooooooooo
                    ooooooooooooooooooooooooooooo
                </p>
            </div>
        </div> */}
       {/* <img className="img-responsive coverPhoto"src={coverPhoto} alt="image_flickr" /> */}
       {/* <h3>hello</h3> */}
   {/* </div> */}
   {/* <div className="overlayAlbum">
        <img className="img-responsive coverPhoto"src={coverPhoto} alt="image_flickr" />
   </div> */}
   <div className="coverPhoto" style={{backgroundImage: `url(${coverPhoto})`}}>
        <div className="overlayAlbum">
                <div className="spaceAlbumHeader">
                    {/* <span className="spaceTop" >   */}
                        <a href="/#" className="editPen" >   
                                {pen}
                        </a>
                        {/* </span>  */}
                    {/* <input className="inputTitleAlbum" value="Title" type="text" contentEditable="true" ></input> */}
                    <div contentEditable="true" >
                        <div className="titleEditable">
                            Title
                        </div>
                        <div className="descriptionEditable">
                            Click here to enter a description for this album
                        </div>
                    </div>
               </div>
               <h5 className="countPhotos">
                {countPhotos}
               {' '}
                photos</h5>
         <div className="spaceTop">
           <img className="img-responsive avatarPhoto"src={avatarUrl} alt="image_flickr" />
        </div>
        <a href="/#">
            <h5 className="userName"> 
                By:
                {' '}
                {userName}
            </h5>
        </a>
        </div>
   </div>
    </>
  );
}

export default AlbumCoverPhoto;