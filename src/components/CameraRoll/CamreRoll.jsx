import React, { useState , useEffect } from 'react';
import _, { filter, map, set } from 'lodash';
import moment from 'moment';
import ImagesCR from './ImagesCR';
import Modal from './Modal';
import EditModal from './EditModal';
import AddModal from './AddModal';
import SideNavBar from './SideNavBar';
import DeleteModal from '../DeleteModal/DeleteModal'
import {GetUserPhotos} from "../../services/userServices"
import './CamreRoll.css';
import './EditModal.css';
import './AddModal.css';
import DeletePhoto from '../../services/photoServices'
// import { mockComponent } from 'react-dom/test-utils';
import axios from "axios"
import CreateNewAlbumModal from './CreateNewAlbumModal';
const endpoint = 'http://localhost:3001/'



/** To increments count
* @memberof CamreRoll
* @method handleIncrement
* @param {integer} c -count
* @returns {integer} - count incremented
*/
export function handleIncrement(c) {
  return c + 1;
}


/** To check if it is present in the array of photos selected or not 
* @memberof CamreRoll
* @method containsObject
* @param {object} obj - A photo object
* @returns {boolean} - A boolean indicating the photo id is present within the array or not
*/
export function containsObject(obj, list) {
  return list.some((elem) => elem._id === obj._id);
  // return list.some((elem) => elem.id === obj.id);
}


/** To delete objectt from list
* @memberof CamreRoll
* @method handleDelete
* @param {array} list - array of photos
* @param {object} obj - A photo object
* @returns {array} -array of photos after deletion
*/
// to delete the element if unselected
export function handleDelete(obj, list) {
  const listClone = [...list];
  const index = listClone.indexOf(obj);
  // Edit
  return listClone.splice(index, 1);
}

/** To decrements count
* @memberof CamreRoll
* @method handleDecrement
* @param {integer} c -count
* @returns {integer} - count decremented
*/
export function handleDecrement(c) {
  return c - 1;
}


/** Renders CameraRoll photos
 * @author Khadija Khaled
 * @namespace CamreRoll
 * @category Functional Component
 * @extends Component
 */
