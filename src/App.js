import Header from './components/navbar/mainNav'

/*import Photostream from "./components/photostream/Photostream"
import EditInfo from "./components/photostream/EditInfo"
import Slideshow from "./components/photostream/Slideshow"*/
import React from 'react';
import Explorenav from './components/Explore/Explorenav'
import Explore_nav from './components/Explore/Exploresub-nav'
import "./pictures"
import catchRainbows from './pictures';
function App() {
  
  return (
    <div className="App">
      <Header/>
      <Explorenav/>
      <Explore_nav/>
      <catchRainbows/>
    </div>
  );
}

export default App;
