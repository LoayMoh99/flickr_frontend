import Header from './components/navbar/mainNav'
import Footer from './components/navbar/footer'
import Userinfo from './components/HeaderBar/userInfo'
import FollwingFollowers from './components/followingFollowers/followingFollowers'
import Photostream from "./components/photostream/Photostream"
import EditInfo from "./components/photostream/EditInfo"
import Slideshow from "./components/photostream/Slideshow"
import About from "./components/About/About"
import Blog from "./components/Blog/Blog"
import Jobs from "./components/Job/Jobs"
import App2 from "./App2"
import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {BrowserRouter as Router, Switch , Route} from "react-router-dom";
const endpoint = 'http://localhost:3001/'

function App() {

//   const [userInfo, setUserInfo] = useState([]);
//     useEffect(() => {
//         const fetchData = async () => {
//         const {data,status} = await axios.get( endpoint+'user',);
//         console.log(status);
//         if (status === 200){
//             setUserInfo(data[0]);
//         }
//     };
 
//     fetchData();
//   },[]);
// console.log(userInfo);

  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
      {/* <Userinfo
      num_following= {userInfo.num_following}
      num_followers= {userInfo.num_followers}
      num_views= {userInfo.num_views}
      date_joined= {userInfo.date_joined}
      country= {userInfo.country}
      num_public_photos= {userInfo.num_public_photos}
      avatar_url= {userInfo.avatar_url}
      background_url = {userInfo.background_url}
      username= {userInfo.username}
      firstName= {userInfo.firstName}
      lastName= {userInfo.lastName}
      /> */}
      <Route path="/" exact component={App2}/>
      <Route path="/About" component={About}/>
      <Route path="/Blog" component={Blog}/>
      <Route path="/Jobs" component={Jobs}/>
      </Switch>
      <Footer/> 
    </div>
    </Router>
  );
}

export default App;