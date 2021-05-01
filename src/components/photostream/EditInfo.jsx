import React,{useState} from "react"
import Card from "./Card"
import DeleteModal from "../DeleteModal/DeleteModal"
import './EditInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function EditInfo(){

    const back = <FontAwesomeIcon icon={faArrowLeft} color="DarkGrey"/>
    const userPhotos=[{photoId:0, photoUrl:"https://picsum.photos/500/300?random=1",ownerId:5,numFavs:6,numViews:8,onwerName:"Samar",title:"First Photo Title",description:"First Photo Description",numComments:7},{photoId:1, photoUrl:"https://picsum.photos/700/600?random=2",ownerId:6,numFavs:7,numViews:10,onwerName:"Samar2",title:"Second Photo Title",description:"Second Photo Description",numComments:20},{photoId:2, photoUrl:"https://picsum.photos/600/300?random=1",ownerId:6,numFavs:60,numViews:100,onwerName:"Samar3",title:"Third Photo Title",description:"Third Photo Description",numComments:70},{photoId:3, photoUrl:"https://picsum.photos/500/200?random=1",ownerId:8,numFavs:67,numViews:80,onwerName:"Samar4",title:"Fourth Photo Title",description:"Fourth Photo Description",numComments:9},{photoId:4, photoUrl:"https://picsum.photos/200/300?random=1",ownerId:56,numFavs:6,numViews:8,onwerName:"Samar4",title:"Fifth Photo Title",description:"Fifth Photo Description",numComments:7},{photoId:5, photoUrl:"https://picsum.photos/500/300?random=2",ownerId:5,numFavs:6,numViews:8,onwerName:"Samar",title:"Sixth Photo Title",description:"Sixth Photo Description",numComments:7},{photoId:6, photoUrl:"https://picsum.photos/200/200?random=2",ownerId:5,numFavs:80,numViews:1000,onwerName:"Samar",title:"Seventh Photo Title",description:" Seventh Description",numComments:77}]
    

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
        {isModalOpen && <DeleteModal onRequestClose={toggleModal} onDelete={confirmDelete}/>}
        </main>

        </>
    )

}

export default EditInfo;