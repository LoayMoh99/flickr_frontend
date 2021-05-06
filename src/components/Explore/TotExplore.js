import Header from '../navbar/mainNav'

/*import Photostream from "./components/photostream/Photostream"
import EditInfo from "./components/photostream/EditInfo"
import Slideshow from "./components/photostream/Slideshow"*/
import React from 'react';
import Explorenav from './Explorenav'
import Exploresub_nav from './Exploresub_nav'
import Pictures from "./Pictures"

function TotExplore() {
  const files = [
    "https://picsum.photos/300",
     "https://picsum.photos/300",
     "https://picsum.photos/250/150",
     "https://picsum.photos/250",
     "https://picsum.photos/250",
     "https://picsum.photos/250",
     "https://picsum.photos/250/150",
     "https://picsum.photos/250",
     "https://picsum.photos/250",
     "https://picsum.photos/250",
     "https://picsum.photos/250"
  ];
  Pictures(files)
  
  return (
    <div>
      
      <Explorenav/>
      <Exploresub_nav/>
      
    </div>
  );
  
}

export default TotExplore;
