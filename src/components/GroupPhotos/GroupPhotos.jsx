import React,{useState,useEffect} from 'react'
import ImageGrid from "../photostream/ImageGrid"
import './GroupPhotos.css'
import $ from 'jquery'
import {Link} from "react-router-dom";
import GetGroupPhotos from '../../services/groupServices'

/** Renders GroupPhotos component
 * @author Samar Nabil
 * @namespace GroupPhotos
 * @category Functional Component
 * @extends Component
 * @property {Boolean} props.isMember -Indicate user if a member of the group (true) or not 
 * @property {String} props.id -Visitied group id 
 */
function GroupPhotos(props){

    const navStyle={
        color:'white'
    };

    const [groupId , setgroupId] = useState(props.id);
    const [isMember , setIsMember] = useState(props.isMember);

    //Get photos
    const [groupPhotos, setPhotos] = useState([]);

    //get request
    useEffect( () =>{
        // get user favs
        GetGroupPhotos(groupId).then( response => {
            console.log({response})
            setPhotos(response.data);
        })

    },[isMember])

    return(
        <>
        <div className="group-photos-body">
            <ul className="groupNav">
                <h2>Group Pool</h2>
                {isMember && <Link  style={navStyle} to={`/Add/${groupId}`}><button id="P_btn">Add photo</button></Link>}
            </ul>
            <div className="grid">
            {groupPhotos.map(photo => (
                <ImageGrid
                id = {photo._id}
                url ={photo.photoUrl} 
                title ={photo.title} 
                ownerName = 'unknown'
                ownerId = {photo.ownerId} 
                numberOfFavs = {photo.Fav.length}
                privacy={photo.privacy} 
                numberOfComments ={photo.comments.length}
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