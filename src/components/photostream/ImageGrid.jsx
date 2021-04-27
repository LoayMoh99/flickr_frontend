import React from "react"
import './ImageGrid.css'

function ImageGrid(props){

    // const images =["https://picsum.photos/300/200?random=1","https://picsum.photos/500/200?random=1","https://picsum.photos/600/200?random=1","https://picsum.photos/200/400?random=1","https://picsum.photos/300/400?random=1","https://picsum.photos/400/400?random=1","https://picsum.photos/500/400?random=1","https://picsum.photos/600/400?random=1","https://picsum.photos/200/500?random=1","https://picsum.photos/300/500?random=1","https://picsum.photos/400/500?random=1","https://picsum.photos/500/500?random=1","https://picsum.photos/600/500?random=1","https://picsum.photos/200/300?random=2","https://picsum.photos/300/300?random=2","https://picsum.photos/400/300?random=2","https://picsum.photos/500/300?random=2","https://picsum.photos/600/300?random=2","https://picsum.photos/200/200?random=2","https://picsum.photos/300/200?random=2","https://picsum.photos/400/200?random=2","https://picsum.photos/500/200?random=2","https://picsum.photos/600/200?random=2","https://picsum.photos/200/400?random=2","https://picsum.photos/300/400?random=2","https://picsum.photos/400/400?random=2","https://picsum.photos/500/300?random=3","https://picsum.photos/600/300?random=3","https://picsum.photos/200/200?random=3","https://picsum.photos/300/200?random=3","https://picsum.photos/400/200?random=3","https://picsum.photos/500/200?random=3"]

    function setItemRatio() {
        this.parentNode.style.setProperty('--ratio', this.naturalHeight / this.naturalWidth);
    }

    function waitForLoad(){
        this.addEventListener('load', setItemRatio)
    }

    return(
        <>
            
            <div className="item ">
            <img 
            src={props.url} 
            onLoad={event => (
                event.currentTarget.naturalHeight? setItemRatio.call(event.currentTarget) : waitForLoad.call(event.currentTarget) 
            )}
            />
            {/* <div className="overlay">My Name is John</div> */}
            </div>
        </>

    )
}

export default ImageGrid;