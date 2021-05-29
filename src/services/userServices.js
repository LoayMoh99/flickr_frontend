import axios from "axios"
import configData from "../config/development.json"
const SERVER_URL = configData.SERVER_URL ;

// axios.defaults.headers.common['header1'] = 'value' // for all requests
// const token = '..your token..'
// let config = {
//     headers: {
//       token: 'value',
//     }
//   }
//   {headers:{ 'Authorization': `Basic ${token}`}}

//User
export default async function getUserPhotos (){
    try{
        const response = await axios.get( SERVER_URL+'photos');
        //Success
        return(response)
    } catch (error){
        if (error.response){
        /*
        * The request was made and the server responded with a
        * status code that falls out of the range of 2xx
        */
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request){
          /*
          * The request was made but no response was received, `error.request`
          * is an instance of XMLHttpRequest in the browser and an instance
          * of http.ClientRequest in Node.js
          */
          console.log(error.request);
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log('Error', error.message);
        }
        console.log(error);
    }
  };