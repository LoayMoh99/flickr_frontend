import React from "react"
import Card from "./Card"
import './EditInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function EditInfo(){

    const back = <FontAwesomeIcon icon={faArrowLeft} color="DarkGrey"/>

    return(
        <>
        <ul id="nav-list">
            <li id="nav-item"><a href="#" id="a">{back } Back to photostream</a></li>
           <li id="right "><p id="a">Edit in <a id="a2" href="#" >Camera Roll</a></p> </li>
        </ul>

        {/* cards */}
        <div className="card-grid">
            <Card />
            <Card />

        </div>
        
        </>
    )

}

export default EditInfo;