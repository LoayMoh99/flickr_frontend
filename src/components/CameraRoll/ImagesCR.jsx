import React from 'react';
import './ImagesCR.css';


/** Renders ImagesCR component to render CameraRoll photos 
 * @author Khadija Khaled
 * @namespace ImagesCR
 * @category Functional Component
 * @extends Component
 * @property {String} props.url -photo url
 * @property {object} props.image - image object
 * @property {Function} props.onEdit -onEdit function to be triggered onClick
 */
const ImagesCR = (props) => {
  const { url, image, onEdit } = props;
  return (
    <>

      <div className="column_adj">
        <img className="img-responsive" id="content" src={url} alt="image_flickr" onClick={(event) => onEdit(event, image)} />
      </div>
    </>
  );
};

export default ImagesCR;