function CamreRoll() {
  // const images = [{ photo_url: 'https://picsum.photos/id/237/200/300', createdAt: new Date('2019-05-28'), photo_id: '1' }, { photo_url: 'https://picsum.photos/200', createdAt: new Date('2019-06-10'), photo_id: '2' }, { photo_url: 'https://picsum.photos/seed/picsum/200/300', createdAt: new Date('2019-06-11'), photo_id: '3' }, { photo_url: 'https://picsum.photos/200/300?grayscale', createdAt: new Date('2019-06-10'), photo_id: '4' }, { photo_url: 'https://picsum.photos/seed/picsum/200/300', createdAt: new Date('2019-06-10'), photo_id: '5' }, { photo_url: 'https://picsum.photos/seed/picsum/200/300', createdAt: new Date('2019-06-10'), photo_id: '6' }];
  
  //Get photos
  const [images, setImages] = useState([]);
  useEffect( () =>{
    //get user photos
    GetUserPhotos().then( response => {
      setImages(response.data);
    })

  },[])


  
  var sortedImagesUploaded = images.photos
  if(sortedImagesUploaded!=undefined)
  sortedImagesUploaded= sortedImagesUploaded.slice().sort((a, b) => b.createdAt - a.createdAt);
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [toEdit, setToEdit] = useState([]);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [isCreateAlbumOpen , setCreateAlbumOpen] = useState(false);
  const [idToDelete,setID]=useState(0);
  const [imgDated, setimgDated] = useState([]);
  const [toEditIds, setToEditIds] = useState([]);

  /** To open/close Add modal
* @memberof CamreRoll
* @method toggleAddModal
*/
  const toggleAddModal = () => {
    setAddModalOpen(!isAddModalOpen);
  };

  
  /** To open/close Create Album modal
* @memberof CamreRoll
* @method toggleCreateAlbum
*/
  const toggleCreateAlbum = () => {
    setCreateAlbumOpen(!isCreateAlbumOpen);
  };


  /** To open/close Delete modal
* @memberof CamreRoll
* @method toggleDelete
* @param {string} id -photo id to delete
*/
  const toggleDelete = (id) => {
    setDeleteOpen(!isDeleteOpen);
    setID(id);
  };

  /** To open/close Edit modal
* @memberof CamreRoll
* @method toggleAEditModal
*/
  
  const toggleEditModal = () => {
    setEditModalOpen(!isEditModalOpen);
  };

    /** To close Main modal , clear count of selected photos and clear the Edit array
* @memberof CamreRoll
* @method closeMainModal
*/
  const closeMainModal = () => {
    setModalIsOpen(!isModalOpen);
    setCount(0);
    setToEdit([]);
    // should alse clear the count and clear the to Edit array
  };

  /** To change date format
* @memberof CamreRoll
* @method monthName
* @param {object} item -photo object toe change its createdAt date format 
*/

  const monthName = (item) => moment(item.createdAt, 'YYYY-MM-DD').format('DD MMMM YYYY');


/** To toggle the main modal open/close based on photo selection/unselection
* @memberof CamreRoll
* @method toggleModal
*/
  const toggleModal = (e, imgObj) => {
    // if count was initially 0 .. this the first image to be selected .. open modal
    let countCopy = count;
    console.log(countCopy);
    if (!countCopy) {

      setToEdit([]);
      setToEditIds([]);

      if (!isModalOpen) {

        setModalIsOpen(!isModalOpen);

        setToEdit((prevItems) => [...prevItems, imgObj]);
        setToEditIds((prevItems)=>[...prevItems,imgObj._id]);
        // setToEditIds((prevItems)=>[...prevItems,imgObj.id]);

        countCopy = handleIncrement(countCopy);
        setCount(countCopy);
        console.log(countCopy);
        // we now checked if the image was already selected .. unselect it.. count --
        // if no image left close modal
      } else {
        // setModalIsOpen(false);
        setModalIsOpen(!isModalOpen);
      }
    } else {
      const isHere = containsObject(imgObj, toEdit);
      
      console.log(isHere);
      if (!isHere) {

        setToEdit((prevItems) => [...prevItems, imgObj]);
               setToEditIds((prevItems)=>[...prevItems,imgObj._id]);
              //  setToEditIds((prevItems)=>[...prevItems,imgObj.id]);

        countCopy = handleIncrement(countCopy);
        setCount(countCopy);
      }
      console.log(count);
      if (isHere) {

        setToEdit(handleDelete(imgObj, toEdit));
       setToEditIds(handleDelete(imgObj._id, toEditIds));
      //  setToEditIds(handleDelete(imgObj.id, toEditIds));

        countCopy = handleDecrement(countCopy);
        setCount(countCopy);
      }
      console.log(count);
      // we now checked if the image was already selected .. unselect it.. count --
      // if no image left close modal
      console.log(toEdit);
      console.log(toEditIds);

      if (!countCopy) {
     
        setToEdit([]);
        setToEditIds([]);

        setModalIsOpen(!isModalOpen);
      }
    }

        };

        const grouped = _.groupBy(sortedImagesUploaded, 'createdAt');
        const keys = Object.keys(grouped);
        const values = Object.values(grouped);
        const tempImgDated = [];

        useState(() => { for (let i = 0; i < keys.length; i += 1)
    {
      const imgCorresponding = values[i];
      tempImgDated.push(<div><h6>{keys[i]}</h6></div>);
      tempImgDated.push(
        imgCorresponding.map((image) => (
            <ImagesCR
              key={image.id}
              Url={image.Url}
              image={image}
              onEdit={toggleModal}
              id={0}
            />
        )),
      );
      tempImgDated.push(<br />);
      setimgDated([...imgDated, ...tempImgDated]);
    } });


  
const photoIdsDelete = {
  "photos": toEditIds,
}

  function confirmDelete(){
    DeletePhoto(photoIdsDelete).then( response => {
        console.log(response);
    });
    //close delete modal
    toggleModal(idToDelete); 
}


  return (

    <>

      <ul id="topNavbar" className="nav nav-tabs">
        <span className="col" />
        <div className="col-11">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" href="/#" role="button" aria-expanded="false">Date uploaded</a>
            <div className="dropdown-menu" />
          </li>

        </div>
      </ul>

    <div className="sidephoto">
        <SideNavBar />
        <div className="row">
          <div className=" container_body">

            { sortedImagesUploaded!=undefined&&sortedImagesUploaded.map((image) => (
              <ImagesCR
                key={image.id}
                url={image.photoUrl}
                image={image}
                onEdit={toggleModal}
              />

            )) }
      {/* <div> */}
        {/* {imgDated} */}
      {/* </div> */}
      </div>

        </div>

      </div>
          <main className="main_Modal">
            {isModalOpen && (
            <Modal
              onRequestClose={closeMainModal}
              onEditRequest={toggleEditModal}
              onAddRequest={toggleAddModal}
              onDeleteRequest={toggleDelete}
              imgSelected={toEdit}
              countSelected={count}
              id={0}
            />
            )}
          </main>

      <main className="main_edit">
        {isEditModalOpen && (
        <EditModal
          onRequestEditClose={toggleEditModal}
          imgEdit={toEdit}
          imgEditIds= {toEditIds}
          countEdit={count}
        />
        )}
      </main>
      <main className="main_edit">
        {isAddModalOpen && (
        <AddModal
          onRequestAddClose={toggleAddModal}
          onRequestCreate={toggleCreateAlbum}
          imgAdd={toEdit}
          imgAddIds= {toEditIds}
          countAdd={count}
            
        />
        )}
      </main>
      <main>
        {isDeleteOpen && (
        <DeleteModal
          onRequestClose={toggleDelete}
          onDelete={confirmDelete}
          title = "Delete photos ?"
          message = "You cannot reverse this action. Are you sure you want to permanently delete this photo?"
        />
        )}
      </main>



      <main>
        {isCreateAlbumOpen && (
        <CreateNewAlbumModal
          onRequestCreateClose={toggleCreateAlbum}
          imgIdsCreateAlbum={toEditIds}
          
        />
        )}
      </main>

    </>
  );
}

export default CamreRoll;
