import React from "react"
import './CommentBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment} from '@fortawesome/free-solid-svg-icons'

function CommentBox(props){
    const comment = <FontAwesomeIcon icon={faComment} color="white"/>

    return(
        <>
            <div className="comment-box">
                <div className="comments"></div><hr/>
                <div className="mycomment">
                    <textarea className="form-control" rows="2" placeholder="Add a comment about this photo"/>
                    <button>Add comment</button>
                </div>
            </div>
        </>
    )

}

export default CommentBox;