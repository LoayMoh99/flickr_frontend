import React,{useState,useEffect} from "react"
import ImageGrid from "../photostream/ImageGrid"
import NavBar from "../photostream/NavBar"
import {GetUserFavs} from "../../services/userServices"
import {GetPeopleFavs} from "../../services/peopleServices"

function Faves(props){

    //user/people boolean -> from userInfo token handling
    // const [isUser , setIsUser] = useState([props.isUser])
    const [isUser , setIsUser] = useState(true);
    // const [userId , setUserId] = useState(props.userId)
    const [userId , setUserId] = useState(0);
    // const [userName , setUserName] = useState(props.userName)
    const [userName , setUserName] = useState('');
    const [isFav , setIsFav] = useState(true);
 
    //Get Fav photos
    const [userFavs, setUserFavs] = useState([]);
    const [peopleFavs, setPeopleFavs] = useState([]);

    //get request
    useEffect( () =>{
        // get user favs
        GetUserFavs().then( response => {
            setUserFavs(response.data);
        })

        //get people favs by userName
        GetPeopleFavs(userName).then( response => {
            setPeopleFavs(response.data);
        })
    },[userFavs,userId])


return (
    <>
    <div className="photostream-body">
    <NavBar 
        viewMode = {false}
    />
    <div className="grid">
    {isUser?
        <>
        {userFavs.map(photo => (
            <ImageGrid
            id = {photo.id}
            url ={photo.photoUrl} 
            title ={photo.title} 
            description = ''
            privacy = {photo.privacy}
            ownerName = {photo.Name}
            ownerId = {photo.ownerId}
            numberOfFavs = {photo.Favs}
            numberOfComments ={photo.comments}
            viewMode ={isUser}
            favMode = {isFav}
            />
        ))}
        </>
    :
        //get people favs
        <>
        {peopleFavs.map(photo => (
            <ImageGrid
            id = {photo.id}
            url ={photo.photoUrl} 
            title ={photo.title} 
            description = ''
            privacy = 'public'
            ownerName = {photo.userName}
            numberOfFavs = '1'
            numberOfComments ={photo.numberOfComments}
            viewMode ={isUser}
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

export default Faves;