import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function AddAlbumImages(props) {
    const check = <FontAwesomeIcon icon={faCheckCircle} color="cornflowerblue" size="1x"/>;
    const  { albumCover , albumTitle , photoCount }= props;
    return (
      <>

            <div className="userAlbumAdd">
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
                  <div className="checkIcon">
                    {check}
                  </div>
                {/* </div> */}
            </div>
            </div>

      </>
     );
    }
    
export default AddAlbumImages;
    