import React, {useState}from 'react'
import DeleteModal from '../DeleteModal/DeleteModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

function AlbumCard(){
    const remove = <FontAwesomeIcon icon={faTrash} color="White" />
    const [isModalOpen, setModalIsOpen] = useState(false);
    const [idToDelete,setID]=useState(0)

    function toggleModal(id){
        setModalIsOpen(!isModalOpen);
        setID(id);
        console.log(id);
    }

    function confirmDelete(){
        console.log("id to delete album: ",idToDelete);
    }

    return(
        <>
            <div className="album-overview">
                <img src="https://picsum.photos/300/200?random=1"/>
                <div className="album-info">
                    <h1>album title</h1>
                    <p> 2 photos . 10 views</p>
                    <button  
                     onClick={ () =>{
                    toggleModal(1);}}
                    >{remove}</button>
                </div>
            </div>
        {/* <main> */}
        {isModalOpen && <DeleteModal 
                            onRequestClose={toggleModal} 
                            onDelete={confirmDelete} 
                            title = "Confirmation"
                            message = "Do you really want to delete this album? (Don't worry, none of the contents will be deleted.)"
                            />}
        {/* </main> */}
        </>
    )

}

export default AlbumCard;