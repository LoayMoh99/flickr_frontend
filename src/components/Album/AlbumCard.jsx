import React, {useState}from 'react'
import DeleteModal from '../DeleteModal/DeleteModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, faFolderOpen} from '@fortawesome/free-solid-svg-icons'
import {DeleteAlbum} from '../../services/albumServices' 
import $ from 'jquery'
import {Link} from "react-router-dom";

/** Renders Card component to show photo in edit mode
 * @author Samar Nabil
 * @namespace AlbumCard
 * @category Functional Component
 * @extends Component
 * @property {String} props.id -Album id
 * @property {String} props.coverUrl -Album cover photo url 
 * @property {String} props.titile -Album title
 * @property {String} props.ownerId -Album owner id
 * @property {Number} props.numberOfPhotos -Album number of photos
 * @property {Boolean} props.isUser -Indicate if it is my profile (true) or not 
 * @property {String} props.userId -Visitied account user id 
 * @property {Boolean} props.viewMode -Indication if it's my account or others
 * @property {Boolean} props.favMode -Indication to allow likes or not (cannot like my photos)
 */
function AlbumCard(props){
    const navStyle={ color:'white'};
    const remove = <FontAwesomeIcon icon={faTrash} color="White" />
    const open = <FontAwesomeIcon icon={faFolderOpen} color="White" />

    const [isUser , setIsUser] = useState([props.isUser])
    const [userId , setUserId] = useState(props.userId)

    const [isModalOpen, setModalIsOpen] = useState(false);
    const [idToDelete,setID]=useState(0)

    /** Open/Close delete photo modal 
    * @memberof AlbumCard
    * @method toggleModal
    * @param {String} id -Album id to delete
    */
    function toggleModal(id){
        setModalIsOpen(!isModalOpen);
        setID(id);
    }

    /** Confirm Album deletion by id 
    * @memberof AlbumCard
    * @method ConfirmDelete
    */
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
            <div className="album-overview" >
                <img src={props.coverUrl} alt="album cover"/>
                <div className="album-info">
                    <h1>{props.title}</h1>
                    <p> {props.numberOfPhotos} photos</p>
                   {isUser && <button  onClick={ () =>{ toggleModal(props.id);}}>{remove}</button>}
                <Link  style={navStyle} to={`/AlbumPage/${props.id}/${isUser}`}>
                    <button id="open-button" >{open}</button>
                 </Link>

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