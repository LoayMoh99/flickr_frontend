import React,{useState} from "react"
import Card from "./Card"
import Modal from "./Modal"
import './EditInfo.css'
import './Modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function EditInfo(){

    const back = <FontAwesomeIcon icon={faArrowLeft} color="DarkGrey"/>
    const userPhotos=[{photoId:0, photoUrl:"https://picsum.photos/500/300?random=1",ownerId:5,numFavs:6,numViews:8,onwerName:"Samar",title:"First Photo Title",description:"First Photo Description",numComments:7},{photoId:1, photoUrl:"https://picsum.photos/700/600?random=2",ownerId:6,numFavs:7,numViews:10,onwerName:"Samar2",title:"Second Photo Title",description:"Second Photo Description",numComments:20}]
    
    // const [isEditable,setEdit] = useState(false);

    // function changeLayout(){
    //     console.log(this);
    //     setEdit(true);
    //     return
    // }

    // Modal
    const [isModalOpen, setModalIsOpen] = useState(false);
    const [idToDelete,setID]=useState(0)



    function toggleModal(id){
        setModalIsOpen(!isModalOpen);
        setID(id);

    }



    function confirmDelete(){
        if (idToDelete ===0){
            console.log("hamsa7 carddddddd 1");
        }else if (idToDelete===1){
            console.log("hamsa7 carddddddd 2");
        } 

        toggleModal(); 
    }
    
    return(
        <>
        <ul id="nav-list">
            <li id="nav-item"><a href="#" id="a">{back } Back to photostream</a></li>
           <li id="right "><p id="a">Edit in <a id="a2" href="#" >Camera Roll</a></p> </li>
        </ul>

        {/* cards */}
        <div className="card-grid">
        {userPhotos.map(photo =>(
            <Card 
                title={photo.title}
                description={photo.description}
                url={photo.photoUrl}
                numberOfFavs={photo.numFavs}
                numberOfViews={photo.numViews}
                numberOfComments={photo.numComments}
                id={photo.photoId}
                // onEdit={changeLayout}
                onDelete={toggleModal}
            />
        ))}
        </div>
        <main>
        {isModalOpen && <Modal onRequestClose={toggleModal} onDelete={confirmDelete}/>}
        </main>

        {/* {isEditable && <>} */}
        </>
    )

}

export default EditInfo;