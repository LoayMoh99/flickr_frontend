import Header from './components/navbar/mainNav'
import Footer from './components/navbar/footer'
import Userinfo from './components/HeaderBar/userInfo'
import Upload from './components/upload/Upload'
import FollwingFollowers from './components/followingFollowers/followingFollowers'
import Followers from './components/followingFollowers/Followers'
import ImageDetails from "./components/imageDetails/imageDetails"
import Photostream from "./components/photostream/Photostream"
import EditInfo from "./components/photostream/EditInfo"
import Slideshow from "./components/photostream/Slideshow"
import TotExplore from "./components/Explore/TotExplore"
import CameraRoll from "./components/CameraRoll/CamreRoll"
import About from "./components/About/About"
import Blog from "./components/Blog/Blog"
import GroupHeader from "./components/groupHeader/GroupHeader"
import Jobs from "./components/Job/Jobs"
import Signup from "./components/signup/signup"
import App2 from "./App2"
import dd from "./img/img/deefault.jpg"
import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {BrowserRouter as Router, Switch , Route} from "react-router-dom";
const endpoint = 'http://localhost:3001/'

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Header/> */}
      {/* <Switch>
      <Route path="/" exact component={App2}/>
      <Route path="/About" component={About}/>
      <Route path="/Blog" component={Blog}/>
      <Route path="/Jobs" component={Jobs}/>
      <Route path="/EditInfo" component={EditInfo}/>
      <Route path="/CameraRoll" component={CameraRoll}/>
      <Route path="/FollwingFollowers" component={FollwingFollowers}/>
      <Route path="/Followers" component={Followers}/>
      <Route path="/Explore" component={TotExplore}/>
      <Route path="/upload" component={Upload}/>
      <Route path="/imagedetails/:id" component={ImageDetails}/>
      </Switch> */}
      {/* <ImageDetails
      image_url= {dd}
      /> */}
      <GroupHeader groupId="608c80ce54e3d74b34d9bb5a"/>
      {/* <Footer/>  */}
    </div>
    </Router>
    // <div className="App">
    //   <Signup/>
    // </div>
  );
}

export default App;