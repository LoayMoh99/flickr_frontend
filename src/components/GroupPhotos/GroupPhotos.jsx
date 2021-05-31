import React,{useState,useEffect} from 'react'
import ImageGrid from "../photostream/ImageGrid"
import './GroupPhotos.css'
import $ from 'jquery'
import {Link} from "react-router-dom";
import GetGroupPhotos from '../../services/groupServices'

function GroupPhotos(props){

    const navStyle={
        color:'white'
    };

    // const [groupId , setgroupId] = useState(props.id);
    const [groupId , setgroupId] = useState(1110);
    // const [isMember , setIsMember] = useState(props.isMember);
    const [isMember , setIsMember] = useState(true);

    //Get photos
    const [groupPhotos, setPhotos] = useState([]);

    //get request
    useEffect( () =>{
        // get user favs
        GetGroupPhotos().then( response => {
            setPhotos(response.data);
        })

    },[])

    return(
        <>
        <div className="group-photos-body">
            <ul className="groupNav">
                <h2>Group Pool</h2>
                {isMember && <Link  style={navStyle} to={`/Add/${groupId}`}><button>Add photo</button></Link>}
            </ul>
            <div className="grid">
            {groupPhotos.map(photo => (
                <ImageGrid
                id = {photo.id}
                url ={photo.url} 
                title ={photo.title} 
                ownerName = 'unknown'
                ownerId = '0'
                numberOfFavs = {photo.Fav.length}
                numberOfComments ='0'
                viewMode = {false}
                favMode = {true}
                />
            ))}
            <div className="placeholder"></div>
            </div>
        </div>
        </>
    )

}

export default GroupPhotos;