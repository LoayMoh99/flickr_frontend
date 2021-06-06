import React,{useState,useEffect} from "react"
import ImageGrid from "../photostream/ImageGrid"
import NavBar from "../photostream/NavBar"
import {GetUserFavs} from "../../services/userServices"
import {GetPeopleFavs} from "../../services/peopleServices"

function Faves(props){

    //user/people boolean -> from userInfo token handling
    const [isUser , setIsUser] = useState([props.isUser])
    const [userId , setUserId] = useState(props.userId)
    // const [userName , setUserName] = useState(props.userName)
    const [userName , setUserName] = useState('');
 
    //Get Fav photos
    const [userFavs, setUserFavs] = useState([]);
    const [peopleFavs, setPeopleFavs] = useState([]);

    //get request
    useEffect( () =>{
        if (isUser[0]){
            // get user favs
            GetUserFavs().then( response => {
                setUserFavs(response.data);
            })
        }else{
            //get people favs by userName
            GetPeopleFavs(props.userName).then( response => {
                setPeopleFavs(response.data);
            })
        }


    },[])
    // },[])

    let isPhotoSelected;
    function showPhoto(id){
        console.log("PhotoStream",id);
        isPhotoSelected=id;
        console.log("after click",isPhotoSelected);
        //props.history.push('/imagedetails/id}');
        
    }


return (
    <>
    <div className="photostream-body">
    <NavBar 
        viewMode = {false}
    />
    <div className="grid">
    {isUser[0]?
        <>
        {userFavs.map(photo => (
            <ImageGrid
            id = {photo._id}
            url ={photo.photoUrl} 
            title ={photo.title} 
            description = ''
            privacy = {photo.privacy}
            ownerName = {photo.Name}
            ownerId = {photo.ownerId}
            numberOfFavs = {photo.Favs}
            numberOfComments ={photo.comments}
            viewMode ={isUser}
            favMode = {true}
            onOpenRequest={showPhoto}
            />
        ))}
        </>
    :
        //get people favs
        <>
        {peopleFavs.map(photo => (
            <ImageGrid
            id = {photo._id}
            url ={photo.photoUrl} 
            title ={photo.title} 
            description = ''
            
            ownerName = {photo.userName}
           
            numberOfComments ={photo.numberOfComments}
            viewMode ={isUser}
            favMode ={true}
            onOpenRequest={showPhoto}

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