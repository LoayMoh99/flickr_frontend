import React, {useState}from 'react'
import DeleteModal from '../DeleteModal/DeleteModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {DeleteAlbum} from '../../services/albumServices' 

function AlbumCard(props){
    const remove = <FontAwesomeIcon icon={faTrash} color="White" />
    const [isModalOpen, setModalIsOpen] = useState(false);
    const [idToDelete,setID]=useState(0)

    function toggleModal(id){
        setModalIsOpen(!isModalOpen);
        setID(id);
    }

    function confirmDelete(){
        console.log("id to delete album: ",idToDelete);
        //get user photos
        DeleteAlbum(idToDelete).then( response => {
            console.log(response)
        });
        setModalIsOpen(!isModalOpen);
    }

    return(
        <>
            <div className="album-overview">
                <img src={props.coverUrl} alt="album cover"/>
                <div className="album-info">
                    <h1>{props.title}</h1>
                    <p> {props.numberOfPhotos} photos</p>
                    <button  
                     onClick={ () =>{
                    toggleModal(props.id);}}
                    >{remove}</button>
                </div>
            </div>
        {isModalOpen && <DeleteModal 
                            onRequestClose={toggleModal} 
                            onDelete={confirmDelete} 
                            title = "Confirmation"
                            message = "Do you really want to delete this album? (Don't worry, none of the contents will be deleted)"
                            />
        }
        </>
    )

}

export default AlbumCard;