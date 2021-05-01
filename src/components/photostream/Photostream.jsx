import React,{useState} from "react"
import ImageGrid from "./ImageGrid"
import NavBar from "./NavBar"
import Slideshow from "./Slideshow"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faComment} from '@fortawesome/free-solid-svg-icons'


function Photostream(){
    // const images =["https://picsum.photos/300/200?random=1","https://picsum.photos/500/200?random=1","https://picsum.photos/600/200?random=1","https://picsum.photos/200/400?random=1","https://picsum.photos/300/400?random=1","https://picsum.photos/400/400?random=1","https://picsum.photos/500/400?random=1","https://picsum.photos/600/400?random=1","https://picsum.photos/200/500?random=1","https://picsum.photos/300/500?random=1","https://picsum.photos/400/500?random=1","https://picsum.photos/500/500?random=1","https://picsum.photos/600/500?random=1","https://picsum.photos/200/300?random=2","https://picsum.photos/300/300?random=2","https://picsum.photos/400/300?random=2","https://picsum.photos/500/300?random=2","https://picsum.photos/600/300?random=2","https://picsum.photos/200/200?random=2","https://picsum.photos/300/200?random=2","https://picsum.photos/400/200?random=2","https://picsum.photos/500/200?random=2","https://picsum.photos/600/200?random=2","https://picsum.photos/200/400?random=2","https://picsum.photos/300/400?random=2","https://picsum.photos/400/400?random=2","https://picsum.photos/500/300?random=3","https://picsum.photos/600/300?random=3","https://picsum.photos/200/200?random=3","https://picsum.photos/300/200?random=3","https://picsum.photos/400/200?random=3","https://picsum.photos/500/200?random=3"];
   
    const photos=[{photoId:0, photoUrl:"https://picsum.photos/500/300?random=1",ownerId:5,numFavs:6,numViews:8,onwerName:"Samar",title:"First Photo Title",description:"First Photo Description",numComments:7},{photoId:1, photoUrl:"https://picsum.photos/700/600?random=2",ownerId:6,numFavs:7,numViews:10,onwerName:"Samar2",title:"Second Photo Title",description:"Second Photo Description",numComments:20},{photoId:2, photoUrl:"https://picsum.photos/600/300?random=1",ownerId:6,numFavs:60,numViews:100,onwerName:"Samar3",title:"Third Photo Title",description:"Third Photo Description",numComments:70},{photoId:3, photoUrl:"https://picsum.photos/600/200?random=1",ownerId:8,numFavs:67,numViews:80,onwerName:"Samar4",title:"Fourth Photo Title",description:"Fourth Photo Description",numComments:9},{photoId:4, photoUrl:"https://picsum.photos/600/300?random=2",ownerId:56,numFavs:6,numViews:8,onwerName:"Samar4",title:"Fifth Photo Title",description:"Fifth Photo Description",numComments:7},{photoId:6, photoUrl:"https://picsum.photos/200/200?random=2",ownerId:5,numFavs:80,numViews:1000,onwerName:"Samar",title:"Seventh Photo Title",description:" Seventh Description",numComments:77},{photoId:0, photoUrl:"https://picsum.photos/300/400?random=2",ownerId:5,numFavs:6,numViews:8,onwerName:"Samar",title:"First Photo Title",description:"First Photo Description",numComments:7},{photoId:0, photoUrl:"https://picsum.photos/400/400?random=2",ownerId:5,numFavs:6,numViews:8,onwerName:"Samar",title:"First Photo Title",description:"First Photo Description",numComments:7},{photoId:0, photoUrl:"https://picsum.photos/500/300?random=3",ownerId:5,numFavs:6,numViews:8,onwerName:"Samar",title:"First Photo Title",description:"First Photo Description",numComments:7},{photoId:0, photoUrl:"https://picsum.photos/600/300?random=3",ownerId:5,numFavs:6,numViews:8,onwerName:"Samar78",title:"First Photo Title",description:"First Photo Description",numComments:7},{photoId:0, photoUrl:"https://picsum.photos/200/200?random=3",ownerId:5,numFavs:6,numViews:8,onwerName:"Samar",title:"First Photo Title",description:"First Photo Description",numComments:7},{photoId:0, photoUrl:"https://picsum.photos/200/200?random=5",ownerId:5,numFavs:6,numViews:8,onwerName:"Samar",title:"First Photo Title",description:"First Photo Description",numComments:7},{photoId:0, photoUrl:"https://picsum.photos/300/200?random=3",ownerId:5,numFavs:6,numViews:8,onwerName:"Samar",title:"First Photo Title",description:"First Photo Description",numComments:7},{photoId:0, photoUrl:"https://picsum.photos/500/200?random=3",ownerId:5,numFavs:6,numViews:8,onwerName:"Samar",title:"First Photo Title",description:"First Photo Description",numComments:7},{photoId:0, photoUrl:"https://picsum.photos/600/200?random=2",ownerId:5,numFavs:6,numViews:8,onwerName:"Samar",title:"First Photo Title",description:"First Photo Description",numComments:7},{photoId:0, photoUrl:"https://picsum.photos/200/200?random=1",ownerId:5,numFavs:6,numViews:8,onwerName:"Samar",title:"First Photo Title",description:"First Photo Description",numComments:7},{photoId:0, photoUrl:"https://picsum.photos/500/600?random=2",ownerId:5,numFavs:6,numViews:8,onwerName:"Samar",title:"First Photo Title",description:"First Photo Description",numComments:7},{photoId:0, photoUrl:"https://picsum.photos/400/300?random=3",ownerId:5,numFavs:6,numViews:8,onwerName:"Samar",title:"First Photo Title",description:"First Photo Description",numComments:7},{photoId:0, photoUrl:"https://picsum.photos/400/600?random=3",ownerId:5,numFavs:6,numViews:8,onwerName:"Samar",title:"First Photo Title",description:"First Photo Description",numComments:7},{photoId:0, photoUrl:"https://picsum.photos/700/600?random=3",ownerId:5,numFavs:6,numViews:8,onwerName:"Samar",title:"First Photo Title",description:"First Photo Description",numComments:7},{photoId:0, photoUrl:"https://picsum.photos/800/500?random=2",ownerId:5,numFavs:6,numViews:8,onwerName:"Samar",title:"First Photo Title",description:"First Photo Description",numComments:7},{photoId:0, photoUrl:"https://picsum.photos/500/200?random=4",ownerId:5,numFavs:6,numViews:8,onwerName:"Samar",title:"First Photo Title",description:"First Photo Description",numComments:7}]
    const [isModalOpen, setModalIsOpen] = useState(false);
    // const [isFull,setFull] = useState(false);

    function toggleModal(){
        setModalIsOpen(!isModalOpen);
        console.log("l modal fata7")

    }

    return (
        <>
        <NavBar 
            onSlideshow={toggleModal}
        />

        <div className="grid">
        {photos.map(photo => (
            <ImageGrid
            url ={photo.photoUrl} 
            title ={photo.title} 
            owner = {photo.onwerName}
            numberOfFavs = {photo.numFavs}
            numberOfComments ={photo.numComments}
            />
        ))}
        <div className="placeholder"></div>
        </div>

        <main>
        {isModalOpen && <Slideshow onRequestClose={toggleModal} />}
        </main>
        </>
   ) 
}

export default Photostream;