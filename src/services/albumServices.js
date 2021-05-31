import axios from "axios"
import configData from "../config/development.json"
const SERVER_URL = configData.SERVER_URL ;

export default async function GetUserAlbums(){
    try{
        // const response = await axios.get( SERVER_URL+'/album');
        const response = await axios.get( SERVER_URL+'userAlbums');
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

export async function GetPeopleAlbums(userName){
    try{
        // const response = await axios.get( SERVER_URL+'/album/user?username='+userName);
        const response = await axios.get( SERVER_URL+'peopleAlbums');
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

export async function DeleteAlbum(id){
    try{
        // const response = await axios.get( SERVER_URL+'album?album_id='+id);
        const response = await axios.delete( SERVER_URL+'userAlbums/'+id);
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