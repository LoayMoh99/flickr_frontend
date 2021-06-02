import React,{useState,useEffect} from 'react'
import axios from 'axios'
import PeopleCard  from './PeopleCard'
import Follow from './Follow'
import './SearchPeople.css'
import Header from "../navbar/mainNav"
import { useParams } from 'react-router'
import {Link} from "react-router-dom";
const endPoint = 'http://localhost:3001/'
const endPointt = '/people/search/'
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
      const fetchData = async () => {
      const {data,status} = await axios.get( endPoint+textt,);
      console.log(status);
      if (status === 200){
        setPeople(data);
      }
      else{
        setPeople(data);
          error=true; //////////error fetching data
      }
  };
  
    fetchData();
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
