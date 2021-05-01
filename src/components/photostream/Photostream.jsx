import React,{useState} from "react"
import ImageGrid from "./ImageGrid"
import NavBar from "./NavBar"
import Slideshow from "./Slideshow"


function Photostream(){
    const images =["https://picsum.photos/300/200?random=1","https://picsum.photos/500/200?random=1","https://picsum.photos/600/200?random=1","https://picsum.photos/200/400?random=1","https://picsum.photos/300/400?random=1","https://picsum.photos/400/400?random=1","https://picsum.photos/500/400?random=1","https://picsum.photos/600/400?random=1","https://picsum.photos/200/500?random=1","https://picsum.photos/300/500?random=1","https://picsum.photos/400/500?random=1","https://picsum.photos/500/500?random=1","https://picsum.photos/600/500?random=1","https://picsum.photos/200/300?random=2","https://picsum.photos/300/300?random=2","https://picsum.photos/400/300?random=2","https://picsum.photos/500/300?random=2","https://picsum.photos/600/300?random=2","https://picsum.photos/200/200?random=2","https://picsum.photos/300/200?random=2","https://picsum.photos/400/200?random=2","https://picsum.photos/500/200?random=2","https://picsum.photos/600/200?random=2","https://picsum.photos/200/400?random=2","https://picsum.photos/300/400?random=2","https://picsum.photos/400/400?random=2","https://picsum.photos/500/300?random=3","https://picsum.photos/600/300?random=3","https://picsum.photos/200/200?random=3","https://picsum.photos/300/200?random=3","https://picsum.photos/400/200?random=3","https://picsum.photos/500/200?random=3"]

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
        {images.map(image => (
            <ImageGrid
            url ={image}  
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