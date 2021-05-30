/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
/* eslint-disable brace-style */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable react/style-prop-object */
/* eslint-disable linebreak-style */
import React, { useState , useEffect } from 'react';
import _, { filter, map, set } from 'lodash';
import moment from 'moment';
import ImagesCR from './ImagesCR';
import Modal from './Modal';
import EditModal from './EditModal';
import AddModal from './AddModal';
import SideNavBar from './SideNavBar';
import DeleteModal from '../DeleteModal/DeleteModal'
import './CamreRoll.css';
import './EditModal.css';
import './AddModal.css';
// import { mockComponent } from 'react-dom/test-utils';
import axios from "axios"
import CreateNewAlbumModal from './CreateNewAlbumModal';
const endpoint = 'http://localhost:3001/'

function CamreRoll() {
  // const images = [{ photo_url: 'https://picsum.photos/id/237/200/300', createdAt: new Date('2019-05-28'), photo_id: '1' }, { photo_url: 'https://picsum.photos/200', createdAt: new Date('2019-06-10'), photo_id: '2' }, { photo_url: 'https://picsum.photos/seed/picsum/200/300', createdAt: new Date('2019-06-11'), photo_id: '3' }, { photo_url: 'https://picsum.photos/200/300?grayscale', createdAt: new Date('2019-06-10'), photo_id: '4' }, { photo_url: 'https://picsum.photos/seed/picsum/200/300', createdAt: new Date('2019-06-10'), photo_id: '5' }, { photo_url: 'https://picsum.photos/seed/picsum/200/300', createdAt: new Date('2019-06-10'), photo_id: '6' }];
  
  //Get photos
  const [images, setImages] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
      const {data,status} = await axios.get( endpoint+'photos',);
      console.log(status);
      if (status === 200){
          setImages(data);
      }
  };
  
    fetchData();
  },[]);
  
  const sortedImagesUploaded = images.slice().sort((a, b) => b.createdAt - a.createdAt);
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

  
  const toggleAddModal = () => {
    setAddModalOpen(!isAddModalOpen);
  };
  const toggleCreateAlbum = () => {
    setCreateAlbumOpen(!isCreateAlbumOpen);
  };

  const toggleDelete = (id) => {
    setDeleteOpen(!isDeleteOpen);
    setID(id);
  };

  const toggleEditModal = () => {
    setEditModalOpen(!isEditModalOpen);
  };
  const closeMainModal = () => {
    setModalIsOpen(!isModalOpen);
    setCount(0);
    setToEdit([]);
    // should alse clear the count and clear the to Edit array
  };

  function confirmDelete(){
    if (idToDelete ===0){
        console.log("delete card 1");
    }else if (idToDelete===1){
        console.log("delete card 2");
    } 

    toggleDelete(); 
}

  const monthName = (item) => moment(item.createdAt, 'YYYY-MM-DD').format('DD MMMM YYYY');
  // function to check if this image was already selected or a newly selected one
  function containsObject(obj, list) {
    return list.some((elem) => elem.photo_id === obj.photo_id);
  }
  // to delete the element if unselected
  function handleDelete(obj, list) {
    const listClone = [...list];
    const index = listClone.indexOf(obj);
    // Edit
    return listClone.splice(index, 1);
  }

  function handleIncrement(c) {
    return c + 1;
  }
  function handleDecrement(c) {
    return c - 1;
  }

  // to toggle the modal .. if open then close and vice versa
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
        setToEditIds((prevItems)=>[...prevItems,imgObj.photo_id]);


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
        setToEditIds((prevItems)=>[...prevItems,imgObj.photo_id]);

        countCopy = handleIncrement(countCopy);
        setCount(countCopy);
      }
      console.log(count);
      if (isHere) {

        setToEdit(handleDelete(imgObj, toEdit));
        setToEditIds(handleDelete(imgObj.photo_id, toEditIds));

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

      // // extract ids from toEdit photos array
      // toEdit.map(photoSelected=>setToEditIds((prevItems) => [...prevItems,photoSelected.photo_id]));
      //   console.log(toEditIds);

        // function extractToEditIds(){
        //   let prevItems=[];
        //  toEdit.map(photoSelected=>(prevItems) => [...prevItems,photoSelected.photo_id]);
        //  //console.log(toEditIds);
        //  return prevItems;
        // }

        const grouped = _.groupBy(sortedImagesUploaded, 'createdAt');
        const keys = Object.keys(grouped);
        const values = Object.values(grouped);
        const tempImgDated = [];

        useState(() => { for (let i = 0; i < keys.length; i += 1)
    {
      const imgCorresponding = values[i];
      // dateFormat("2019-04-30T08:59:00.000Z", "mmmm dS, yyyy")
      // tempImgDated.push(<div><h6>{monthName(keys[i])}</h6></div>);
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
  // setModalIsOpen(true);

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
      {/* <SideNavBar /> */}
    <div className="sidephoto">
        <SideNavBar />
        <div className="row">
          <div className=" container_body">

            {/* {grouped.map((arr) => <h5>{arr[0]}</h5>)} */}
            {/* {map((arr) => ({ dateuploaded: arr[0], image: arr.slice(1) }))} */}
            { sortedImagesUploaded.map((image) => (
              <ImagesCR
                key={image.photo_id}
                url={image.photo_url}
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
      {/* </div> */}
      {/* <div className="container_body"> */}

      {/* </div> */}
      {/* <Modal /> */}

      <main className="main_edit">
        {isEditModalOpen && (
        <EditModal
          onRequestEditClose={toggleEditModal}
          imgEdit={toEdit}
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
          countAdd={count}
          
        />
        )}
      </main>
      <main>
        {isDeleteOpen && (
        <DeleteModal
          onRequestClose={toggleDelete}
          onDelete={confirmDelete}
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
