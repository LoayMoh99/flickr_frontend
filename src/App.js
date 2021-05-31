import Header from './components/navbar/mainNav'
import Footer from './components/navbar/footer'
import Userinfo from './components/HeaderBar/userInfo'
import FollwingFollowers from './components/followingFollowers/followingFollowers'
import EditInfo from "./components/photostream/EditInfo"
import TotExplore from "./components/Explore/TotExplore"
import CameraRoll from "./components/CameraRoll/CamreRoll"
import About from "./components/About/About"
import Blog from "./components/Blog/Blog"
import Jobs from "./components/Job/Jobs"
import Signup from "./components/signup/signup"
import Login from "./components/UserLogin/Login"
import React from 'react';
import {BrowserRouter as Router, Switch , Route} from "react-router-dom";

function App() {

  const navStyle={
    color:'white'
  };

  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/user" component={Userinfo}/>
      <Route path="/About" component={About}/>
      <Route path="/Blog" component={Blog}/>
      <Route path="/Jobs" component={Jobs}/>
      <Route path="/EditInfo" component={EditInfo}/>
      <Route path="/CameraRoll" component={CameraRoll}/>
      <Route path="/FollwingFollowers" component={FollwingFollowers}/>
      <Route path="/Explore" component={TotExplore}/>
      </Switch>
      <Footer/> 
    </div>
    </Router>
    // <div className="App">
    //   <Signup/>
    // </div>


  );
}

export default App;