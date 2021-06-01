import React, { useState ,useEffect} from "react"
import ShowFavs from "./ShowFavs"
import './Commentstyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment} from '@fortawesome/free-solid-svg-icons'
import {GetComments,PostComments} from "../../services/photoServices"
import GetPeopleFavs from "../../services/peopleServices"
//import {GetExploreFavs} from "../../services/Exploreserv"
function Comments(props){
    const [photos2 , setComments ] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [placeholderText , setText] = useState("Add a comment about this photo");

    //get request
    useEffect( () =>{
        GetPeopleFavs().then( response => {
            setComments(response.data);
            console.log(props.comments);
        })
    },[photos2])

    function handleComment(event){
        const toComment = event.target.value;
        setNewComment(toComment);
    }

    // function postComment(){
    //     setText("Add a comment about this photo");
    //     console.log(props.photo_id)
       
    //     const object ={
    //         comment: newComment,
    //         user: "60b222e537838723b02201fd",
    //         createdAt: "2021-05-29T11:17:57.326Z",
    //         updatedAt: "2021-05-29T11:17:57.326Z"
    //     }
    //     //API
    //     PostExploreComments(props.photo_id,object).then( response => {
    //         console.log(response);
          
    //     });
    //     document.getElementById('com').value = '';
        
    // }

    return(
        <>
            <div className="fav-box">
                <div className="favs">
                {photos2.map(photos2 => photos2.Fav.map(photo => (
                    <ShowFavs
                        Fname = {photo.UserName}
                        Pic={photo.Avatar}
                        //Lname = {comment.user.Lname}
                        // body = {comment.comment[0].comment}
                        
                    />
                )))}
                </div>
            
            </div>
        </>
    )

}

export default Comments;