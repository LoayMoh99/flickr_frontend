import React,{useEffect, useState} from "react"
import './EditInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash,faLock,faEye,faStar,faComment,faUnlock} from '@fortawesome/free-solid-svg-icons'
import {PutPhoto} from "../../services/photoServices"

/** Renders Card component to show photo in edit mode
 * @author Samar Nabil
 * @namespace Card
 * @category Functional Component
 * @extends Component
 * @property {String} props.id -Photo id
 * @property {String} props.url -Photo url 
 * @property {String} props.title -Photo title
 * @property {String} props.description -Photo descirption
 * @property {String} props.privacy -Photo privacy (public/private)
 * @property {String} props.ownerId -Photo owner id
 * @property {Number} props.numberOfFavs -Photo number of likes
 * @property {Number} props.numberOfComments -Photo number of Comments
 * @property {function} toggleModal -Toggle delete modal callback function
 */
function Card(props){

    const remove = <FontAwesomeIcon icon={faTrash} color="White" />
    const lock = <FontAwesomeIcon icon={faLock} color="DarkGrey"/>
    const unlock = <FontAwesomeIcon icon={faUnlock} color="DarkGrey"/>
    // const views = <FontAwesomeIcon icon={faEye} color="DarkGrey"/>
    const fav = <FontAwesomeIcon icon={faStar} color="DarkGrey"/>
    const comment = <FontAwesomeIcon icon={faComment} color="DarkGrey"/>

    const [isEditable,setEdit] = useState(false);
    const [inputTitle, setInputTitle] = useState(props.title);
    const [inputDescription , setInputDescription] = useState(props.description);
    const [privacy , setPrivacy] = useState(props.privacy);
    const [isPublic , setIsPublic] = useState (false);

    /** Saves the current value of the photo tile in the input tag
    * @memberof Card
    * @method handleTitleChange
    * @param {event} event -Tirggered event on change in input value
    */
    function handleTitleChange(event) {
        const newTitle = event.target.value;
        setInputTitle(newTitle);
    }

    /** Saves the current value of the photo description in textarea tag
    * @memberof Card
    * @method handleDescriptionChange
    * @param {event} event -Tirggered event on change in input value
    */
    function handleDescriptionChange(event) {
        const newDescription  = event.target.value;
        setInputDescription(newDescription);
    }

    /** Edit photo privacy to public
    * @memberof Card
    * @method changeToPublic
    */
    function changeToPublic(){
        setPrivacy('public');
        const object = {"photos":[props.id] , "title":inputTitle , "description":inputDescription , "privacy":privacy}
        //API
        PutPhoto(object).then( response => {
            console.log(response);
        });
    }

    /** Edit photo privacy to private
    * @memberof Card
    * @method changeToPrivate
    */
    function changeToPrivate(){
        setPrivacy('private');
        const object = {"photos":[props.id] , "title":inputTitle , "description":inputDescription , "privacy":privacy}
      //API
      PutPhoto(object).then( response => {
          console.log(response);
      });
    }

    /** change layout to edit mode 
    * @memberof Card
    * @method changeLayout
    */
    function changeLayout(){ 
        setEdit(!isEditable);
    }

    /** Confirm Edit on photo title/description
    * @memberof Card
    * @method confirmEdit
    */
    function confirmEdit(){
        const object = {photos:[props.id] , title:inputTitle , description:inputDescription , privacy:privacy}
        //API
        PutPhoto(object).then( response => {
        // PutPhoto(props.id,object).then( response => {
            console.log(response);
        });
        changeLayout();
    }


    return(
        <>
        
        <div className="card">
            <img src={props.url} alt=""  />
            <button className="button"
                onClick={ () =>{
                    props.onDelete(props.id);}}
            >{remove}</button>
            {!isEditable? 
            <>
                <div className="interaction-bar" onClick={changeLayout}>
                    <div className="title-bar">
                    <h1>{props.title}</h1> 
                    <p>{props.description}</p>
                    </div>
                </div> 
                
                <ul  className="tools">
                    <li className="dropdown">
                            <button className="bttn bttn-secondary dropdown-toggle" type="button" id="dropdownMenuButton privacy" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {isPublic? unlock :lock}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li onClick={changeToPublic}><a className="dropdown-item" href="#">Public</a></li>
                                <li onClick={changeToPrivate}><a className="dropdown-item" href="#">Private</a></li>
                            </ul>
                    </li>
                    <div id="info">
                        <li > {comment} {props.numberOfComments}</li>
                        <li > {fav} {props.numberOfFavs}</li>
                        {/* <li > <div>{views} {props.numberOfViews}</div></li> */}
                    </div>
                </ul>
            </>
                
            :
            <>
            <div className="new-interaction-bar">
                    <div id="input-format">
                        <div className="form-group" >
                            <input type="text" className="form-control"  onChange={handleTitleChange} value={inputTitle}></input> 
                        </div>
                        <div class="form-group">
                            <textarea className="form-control" rows="3"  onChange={handleDescriptionChange} value={inputDescription}></textarea> 
                        </div>
                    </div>
                    <button onClick={confirmEdit}>Done</button>
            </div>

            </>
            }


        </div>

    </>
    )
}

export default Card;