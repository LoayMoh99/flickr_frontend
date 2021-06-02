import Header from './components/navbar/mainNav'
import Footer from './components/navbar/footer'
import Userinfo from './components/HeaderBar/userInfo'
import Upload from './components/upload/Upload'
import FollwingFollowers from './components/followingFollowers/followingFollowers'
import Followers from './components/followingFollowers/Followers'
import ImageDetails from "./components/imageDetails/imageDetails"
import Photostream from "./components/photostream/Photostream"
import EditInfo from "./components/photostream/EditInfo"
import TotExplore from "./components/Explore/TotExplore"
import CameraRoll from "./components/CameraRoll/CamreRoll"
import GroupHeader from "./components/groupHeader/GroupHeader"
import Jobs from "./components/Job/Jobs"
import Signup from "./components/Signup/signup"
import Login from "./components/UserLogin/Login"
import AddPhotos from "./components/GroupPhotos/AddPhotos"
import React from 'react';
import AlbumPage from './components/Album/AlbumPage'
 import About from "./components/About/About"
 import Blog from "./components/Blog/Blog"
import  SearchPeople from "./components/Search/SearchPeople"
import SearchGroup from "./components/Search/SearchGroup"
 import {BrowserRouter as Router, Switch , Route} from "react-router-dom";
import GroupCard from './components/Search/GroupCard'

function App() {

  const navStyle={
    color:'white'
  };

  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/sign-up" component={Signup}/>
      <Route path="/user" component={Userinfo}/>
      <Route path="/UserInfo/:id"  component={Userinfo}/>
      <Route path="/GroupInfo/:groupid" component={GroupCard} />
      <Route path="/Group/:group_id/photos" component={GroupCard}/>
      <Route path="/Group/:group_id/members" component={GroupCard}/>
      <Route path="/About" component={About}/>
      <Route path="/Blog" component={Blog}/>
      <Route path="/Jobs" component={Jobs}/>
      <Route path="/EditInfo" component={EditInfo}/>
      <Route path="/CameraRoll" component={CameraRoll}/>
      <Route path="/FollwingFollowers/:isUser/:id" component={FollwingFollowers}/>
      <Route path="/FollwingFollowers" component={FollwingFollowers}/>
      <Route path="/Followers" component={Followers}/>
      <Route path="/Explore" component={TotExplore}/>
      <Route path="/Add/:groupId" component={AddPhotos}/>
      <Route path="/upload" component={Upload}/>
      <Route path="/imagedetails/:id/:userId" component={ImageDetails}/>
      <Route path="/AlbumPage/:idToOpen/:isUser" component={AlbumPage}/>
      <Route path="/searchPeople/:text" component={SearchPeople}/>
      <Route path="/searchGroup/:text" component={SearchGroup}/>
      </Switch>
    </div>
      {/* <Switch>
      <Route path="/" exact component={SearchGroup}/>
      <Route path="/UserInfo/:id"  component={About}/>
      //searchPeople
      <Route path="/Group/:id/members"  component={About}/>
      <Route path="/Group/:id/photos"  component={Blog}/>
      </Switch> */}
    </Router>
    


  );
}

export default App;