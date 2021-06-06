import axios from "axios"
import configData from "../config/development.json"
const SERVER_URL = configData.SERVER_URL ;

export default async function GetPeoplePhotos (id){
    try{
        const response = await axios.get( SERVER_URL+'people/photos/'+id,{headers:{token:localStorage.token}});
        // const response = await axios.get( SERVER_URL+'peoplePhotos');
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
          console.log('Error', error.message);
        }
        console.log(error);
    }
};

export async function GetPeopleFavs (userName){
    try{
        const response = await axios.get( SERVER_URL+'people/fav/'+userName,{headers:{token:localStorage.token}});
        // const response = await axios.get( SERVER_URL+'peopleFav');
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
          console.log('Error', error.message);
        }
        console.log(error);
    }
};

export async function GetPeopleFollowing (id){
  try{
      var response = await axios.get( SERVER_URL+'people/following/'+id,{headers:{token:localStorage.token}});
      // const response = await axios.get( SERVER_URL+'peopleFollowing');
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
        console.log('Error', error.message);
      }
      console.log(error);
  }
};

//get people info by id

export async function GetPeopleByIdentefier (id){
  try{
      const response = await axios.get( SERVER_URL+'people/'+id,{headers:{token:localStorage.token}});
      // const response = await axios.get( SERVER_URL+'user');
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
        console.log('Error', error.message);
      }
      console.log(error);
  }
};

//const {data,status} = await axios.get( endPoint+textt,);

export async function GetPeopleBySearch (text){
  try{
    const response = await axios.get(SERVER_URL+'people/search/'+text,{headers:{token: localStorage.token}});
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
        console.log('Error', error.message);
      }
      console.log(error);
  }
};