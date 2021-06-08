import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import {UpdatePhotos} from '../../services/photoServices';
import './DropdownPrivacy.css';


/** Renders DropdownPrivacy component to edit photo privacy
 * @author Khadija Khaled
 * @namespace DropdownPrivacy
 * @category Functional Component
 * @extends Component
 * @property {Array} props.imgEditIds -Array of photos ids to edit privacy
 */

function DropdownPrivacy(props) {
  const {imgEditIds} = props;
  const arrow = <FontAwesomeIcon icon={faSortDown} color="DarkGrey" />;
  const [privacy,setPrivacy] = useState("private");

  const updatePrivacy ={
    "photos":imgEditIds,
    "privacy":privacy
  }

  
  /** Updates selected photos privacy based on option selected
    * @memberof DropdownPrivacy
    * @method changePrivacy
    * @param {event} event -Tirggered event on change in input value
    */
  function changePrivacy(event){
    const privacyState=event.target.value;
    setPrivacy(privacyState);
    console.log(privacy);

    // call API
    UpdatePhotos(updatePrivacy).then( response => {
      console.log(response.status);
    })

  }



  return (
    <>

      <select onChange={changePrivacy}>
        <span className="styled" />
        <option value="private">
          Public
        </option>
        <option value="public">
          Private
        </option>
      </select>
      {arrow}

    </>
  );
}

export default DropdownPrivacy;
