import React from "react";

const filenames = [
  "https://picsum.photos/250",
   "https://picsum.photos/250",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7nGNo53bQy-5nILoOQs-q0r1Q8B-cZMJBzw&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5_F22vp79mC-rPMiB24gBmLsJVzVsErsTw&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJttRSMiU-xD0EukVIs_LN6L8LHdn-e3xteA&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa5D552DSh2NaflwSJy6zHvZ0giclS0W2WVw&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJbVvHYuVRegvj9KSVBi3JANIvITpXTQHCA&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7zM-TH9X7a4E-RdfL4Dnkw5aHl9wYso5zow&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQky6U6hCXkRThcF97BvgyB-FVdE7wA7x_A&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4vVQpjZJMhoj9Y2dKGZQ2OF_k4_UNDISUA&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVQHnPgHmRz1jGHY2LeCJ9eYHKVDxWcc3j7g&usqp=CAU"
];
catchRainbows(filenames);

 

 export default async function catchRainbows(filenames) {
   for (let filename of filenames) {
     const response = await fetch(filename);
     const blob = await response.blob();
     const img = document.createElement('img');
     img.src = URL.createObjectURL(blob);
     img.height=250;
     img.style="padding:0 5px 5px 0";
     //document.getElementById("under-root").append(img);
   }
 }