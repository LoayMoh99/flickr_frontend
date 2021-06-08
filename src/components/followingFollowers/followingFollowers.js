import React,{useState,useEffect} from 'react';
import './followingFollowers.css';
import defaultProfile from '../../img/deefault.jpg';
import Header from '../navbar/mainNav';
import Footer from '../navbar/footer'
import {GetUserFollowing} from "../../services/userServices"
import {GetPeopleFollowing} from "../../services/peopleServices"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from "axios"
import {Link} from "react-router-dom";
import { GetPhotoById } from '../../services/photoServices';

/** Renders Following component to get user following
 * @author Farah Mostafa
 * @namespace FollwingFollowers
 * @category Functional Component
 * @extends Component
 * @property {String} props -User id
 * @property {String} props -isUser
 */

export default function FollwingFollowers(props){
        const [allfollowing, setFollowing] = useState([]);
        var {isUser,id}=useParams();
        if(isUser=='true')
        isUser=true;
        else
        isUser=false;
        const [isUndefinedfollowers, setisUndefinedfollowers] = useState(true);
        const [isUndefinedfollowing, setisUndefinedfollowing] = useState(true);
        useEffect(() => {
            if(isUser!=undefined&& isUser===true){
                var r;
                /** Gets array of the information of the people in the following
                * @memberof FollwingFollowers
                * @method GetUserFollowing
                * @returns respone of Get user following
                * @example
                * [
                    {
                        "Fname": "string",
                        "UserName": "string",
                        "Lname": "string",
                        "Email": "user@example.com",
                        "_id": 0,
                        "Photo": 0,
                        "avatar": "https://upload.wikimedia.org/wikipedia/en/c/c4/Mickey_Mouse_%28fair_use%29.png"
                    }
                    ]
                */
                GetUserFollowing().then( response => {
                    if(response!=undefined){
                        setisUndefinedfollowers(false);
                        setFollowing(response.data.FollowingList);
                    }
                    else{
                        setisUndefinedfollowers(true);
                    }
                })
            }
            else if(isUser!=undefined&&isUser==false){
                /** Gets array of the information of the people in the following
                * @memberof FollwingFollowers
                * @method GetPeopleFollowing
                * @returns respone of Get people following
                * @example
                * [
                    {
                        "Fname": "string",
                        "UserName": "string",
                        "Lname": "string",
                        "Email": "user@example.com",
                        "_id": 0,
                        "Photo": 0,
                        "avatar": "https://upload.wikimedia.org/wikipedia/en/c/c4/Mickey_Mouse_%28fair_use%29.png"
                    }
                    ]
                */
                GetPeopleFollowing(id).then( response => {
                    if(response!=undefined){
                        
                        setisUndefinedfollowing(false);
                        let Data=response.data;
                        get_avatar_url(Data);
                        
                    }
                    else{
                        setisUndefinedfollowing(true);
                    }
                })
            }
        },[]);
    const navStyle={
        color:'black'
        };

    /** get the the people Following Avatars
    * @memberof FollwingFollowers
    * @method get_avatar_url
    * @param {array} data -array of following people
    */

async function get_avatar_url(data){
 //   Data=new Array(Object());
    for(var i=0;i<data.length;i++){
       await GetPhotoById(data[i].Avatar).then(avatar=>{

            data[i].Avatar=avatar.data.photoUrl;
            
        })
        .catch(err=>{console.log(err)});
        

    }
    setFollowing(data);
  //  return data;

}
    return(
        <div>
            <Header isLogged={true}/>
            <div className="flwAndFlowing">
            <div className="picAndSelect">
                <div className="imgg"></div>
                <div className="listAndTitle">
                    <h3>People you follow</h3>
                    <ul className="NavbarAndheaderul">
                        <li><a>photos from</a></li>
                        <li><a>photos of</a></li>
                        <li><a>list</a></li>
                    </ul>
                </div>
            </div>
            <div className="searchFeatures">
                <span>show :</span>
                <select id="sortForm" className="form-select" aria-label="Default select example">
                <option defaultValue>everyone</option>
                <option value="1">Following</option>
                <option value="2">Freinds</option>
                <option value="3">Family</option>
                <option value="4">Freinds and Family</option>
                </select>
                <p>or</p>
                <span>Search :</span>
                <input id="searchForm" className="form-control form-control-sml" type="text" placeholder="screen name,real name or email" aria-label=".form-control-sm example"></input>
                <p>or</p>
                <Link style={navStyle} to="/Followers"><a>who is following you?</a></Link>
            </div>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">public Photos</th>
                <th scope="col">User name</th>
                <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
            {(!isUndefinedfollowers ||!isUndefinedfollowing)&& allfollowing.map(user => (
                <tr>
                <th scope="row"><img src={user.Avatar}></img> {user.Fname} {user.Lname}</th>
                <td>{user.Photos}</td>
                {/* <td>200</td> */}
                <td>{user.UserName}</td>
                <td>{user.Email}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
        <Footer/>
        </div>
    )
}