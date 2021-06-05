import axios from "axios"
import configData from "../config/development.json"
const SERVER_URL = configData.SERVER_URL ;
export async function JoinGroup(group_id){
  try{
    const response = await axios.post( SERVER_URL+'group/'+group_id+'/join','',{headers:{token: localStorage.token}});
    // const response = await axios.get( SERVER_URL+'groupPhotos');
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
}
export async function UnJoinGroup (group_id){
    try{
        const response = await axios.delete( SERVER_URL+'group/'+group_id+'/leave',{headers:{token: localStorage.token}});
        // const response = await axios.get( SERVER_URL+'groupPhotos');
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
export default async function GetGroupPhotos (id){
    try{
        const response = await axios.get( SERVER_URL+'group/photos/'+id,{headers:{token: localStorage.token}});
        // const response = await axios.get( SERVER_URL+'groupPhotos');
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

export async function PostGroupPhotos (groupId,photoId){
    try{
        const response = await axios.post( SERVER_URL+'group/photo',{
          group_id: groupId,
          photo_id: photoId
        },{headers:{token:localStorage.token}});
        // const response = await axios.post( SERVER_URL+'groupPhotos',object);
        //Success
        return(response)
    } catch (error){
        if (error.response){
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request){
          console.log(error.request);
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log('Error', error.message);
        }
        console.log(error);
    }
};


//const {data,status} = await axios.get( endpoint+'group',);
export async function GetGroupBySearch (text){
  try{
    const response = await axios.get(SERVER_URL+'group/'+text+'/search',{headers:{token: localStorage.token}});
      //Success
      console.log(response)
      return(response)
  } catch (error){
      if (error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request){
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error);
  }
};

export async function GetGroupById (groupId){
  try{
      const response = await axios.get( SERVER_URL+'group/'+groupId,{headers:{token:localStorage.token}});
      // const response = await axios.post( SERVER_URL+'groupPhotos',object);
      //Success
      return(response)
  } catch (error){
      if (error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request){
        console.log(error.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log('Error', error.message);
      }
      console.log(error);
  }
};