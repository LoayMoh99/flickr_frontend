import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
function AlbumCoverPhoto(props) {
//const coverPhoto="https://picsum.photos/500/300?random=1";
const pen =  <FontAwesomeIcon icon={faPen} color="white" size="1x" />;
const avatarUrl="https://picsum.photos/500/300?random=1";
const countPhotos=30;
const userName= "Khadija Swelam";

const { coverPhoto, title, description } = props;

   const [tag, setTag] = useState();
    const addtag = e => setTag(e.target.value); 
    console.log(tag);
return (
    <>
   <div className="coverPhoto" style={{backgroundImage: `url(${coverPhoto})`}}>
        <div className="overlayAlbum">
                <div className="spaceAlbumHeader">
                    {/* <span className="spaceTop" >   */}
                        <a href="/#" className="editPen" >   
                                {pen}
                        </a>
                        {/* </span>  */}
                    {/* <input className="inputTitleAlbum" value="Title" type="text" contentEditable="true"  onChange={addtag} ></input> */}


                    <div contentEditable="true" >
                        <div className="titleEditable" >
                            <p onChange={addtag} >{title}</p>
                        </div>
                        <div className="descriptionEditable">
                            {description}
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