import React, {useState,useEffect}from 'react'
import AlbumCard from './AlbumCard'
import './AlbumPreview.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import GetUserAlbums,{GetPeopleAlbums} from "../../services/albumServices"


function AlbumPreview(props){
    const New = <FontAwesomeIcon icon={faPlusSquare} color="DarkGrey"/>

    //user/people boolean -> from userInfo token handling
    // const [isUser , setIsUser] = useState(props.isUser)
    const [isUser , setIsUser] = useState(true);
    //get people by id from userInfo and send username
    const [username , setUserName] = useState(props.userName)

    //Get user albums
    const [userAlbums, setUserAlbums] = useState([]);
    const [peopleAlbums, setPeopleAlbums] = useState([]);

    //get request
    useEffect( () =>{
        //get user photos
        GetUserAlbums().then( response => {
            setUserAlbums(response.data);
        })

        //get people photos by userId
        // GetPeopleAlbums(username).then( response => {
        GetPeopleAlbums().then( response => {
            setPeopleAlbums(response.data);
        })
    },[])

    return(
        <>
        <div className="albumPreview">
            <div className="album-grid">
                {isUser?
                    <>
                    {userAlbums.map (album =>(
                        <AlbumCard 
                        id={album.id}
                        coverUrl = {album.coverPhoto.photoUrl}
                        title = {album.title}
                        ownerId = {album.ownerId}
                        numberOfPhotos = {album.photos.length}
                        viewMode={false}
                        favMode = {false}
                        />
                    ))}
                    </>
                : 
                    <>
                    {peopleAlbums.map (album =>(
                        <AlbumCard 
                        id={album.id}
                        coverUrl = {album.coverPhoto.photoUrl}
                        title = {album.title}
                        ownerId = {album.ownerId}
                        numberOfPhotos = {album.photos.length}
                        viewMode={false}
                        favMode = {true}
                        />
                    ))} 
                    </>
                }
            </div>
        </div>
        </>
        )
}

export default AlbumPreview;