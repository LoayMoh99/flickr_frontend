import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './PeopleCard.css'
import { render } from '@testing-library/react';
const endpoint = 'http://localhost:3001/'
const staticAvatar= 'https://combo.staticflickr.com/pw/images/buddyicon00_m.png#22501572@N05'

function PeopleCard(props) {
    const {id, url, Lname,Fname,subtitle,followers, noofimages,date,followed } = props;
     //const [data, setData] = useState({});
    //  const [isFollowing, setToggleFollow] = useState(followed);
    //  const userFollow={
    //     "peopleid": id
    //   };
// //////////////////////////////toggle function to handle pressing on follow or unfollow action/////////////////////////
//      async function toggleFollow(){
//          if(isFollowing===false){
//             const { status } = await axios.post('/user/follow',userFollow);
//          if(status=== 200){
                
//          setToggleFollow(!isFollowing);
//             }
//             else{
//                 alert("UnAuthorized request or User not found");
//             }
//          }
//          else{
//             const { status } = await axios.delete('/user/unfollow/'+id);
//               if(status=== 200){
                
//                 setToggleFollow(!isFollowing);
//                    }
//                    else{
//                        alert("UnAuthorized request or User not found");
//                    }
//          }

         
//      }
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // onClick={getProfile}
    return (
        <div className="cardPeople"  >
            <div className="peopleAvatar">
                <img src={url} alt={Fname}></img>
            </div>
            <div className="peopleInfo">
                <div className="titleAndfollow">
                    <div>
                        <h6>{Fname} {Lname}</h6>
                        <span>{subtitle}</span>
                    </div>
                    {/* <div>
                        
                    {!isFollowing && <button className="buttonFollowed" onClick={toggleFollow}><FontAwesomeIcon icon={faPlus} color="DarkGrey" /> Follow</button>}
                    {isFollowing &&  <button className="buttonFollowing" onClick={toggleFollow}><FontAwesomeIcon icon={faCheck} color="DarkGrey" /> Following</button>}
                    </div> */}
                </div>
                <div className="cardLinks">
                    <span>
                    <a href="#">
                    <FontAwesomeIcon icon={faImage} color="DarkGrey" />
                    {noofimages}
                    </a>
                    </span>
                    <span>
                    <a href="#">
                    <FontAwesomeIcon icon={faUsers} color="DarkGrey" />
                    {followers}
                    </a>
                    </span>
                    <span className="last">joined at {date}</span>
                </div>
            </div>
        </div>
    )
}
export default PeopleCard
