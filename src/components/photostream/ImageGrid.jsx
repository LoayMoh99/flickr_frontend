import React,{useState} from "react"
import './ImageGrid.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faComment} from '@fortawesome/free-solid-svg-icons'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'

function ImageGrid(props){

    // const images =["https://picsum.photos/300/200?random=1","https://picsum.photos/500/200?random=1","https://picsum.photos/600/200?random=1","https://picsum.photos/200/400?random=1","https://picsum.photos/300/400?random=1","https://picsum.photos/400/400?random=1","https://picsum.photos/500/400?random=1","https://picsum.photos/600/400?random=1","https://picsum.photos/200/500?random=1","https://picsum.photos/300/500?random=1","https://picsum.photos/400/500?random=1","https://picsum.photos/500/500?random=1","https://picsum.photos/600/500?random=1","https://picsum.photos/200/300?random=2","https://picsum.photos/300/300?random=2","https://picsum.photos/400/300?random=2","https://picsum.photos/500/300?random=2","https://picsum.photos/600/300?random=2","https://picsum.photos/200/200?random=2","https://picsum.photos/300/200?random=2","https://picsum.photos/400/200?random=2","https://picsum.photos/500/200?random=2","https://picsum.photos/600/200?random=2","https://picsum.photos/200/400?random=2","https://picsum.photos/300/400?random=2","https://picsum.photos/400/400?random=2","https://picsum.photos/500/300?random=3","https://picsum.photos/600/300?random=3","https://picsum.photos/200/200?random=3","https://picsum.photos/300/200?random=3","https://picsum.photos/400/200?random=3","https://picsum.photos/500/200?random=3"]
    const fav = <FontAwesomeIcon icon={faStar} color="white"/>
    const comment = <FontAwesomeIcon icon={faComment} color="white"/>
    const addTo = <FontAwesomeIcon icon={faPlusSquare} color="white"/>

    function setItemRatio() {
        this.parentNode.style.setProperty('--ratio', this.naturalHeight / this.naturalWidth);
        
    }

    function waitForLoad(){
        this.addEventListener('load', setItemRatio)
    }

    // overlay
    const [isMousedOver, setMouseOver] = useState(false);

    function handleMouseOver() {
        console.log(props.owner)
        setMouseOver(true);
      }
    
    function handleMouseOut() {
        setMouseOver(false);
    }

    console.log(props.title)


    return(
        <>
            
            <div className="item ">
            <img 
            src={props.url} 
            onLoad={event => (
                event.currentTarget.naturalHeight? setItemRatio.call(event.currentTarget) : waitForLoad.call(event.currentTarget) 
            )}
            alt={props.title}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            />
            {/* <div className="overlay">My Name is John</div> */}
            {isMousedOver &&
            <> 
                <div className="shadow-overlay">
                    <h1>{props.title}</h1>
                    {/* <ul>
                    <li><a href="#" id="para">by {props.owner}</a></li>
                    <li><a href="#"> {comment} {props.numberOfComments}</a></li> 
                    <li><a href="#"> {fav} {props.numberOfFavs}</a></li>
                    </ul> */}
                    
                    <ul  className="tools">
                    <li><a href="#" id="para">by {props.owner}</a></li>
                    <div id="info">
                        <li>{addTo}</li>
                        <li > {comment} {props.numberOfComments}</li>
                        <li > {fav} {props.numberOfFavs}</li>
                    </div>
                    </ul>

                </div>
            </>}
            </div>

        </>

    )
}

export default ImageGrid;