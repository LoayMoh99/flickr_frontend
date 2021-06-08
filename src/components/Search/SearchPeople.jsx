import React,{useState,useEffect} from 'react'
import axios from 'axios'
import PeopleCard  from './PeopleCard'
import Follow from './Follow'
import './SearchPeople.css'
import Header from "../navbar/mainNav"
import { useParams } from 'react-router'
import {Link} from "react-router-dom";
import {GetPeopleBySearch} from "../../services/peopleServices"
const endPointt = '/people/search/'
/** Renders People Card component to show group in search
 * @author Roaa Magdy
 * @namespace SearchPeople
 * @category Functional Component
 * @extends Component
 * @property {String} text -Word used in search bar (used in get requests to retrieve people accounts)
 */
function SearchPeople() {
   const {text}= useParams();
    const textt='people';
    let error=false;
    const navStyle={
      color:'white'
  };
    const [people, setPeople] = useState([]);
////////////////////Fetching data using Search text//////////////////////////////////////////////
  useEffect(() => {
              /** Get request for people
                * @memberof SearchPeople
                * @method GetPeopleBySearch
                * @returns respone of people data 
                * @example 
                * [
                      {
                        "_id": 0,
                        "avatarUrl": "https://combo.staticflickr.com/pw/images/buddyicon00_m.png#22501572@N05",
                        "Fname": "Samar",
                        "Lname": "Nabil",
                        "UserName": "samar_nabil",
                        "numberOfFollowers": 3.3,
                        "numberOfPublicPhotos": 129,
                        "Date_joined": "april 2015",
                        "isFollowed": true
                      },
                      {
                        "_id": 1,
                        "avatarUrl": "https://combo.staticflickr.com/pw/images/buddyicon00_m.png#22501572@N05",
                        "Fname": "Samar",
                        "Lname": "Nabil",
                        "UserName": "samar_nabil",
                        "numberOfFollowers": 3.3,
                        "numberOfPublicPhotos": 129,
                        "Date_joined": "april 2015",
                        "isFollowed": true
                      },
                      {
                        "_id": 2,
                        "avatarUrl": "https://combo.staticflickr.com/pw/images/buddyicon00_m.png#22501572@N05",
                        "Fname": "Samar",
                        "Lname": "Nabil",
                        "UserName": "samar_nabil",
                        "numberOfFollowers": 3.3,
                        "numberOfPublicPhotos": 129,
                        "Date_joined": "april 2015",
                        "isFollowed": true
                      },
                      {
                        "_id": 3,
                        "avatarUrl": "https://combo.staticflickr.com/pw/images/buddyicon00_m.png#22501572@N05",
                        "Fname": "Samar",
                        "Lname": "Nabil",
                        "UserName": "samar_nabil",
                        "numberOfFollowers": 3.3,
                        "numberOfPublicPhotos": 129,
                        "Date_joined": "april 2015",
                        "isFollowed": true
                      },
                      {
                        "_id": 4,
                        "avatarUrl": "https://combo.staticflickr.com/pw/images/buddyicon00_m.png#22501572@N05",
                        "Fname": "Samar",
                        "Lname": "Nabil",
                        "UserName": "samar_nabil",
                        "numberOfFollowers": 3.3,
                        "numberOfPublicPhotos": 129,
                        "Date_joined": "april 2015",
                        "isFollowed": true
                      } 
                ]
                */
      GetPeopleBySearch(text).then( response => {
        console.log(response.data);
        setPeople(response.data);
      })
  },[]);
////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <div className="SearchPeople">
          <Header isLogged={true}/>
          <div className="SearchPeople-cont">
          <h4>Flickr members</h4>
         {!error && (people.map((people) => (
///////////////////////////////////////linking here to handle pressing on the card to go to user account/////////////////////
           <div className="FollowingButton"> 
           <Link style={navStyle}  to={`/UserInfo/${people._id}`}>
              <PeopleCard
              key={people._id} 
              id={people._id}
              url={people.avatarUrl} 
              Lname={people.Lname}
              Fname={people.Fname}
              subtitle={people.UserName}
              followers={people.numberOfFollowers} 
              noofimages={people.numberOfPublicPhotos}
              date={people.Date_joined} 
              followed={people.isFollowed}
              />
              </Link>
              <Follow
              key={people._id} 
              id={people._id}
              followed={people.isFollowed}
              />
              </div>
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            )))}
            {error && (<div>Error Loading</div>)}
         </div>
        </div>
    )
}

export default SearchPeople 
