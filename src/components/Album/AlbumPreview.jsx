import React, {useState}from 'react'
import './AlbumPreview.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'

function AlbumPreview(){
    const New = <FontAwesomeIcon icon={faPlusSquare} color="DarkGrey"/>

    const [isMousedOver, setMouseOver] = useState(false);

    function handleMouseOver() {
        setMouseOver(true);
      }
    
    function handleMouseOut() {
        setMouseOver(false);
    }

    return(
        <>
        <div className="albumPreview">
            <ul className="nav nav-tabs">
                <li className="ml-auto" ><button id="new-album" title="New album">{New}   New album</button></li>
            </ul>
            <div className="album-grid">
                <div className="album-overview">
                    <img src="https://picsum.photos/300/200?random=1"/>
                    <div className="album-info">
                        <h1>album title</h1>
                        <p> 2 photos . 10 views</p>
                    </div>
                </div>
                <div className="album-overview">
                    <img src="https://picsum.photos/500/200?random=1"/>
                    <div className="album-info">
                        <h1>album title</h1>
                        <p> 2 photos . 10 views</p>
                    </div>
                </div>
                <div className="album-overview">
                    <img src="https://picsum.photos/400/400?random=1"/>
                    <div className="album-info">
                        <h1>album title</h1>
                        <p> 2 photos . 10 views</p>
                    </div>
                </div>
                <div className="album-overview">
                    <img src="https://picsum.photos/400/200?random=1"/>
                    <div className="album-info">
                        <h1>album title</h1>
                        <p> 2 photos . 10 views</p>
                    </div>
                </div>
                <div className="album-overview">
                    <img src="https://picsum.photos/600/300?random=2"/>
                    <div className="album-info">
                        <h1>album title</h1>
                        <p> 2 photos . 10 views</p>
                    </div>
                </div>
            </div>
        </div>
        </>
        )
}

export default AlbumPreview;