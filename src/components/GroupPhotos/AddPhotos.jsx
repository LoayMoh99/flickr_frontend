import React,{useState,useEffect} from 'react'
import './AddPhotos.css'
import PhotosToAdd from "./PhotosToAdd"
import axios from "axios"
import { Link } from 'react-router-dom'
const endpoint = 'http://localhost:3001/'

function AddPhotos(){

    //Get user photos
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const {data,status} = await axios.get( endpoint+'photos',);
        console.log(status);
        if (status === 200){
            setPhotos(data);
        }
    };
    
    fetchData();
    },[]);

    const navStyle={
        color:'white'
    };

    const [UrltoAdd ,setUrl] = useState([])
    const [idToAdd ,setId] = useState([])

    function addPhoto(id,url){
        setId(idToAdd => [...idToAdd,id]);
        setUrl(UrltoAdd => [...UrltoAdd,url]);
    }  

    function removePhoto(id,url){
        console.log('id=',id);
        setId(prevItem => {
            return prevItem.filter(
                (item,index) =>{
                    return item !== id;
                }
            )
        });

        setUrl(prevItem => {
            return prevItem.filter(
                (item,index) =>{
                    return item !== url;
                }
            )
        });
    }

    function addToPool(){
        //Api

        //link to group pool
        // <Link style={navStyle} to="/"></Link>
    }

    function errorMessage(){
        alert('Darn! Flickr is only able to add 6 photos at a time to a group. After you add these, why not come back and add some more?')
    }

    const size = photos.length;
    const sizeToDelete = idToAdd.length;


    return(
        <>
        <div className="AddPhotos-body">
            <h1>Add photos</h1>
            <h3>Select items to add to group</h3>
            <div className="add-table">
                <div className="col1">
                    <div className="first">
                        <h4>Your Photostream <p>({size} items)</p></h4>
                    </div>
                    <div className="second">
                        <div className="img-grid">
                        {photos.map(photo => (
                            <PhotosToAdd 
                                url = {photo.photo_url}
                                id = {photo.photo_id}
                                onAdd = {addPhoto}
                                onRemove ={removePhoto}
                                onError = {errorMessage}
                                size = {sizeToDelete}
                            />
                        ))}
                        </div>
                    </div>
                </div>
                <div className="col2">
                    <div className="first">
                    <h4>Your Selections</h4>
                    <p>you can add: 6 at a time</p>
                    </div>
                    <div className="second">
                        <div className="add-grid" >
                        {UrltoAdd.map(url => (
                            <img src={url}/>
                        ))}
                        </div>
                    </div>
                    <div className="third">
                    {sizeToDelete === 0?
                        <button disabled={true}>ADD TO GROUP</button>
                        :
                        <button onClick={addPhoto}>ADD TO GROUP</button>
                    }
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default AddPhotos;