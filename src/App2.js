import Userinfo from './components/HeaderBar/userInfo'
import React,{useState,useEffect} from 'react';
import axios from 'axios'
const endpoint = 'http://localhost:3001/'
//import React from 'react'

function App2() {
    const [userInfo, setUserInfo] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const {data,status} = await axios.get( endpoint+'user',);
        console.log(status);
        if (status === 200){
            setUserInfo(data[0]);
        }
    };
 
    fetchData();
  },[]);
console.log(userInfo);

    return (
        <div>
        <Userinfo
          num_following= {userInfo.Following}
          num_followers= {userInfo.Followers}
          num_views= {userInfo.views}
          date_joined= {userInfo.Date_joined}
          num_public_photos= {userInfo.Photo}
          avatar_url= {userInfo.Avatar}
          background_url = {userInfo.BackGround}
          username= {userInfo.UserName}
          firstName= {userInfo.Fname}
          lastName= {userInfo.Lname}
        />
      </div>
    )
}

export default App2
