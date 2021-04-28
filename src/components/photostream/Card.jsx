import React from "react"
import './EditInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faComment} from '@fortawesome/free-solid-svg-icons'


function Card(){

    const remove = <FontAwesomeIcon icon={faTrash} color="White" />
    const lock = <FontAwesomeIcon icon={faLock} color="DarkGrey"/>
    const views = <FontAwesomeIcon icon={faEye} color="DarkGrey"/>
    const fav = <FontAwesomeIcon icon={faStar} color="DarkGrey"/>
    const comment = <FontAwesomeIcon icon={faComment} color="DarkGrey"/>


    return(
        <>
        
        <div className="card">
            <img src="https://picsum.photos/200/200?random=1" alt="" />
            <button className="button">{remove}</button>
            <div className="interaction-bar">
                <div className="title-bar">
                <h1>Photo name</h1> 
                <p>description</p>
                </div>
            </div>
            <ul  className="tools">
                <li className="dropdown">
                        <button className="bttn bttn-secondary dropdown-toggle" type="button" id="dropdownMenuButton privacy" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {lock}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="#">Public</a></li>
                            <li><a className="dropdown-item" href="#">Private</a></li>
                            <li><a className="dropdown-item" href="#">Friends</a></li>
                            <li><a className="dropdown-item" href="#">Family</a></li>
                            <li><a className="dropdown-item" href="#">Friends and Family</a></li>
                        </ul>
                    </li>
                    <div id="info">
                        <li > {comment} 0</li>
                        <li > {fav} 0</li>
                        <li > <div>{views} 0</div></li>

                    </div>

            </ul>
        </div>

    </>
    )
}

export default Card;