import React from 'react';

export default  function ShownImageComments(props){
    return(
        <div className="previewedPhotoComments">
            <span>{props.commentOwnerFname} {props.commentOwnerLname}</span>
            <p>{props.cmntText}</p>
        </div>
    )
}