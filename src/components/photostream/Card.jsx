import React,{useState,useEffect} from "react"
import './EditInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faComment} from '@fortawesome/free-solid-svg-icons'


function Card(props){

    const remove = <FontAwesomeIcon icon={faTrash} color="White" />
    const lock = <FontAwesomeIcon icon={faLock} color="DarkGrey"/>
    const views = <FontAwesomeIcon icon={faEye} color="DarkGrey"/>
    const fav = <FontAwesomeIcon icon={faStar} color="DarkGrey"/>
    const comment = <FontAwesomeIcon icon={faComment} color="DarkGrey"/>



    return(
        <>
        
        <div className="card">
            <img src={props.url} alt="" />
            <button className="button"
                onClick={ () =>{
                    props.onDelete(props.id);}}
                    // confirmDelete(props.id);}}
            >{remove}</button>
            <div className="interaction-bar"
                onClick={() => {
                props.onEdit(props.id);}}
            >
                <div className="title-bar">
                <h1>{props.title}</h1> 
                <p>{props.description}</p>
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
                        <li > {comment} {props.numberOfComments}</li>
                        <li > {fav} {props.numberOfFavs}</li>
                        <li > <div>{views} {props.numberOfViews}</div></li>

                    </div>

            </ul>
        </div>

    </>
    )
}

export default Card;