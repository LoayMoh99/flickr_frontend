import React, { useState ,useEffect} from "react"
import Comment from "./Comment"
import './CommentBox.css'
import {GetComments,PostComments} from "../../services/photoServices"

/** Renders CommentBox component
 * @author Samar Nabil
 * @namespace CommentBox
 * @category Functional Component
 * @extends Component
 * @property {String} props.photo_id -Photo id
 * @property {Number} props.numberOfComments -Number of comments on the photo
 * @property {function} openCommentBox -open comment box callback function
 */
function CommentBox(props){
    const [comments , setComments ] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [placeholderText , setText] = useState("Add a comment about this photo");

    //get request
    useEffect( () =>{
        GetComments(props.photo_id).then( response => {
            setComments(response.data);
        })
    },[comments])

    /** Saves the current value of the comment in textarea tag
    * @memberof CommentBox
    * @method handleComment
    * @param {event} event -Tirggered event on change in input value
    */
    function handleComment(event){
        const toComment = event.target.value;
        setNewComment(toComment);
    }

    /** Post comment request
    * @memberof CommentBox
    * @method postComment
    */
    function postComment(){
        setText("Add a comment about this photo");
        console.log(props.photo_id)

        const object ={
            comment:newComment
        }
        
        PostComments(props.photo_id,object).then( response => {
        // PostComments(props.photo_id,object).then( response => {
            console.log(response);
        });
        document.getElementById('com').value = '';
    }

    return(
        <>
            <div className="comment-box">
                <div className="comments">
                {comments.map(comment => (
                    <Comment
                        Fname = {comment.user.Fname}
                        Lname = {comment.user.Lname}
                        body = {comment.comment}
                    />
                ))}
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