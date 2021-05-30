import React,{useState,useEffect} from "react"
import ImageGrid from "./ImageGrid"
import NavBar from "./NavBar"
import './ImageGrid.css'
import GetUserPhotos from "../../services/userServices"
import GetPeoplePhotos from "../../services/peopleServices"

function Photostream(props){

    //user/people boolean -> from userInfo token handling
    // const [isUser , setIsUser] = useState(props.isUser)
    const [isUser , setIsUser] = useState(true);
    // const [userId , setUserId] = useState(props.userId)
    const [userId , setUserId] = useState(0)

    const [isFav , setIsFav] = useState(false)

    //Get photos
    const [userPhotos, setUserPhotos] = useState([]);
    const [peoplePhotos, setPeoplePhotos] = useState([]);

    //get request
    useEffect( () =>{
        //get user photos
        GetUserPhotos().then( response => {
            setUserPhotos(response.data);
        })

        //get people photos by userId
        GetPeoplePhotos(userId).then( response => {
            setPeoplePhotos(response.data);
        })
    },[userPhotos,userId])

    return (
        <>
        <div className="photostream-body">
            <NavBar 
                viewMode = {isUser}
            />
            <div className="grid">
            {isUser?
                <>
                    {userPhotos.map(photo => (
                    <ImageGrid
                    id = {photo.id}
                    url ={photo.photoUrl} 
                    title ={photo.title} 
                    description = {photo.description}
                    privacy = {photo.privacy}
                    ownerId = {photo.ownerId}
                    numberOfFavs = {photo.num_favs}
                    numberOfComments ={photo.comments.length}
                    ownerName = "YOU!"
                    viewMode = {isUser}
                    favMode = {isFav}
                    />
                ))}
                </>
                :
                <>
                    {peoplePhotos.map(photo => (
                    <ImageGrid
                    id = {photo.id}
                    url ={photo.photoUrl} 
                    title ={photo.title} 
                    description = {photo.description}
                    privacy = {photo.privacy}
                    ownerId = {photo.ownerId}
                    numberOfFavs = {photo.numberOfFavs}
                    numberOfComments ={photo.numberOfComments}
                    ownerName ={photo.userName}
                    viewMode = {isUser}
                    />
                ))}
                </>
            }

            <div className="placeholder"></div>
            </div>
        </div>
        </>
   ) 
}

export default Photostream;