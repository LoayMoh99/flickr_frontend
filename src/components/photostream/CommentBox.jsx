import React, { useState } from "react"
import Comment from "./Comment"
import './CommentBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment} from '@fortawesome/free-solid-svg-icons'

function CommentBox(props){
    const comment = <FontAwesomeIcon icon={faComment} color="white"/>

    const [newComment, setComment] = useState('')
    const [placeholderText , setText] = useState("Add a comment about this photo")

    function handleComment(event){
        const toComment = event.target.value;
        setComment(toComment);
    }

    function postComment(){
        console.log(newComment);
        setText("Add a comment about this photo");
        //API
        document.getElementById('com').value = '';
    }

    return(
        <>
            <div className="comment-box">
                <div className="comments">
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>  
                </div><hr/>
                <div className="mycomment">
                    <textarea id="com" className="form-control" rows="2" placeholder={placeholderText} onChange={handleComment}/>
                    <button onClick={postComment}>Add comment</button>
                </div>
            </div>
        </>
    )

}

export default CommentBox;