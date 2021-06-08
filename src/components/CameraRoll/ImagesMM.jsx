import React from 'react';
import './ImagesMM.css';


/** Renders ImagesMM component to render selected photos in the main modal in CameraRoll 
 * @author Khadija Khaled
 * @namespace ImagesMM
 * @category Functional Component
 * @extends Component
 * @property {String} props.url -photo url
 */
const ImagesMM = (props) => {
  const { url } = props;
  return (
    <>
      <div className="column_adj_modal">
        <img className="img-responsive" id="content_modal" src={url} alt="image_flickr" />
      </div>
    </>
  );
};
export default ImagesMM;
