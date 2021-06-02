import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './Join.css'

function Join(props) {
    const {group_id,role} = props;
     //const [data, setData] = useState({});
     const [isJoined, setToggleJoin] = useState(false);
    useEffect(() => {if(role === "member"){
        setToggleJoin(true);
        console.log({group_id});
    }},[]);
//////////////////////////////toggle function to handle pressing on join or leave action/////////////////////////
        async function toggleJoin(){
           //      async function toggleFollow(){
//          if(isJoined===false){
//             JoinGroup(group_id).then( response => {
//                  setToggleJoin(!isJoined);
//         
//         })

//          else{
//             UnJoinGroup(group_id).then( response => {
                setToggleJoin(!isJoined);
//              })
//      }

            
        }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <div className="HandleJoin">
             
                    {!isJoined && <button className="buttonJoined" onClick={toggleJoin}><FontAwesomeIcon className="hover" icon={faPlus} color="DarkGrey" /> Join</button>}
                    {isJoined &&  <button className="buttonJoining" onClick={toggleJoin}><FontAwesomeIcon icon={faCheck} color="DarkGrey" /> </button>}
                    
        </div>
    )
}

export default Join
