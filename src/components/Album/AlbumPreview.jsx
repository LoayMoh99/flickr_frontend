import React, {useState}from 'react'
import AlbumCard from './AlbumCard'
import NewAlbumModal from './NewAlbumModal'
import './AlbumPreview.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'


function AlbumPreview(){
    const New = <FontAwesomeIcon icon={faPlusSquare} color="DarkGrey"/>

    const [isModalOpen, setModalIsOpen] = useState(false);

    function toggleModal(){
        setModalIsOpen(!isModalOpen);
    }

    function confirmCreate(title,description){
        console.log(+title)
        console.log((description));
        //Create Album
        toggleModal();
    }

    return(
        <>
        <div className="albumPreview">
            <ul className="nav nav-tabs">
                <li className="ml-auto" ><button onClick={toggleModal} id="new-album" title="New album">{New}   New album</button></li>
            </ul>
            <div className="album-grid">
                <AlbumCard />
            </div>
        </div>
        {isModalOpen && <NewAlbumModal onRequestClose={toggleModal} onCreate={confirmCreate}/>}
        </>
        )
}

export default AlbumPreview;