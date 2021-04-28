import React from "react"
import './ImageGrid.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faTv } from '@fortawesome/free-solid-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'

// import EditInfo from "./EditInfo"


function NavBar(){

    const pen = <FontAwesomeIcon icon={faPen} color="DarkGrey"/>
    const search = <FontAwesomeIcon icon={faSearch} color="DarkGrey"/>
    const tv =<FontAwesomeIcon icon={faTv} color="DarkGrey"/>
    const share =<FontAwesomeIcon icon={faShare} color="DarkGrey"/>


    return(
        <>
        <ul className="nav nav-tabs">
            <li className="nav-item dropdown" id="space">
                <a className="dropdown-toggle text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Public view<span className="caret"></span></a>
                <ul className="dropdown-menu">
                <li id="li"><a className="text-secondary"  href="#">Public view</a></li>
                <li id="li"><a className="text-secondary"  href="#">Friend view</a></li>
                <li id="li"><a className="text-secondary"  href="#">Family view</a></li>
                <li id="li"><a className="text-secondary"  href="#">Friend & Family view</a></li>
                <li id="li"><a className="text-secondary"  href="#">View all</a></li>
                </ul>
            </li>
            <li id="icon-space"><a href="#" title="Edit photo info">{pen}</a></li>
            <li id="icon-space"><a href="#" title="Search photostream">{search}</a></li>
            <li id="icon-space"><a href="#" title="Toggle slideshow">{tv}</a></li>
            <li id="icon-space"><a href="#" title="Share photostream">{share}</a></li>
        </ul>  
        </>
    );
}


export default NavBar;