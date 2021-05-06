import React,{useState,useEffect} from "react"
import axios from "axios"
import ImageGrid from "./Explore_grid"
const endpoint = 'http://localhost:3001/'
const filenames = [
  
];


 

export default function Pictures() {
  //  for (let filename of filenames) {
  //    const response = await fetch(filename);
  //    const blob = await response.blob();
  //    const img = document.createElement('img');
  //    img.src = URL.createObjectURL(blob);
  //    img.height=250;
  //    img.style="padding:0 5px 5px 0";
  
  //    document.getElementById("under").append(img);
  //  }
      //Get photos
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
      
    const [isModalOpen, setModalIsOpen] = useState(false);
    // const [isFull,setFull] = useState(false);

    function toggleModal(){
        setModalIsOpen(!isModalOpen);
        console.log("l modal fata7")

    }

    return (
      <>
      <div className="Explore-body">
      

      <div className="grid">
      {photos.map(photo => (
          <ImageGrid
          id = {photo.photo_id}
          url ={photo.photo_url} 
          title ={photo.title} 
          description = {photo.description}
          date = {photo.createdAt}
          privacy = {photo.privacy}
          ownerName = {photo.photo_owner_name}
          ownerId = {photo.photo_owner_id}
          numberOfFavs = {photo.num_favs}
          numberOfComments ={photo.num_comments}
          numberOfViews={photo.num_views}
          />
      ))}
      <div className="placeholder"></div>
      </div>

      </div>
      </>
 ) 
 }
