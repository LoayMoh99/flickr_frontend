import Header from './components/navbar/mainNav'
import Footer from './components/navbar/footer'
import Userinfo from './components/HeaderBar/userInfo'
import FollwingFollowers from './components/followingFollowers/followingFollowers'
import Photostream from "./components/photostream/Photostream"
import EditInfo from "./components/photostream/EditInfo"
import Slideshow from "./components/photostream/Slideshow"
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header/>
      <Userinfo
      num_following= "0"
      num_followers= "0"
      num_views= "0"
      date_joined= "2021"
      country= "string"
      num_public_photos=" 0"
      avatar_id= "0"
      username= "farahmostafa459"
      firstName= "Farah"
      lastName= "Mostafa"
      />
      <Footer/> 
    </div>
  );
}

export default App;