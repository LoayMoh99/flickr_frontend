import React,{useState} from "react"
import './Exploregrid.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar,faPlusSquare,faComment,faFolderOpen} from '@fortawesome/free-solid-svg-icons'
import Comments from "./Comments"
import fav from "./Favs"

import {Link} from "react-router-dom";
import {PostUserFavs,DeleteUserFavs} from '../../services/userServices'
function Explore_Grid(props){

    
    const fav = <FontAwesomeIcon icon={faStar} color="white"/>
    const comment = <FontAwesomeIcon icon={faComment} color="white"/>
    const addTo = <FontAwesomeIcon icon={faPlusSquare} color="white"/>
    const open = <FontAwesomeIcon icon={faFolderOpen} color="white" />

    function setItemRatio() {
        this.parentNode.style.setProperty('--ratio', this.naturalHeight / this.naturalWidth);
        
    }

    function waitForLoad(){
        this.addEventListener('load', setItemRatio)
    }

    // overlay
    const [isMousedOver, setMouseOver] = useState(false);
    const [isFav , setIsFav] = useState(true);
    function handleMouseOver() {
        console.log(props.ownerName)
        setMouseOver(true);
      }
    
    function handleMouseOut() {
        setMouseOver(false);
    }

    console.log(props.title)
//Comment Box
const [isComment, setIsComment] = useState(false);

const [isUser, setIsUser] = useState(props.viewMode);

function openCommentBox(){
    setIsComment(!isComment);
     //alert(isComment);
}
function addToFav(){
    console.log(props.id);
    //api
    const object={
        "photoUrl": "https://picsum.photos/200/200?random=2",
        "title": "added Fav",
        "descript": "description",
        "Fav": [],
        "privacy": "public",
        "tags": [],
        "ownerId": 0,
        "peopleTags": [],
        "comments": 78,
        "Favs": 60,
        "Username": "username",
        "Name": "Samar Nabil"
    }
    // PostUserFavs(props.id).then( response => {
    PostUserFavs(props.id,object).then( response => {
        console.log(response);
        if(response.status === 500){
            DeleteUserFavs(props.id).then( response => {
                console.log(response);
            })
        }
    })
}

function deleteFav(){
    DeleteUserFavs(props.id).then( response => {
        console.log(response);
    })
}


    return(
        <>
            
            <div className="item " >
            <Link to={`/imagedetails/${props.id}`}> <button className="open-photo">{open}</button></Link>
            <img 
            src={props.url} 
            onLoad={event => (
                event.currentTarget.naturalHeight? setItemRatio.call(event.currentTarget) : waitForLoad.call(event.currentTarget) 
            )}
            alt={props.title}
            onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                
                />
                <div className="shadow-overlay" style={{display: isMousedOver || isComment?"block":"none"}}
                    onMouseOver={handleMouseOver} 
                    onMouseOut={handleMouseOut}>
                    <h1>{props.title}</h1>
                    <ul  className="tools">
                        <li><a href="#" id="para">by {props.username}</a></li>
                        <div id="info">
                            <li>{addTo}</li>
                            <li  onClick={openCommentBox}> {comment} {props.numberOfComments}</li>
                            {!isUser?
                                <>
                                {isFav? <li onClick={deleteFav}>{fav} {props.numberOfFavs}</li>:<li> {fav} {props.numberOfFavs}</li>}
                                </>
                            :
                                <> 
                               
                                {isFav&&<li onClick={addToFav}>{fav} {props.id}</li>}
                                </>
                            }
                           
                    </div> 
                  
                    </ul>
                    {isComment && <Comments id= {props.id}  onClick={openCommentBox}/>}
                       
                </div>
            </div> 

        </>

    )
}

export default Explore_Grid;