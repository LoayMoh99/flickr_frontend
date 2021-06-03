import axios from "axios"
import configData from "../config/development.json"
const SERVER_URL = configData.SERVER_URL ;
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = "" // for all requests
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

// let instance = axios.create({
//   headers: {
//     post: {        // can be common or any other method
//       'Access-Control-Allow-Origin': '*'
//     }
//   }
// })

// const token = '..your token..'
// let config = {
//     headers: {
//       token: 'value',
//     }
//   }

// {headers:{'Access-Control-Allow-Origin':'*'}}

// const header = new Headers ();
// header = {'Token':localStorage.token}

// var config = {
//   headers: {'Access-Control-Allow-Origin': '*'}
// };


//User
export default async function UserLogin(object){
  try{
      const response = await axios.post( SERVER_URL+'user/login',object, {
        crossDomain: true
      });
      // const response = await axios.get( SERVER_URL+'user?id='+0);
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
      return(error.response.data)
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

//sign up
export async function PostUser (object){
  console.log(object);
  try{
      const response = await axios.post( SERVER_URL+'user',object,{headers:{token:localStorage.token}});
      //Success
      return(response)
  } catch (error){
      if (error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        return(error.response);
      } else if (error.request){
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error);
  }
};

//check
export async function checkUserByIdentifier(id){
  try{
      const response = await axios.get( SERVER_URL+'user/check/'+id,{headers:{token:localStorage.token}});
      //Success
      return(response)
  } catch (error){
      if (error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        return(error.response);
      } else if (error.request){
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error);
  }
};


export async function GetUserPhotos (){
    try{
        const response = await axios.get( SERVER_URL+'user/photos',{headers:{token:localStorage.token}});
        // const response = await axios.get( SERVER_URL+'photos');
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

export async function GetUser(){
  try{
      const response = await axios.get( SERVER_URL+'user',{headers:{token:localStorage.token}});
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

// Favs
export async function GetUserFavs(){
  try{
      const response = await axios.get( SERVER_URL+'user/fav',{headers:{token:localStorage.token}});
      // const response = await axios.get( SERVER_URL+'userFav');
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

export async function PostUserFavs(object){
  try{
      const response = await axios.post( SERVER_URL+'favs/',object,{headers:{token:localStorage.token}});
      //Success
      return(response)
  } catch (error){
      if (error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      return(error.response)
      } else if (error.request){
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error);
  }
};

export async function DeleteUserFavs(id){
  try{
      const response = await axios.delete( SERVER_URL+'favs/'+id,{headers:{token:localStorage.token}});
      //Success
      return(response)
  } catch (error){
      if (error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        return(error.response)
      } else if (error.request){
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error);
  }
};

//Following

export async function GetUserFollowing(){
  try{
      const response = await axios.get( SERVER_URL+'user/following',{headers:{token:localStorage.token}});
      // const response = await axios.get( SERVER_URL+'following');
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

//Following

export async function GetUserFollowers(){
  try{
      const response = await axios.get( SERVER_URL+'user/followers',{headers:{token:localStorage.token}});
      // const response = await axios.get( SERVER_URL+'followers');
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

//check user

export async function GetUserCheck(id){
  try{
      const response = await axios.get( SERVER_URL+'user/check/peopleid?='+id);
      // const response = await axios.get( SERVER_URL+'user?id=',id);
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

//Update User
export async function UpdateUser(data){
  try{
      const response = await axios.put(SERVER_URL + 'user' , data,{headers:{token:localStorage.token}});
      // const response = await axios.put( SERVER_URL+'user',data);
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

//const { status } = await axios.post('/user/follow',userFollow);
export async function FollowPeople(id){
  try{
      const response = await axios.post(SERVER_URL+'/user/follow',id);
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

//const { status } = await axios.delete('/user/unfollow/'+id);

export async function UnFollowPeople(id){
  try{
      const response = await axios.delete(SERVER_URL+'/user/unfollow/'+id);
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
//const { status } = await axios.delete('/group/'+group_id+'/leave',);
export async function UnJoinGroup(id){
  try{
      const response = await axios.delete(SERVER_URL+'/group/'+id+'/leave',);
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
// const { status } = await axios.post('/group/'+group_id+'/join',);
export async function JoinPeople(id){
  try{
      // const response = await axios.put(endpoint + "user" , data);
      const response = await axios.post(SERVER_URL+'/group/'+id+'/join',);
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