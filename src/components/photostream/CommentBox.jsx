import React from "react"
import './CommentBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment} from '@fortawesome/free-solid-svg-icons'

function CommentBox(props){
    const comment = <FontAwesomeIcon icon={faComment} color="white"/>

    return(
        <>
        {/* <li > {comment} {props.numberOfComments}</li> */}
{/* 
        <li className="dropdown">
            <button className="bttn bttn-secondary dropdown-toggle" type="button" id="dropdownMenuButton privacy" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {comment} 
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="#">Public</a></li>
                <li><a className="dropdown-item" href="#">Private</a></li>
                <li><a className="dropdown-item" href="#">Friends</a></li>
            </ul>
        </li> */}

        <div class="form-popup" id="myForm">
            <form action="/action_page.php" class="form-container">
                <h1>Login</h1>

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required/>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>

                <button type="submit" class="btn">Login</button>
                <button type="submit" class="btn cancel" onclick="closeForm()">Close</button>
            </form>
        </div>

        

        </>
    )

}

export default CommentBox;