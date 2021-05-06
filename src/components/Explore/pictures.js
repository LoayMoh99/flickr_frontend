import React from "react";

const filenames = [
  
];


 

export default async function Pictures(filenames) {
   for (let filename of filenames) {
     const response = await fetch(filename);
     const blob = await response.blob();
     const img = document.createElement('img');
     img.src = URL.createObjectURL(blob);
     img.height=250;
     img.style="padding:0 5px 5px 0";
  
     document.getElementById("under").append(img);
   }
 }
