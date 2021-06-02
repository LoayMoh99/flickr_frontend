import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './Follow.css'
const endpoint = 'http://localhost:3001/'
function Follow(props) {
    const {id,followed}=props
    const [isFollowing, setToggleFollow] = useState(followed);
     const userFollow={
        "peopleid": id
      };
      //////////////////////////////toggle function to handle pressing on follow or unfollow action/////////////////////////
     async function toggleFollow(){
        // if(isFollowing===false){
        //    const { status } = await axios.post('/user/follow',userFollow);
        // if(status=== 200){
               console.log("presseddddd")
        setToggleFollow(!isFollowing);
    //        }
    //        else{
    //            alert("UnAuthorized request or User not found");
    //        }
    //     }
    //     else{
    //        const { status } = await axios.delete('/user/unfollow/'+id);
    //          if(status=== 200){
               
    //            setToggleFollow(!isFollowing);
    //               }
    //               else{
    //                   alert("UnAuthorized request or User not found");
    //               }
    //     }

        
     }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        // <div>
        <div className="Handle">
            {!isFollowing && <button className="buttonFollowed" onClick={toggleFollow}><FontAwesomeIcon icon={faPlus} color="DarkGrey" /> Follow</button>}
            {isFollowing &&  <button className="buttonFollowing" onClick={toggleFollow}><FontAwesomeIcon icon={faCheck} color="DarkGrey" /> Following</button>}
        </div>
        // </div>
    )
}

export default Follow
