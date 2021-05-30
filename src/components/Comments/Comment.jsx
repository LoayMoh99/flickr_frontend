import React from "react"

function Comment(props){
    return(
        <>
        <div className="users-comments">
            <a href="#">{props.Fname} {props.Lname}</a>
            {/* <span id="delete-comment" onClick={props.onRequestDelete}>&times;</span> */}
            <p>{props.body}</p>
        </div>
        </>
    )
}

export default Comment;