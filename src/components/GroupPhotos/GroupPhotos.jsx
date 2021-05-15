import React,{useState,useEffect} from 'react'
import ImageGrid from "../photostream/ImageGrid"
import './GroupPhotos.css'
import {Link} from "react-router-dom";
import axios from "axios"
const endpoint = 'http://localhost:3001/'

function GroupPhotos(){

    const navStyle={
        color:'white'
    };

    //Get photos
    const [groupPhotos, setPhotos] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const {data,status} = await axios.get( endpoint+'groupPhotos',);
        console.log(status);
        if (status === 200){
            setPhotos(data);
        }
    };
    
    fetchData();
    },[]);

    return(
        <>
        <div className="group-photos-body">
            <ul className="groupNav">
                <h2>Group Pool</h2> 
                <Link  style={navStyle} to="/Add"><button>Add photo</button></Link>
            </ul>
            <div className="grid">
            {groupPhotos.map(photo => (
                <ImageGrid
                id = {photo.photo_id}
                url ={photo.photo_url} 
                title ={photo.photo_title} 
                ownerName = {photo.owner_username}
                ownerId = {photo.photo_owner_id}
                numberOfFavs = {photo.num_favs}
                numberOfComments ={photo.num_comments}
                />
            ))}
            <div className="placeholder"></div>
            </div>
        </div>
        </>
    )

}

export default GroupPhotos;