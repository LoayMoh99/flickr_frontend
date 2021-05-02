/* eslint-disable linebreak-style */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable react/style-prop-object */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import ImagesCR from './ImagesCR';
import Modal from './Modal';
import EditModal from './EditModal';
import './CamreRoll.css';
import './EditModal.css';

function CamreRoll() {
  const images = [{ Url: 'https://picsum.photos/id/237/200/300', dateuploaded: new Date('2019-05-28'), id: '1' }, { Url: 'https://picsum.photos/200', dateuploaded: new Date('2019-06-10'), id: '2' }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-11'), id: '3' }, { Url: 'https://picsum.photos/200/300?grayscale', dateuploaded: new Date('2019-06-10'), id: '4' }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-10'), id: '5' }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-10'), id: '6' }];
  const sortedimagesuploaded = images.slice().sort((a, b) => b.dateuploaded - a.dateuploaded);
  // const sortedimagestaken = images.slice().sort((a, b) => b.datetaken - a.datetaken);

  const [isModalOpen, setModalIsOpen] = useState(true);
  const [count, setCount] = useState(0);
  // const toggleModal = (id) => {
  //     setModalIsOpen(!isModalOpen);
  //     setID(id);
  // };
  const detectID = (id) => {
    console.log(id);
  };

  const [toEdit, setToEdit] = useState([]);

  //   function toggleModal(event, id) {
  //     console.log(event.src);

  //     setToEdit((prevItems) => [...prevItems, event.src]);
  //     console.log(toEdit);
  //     console.log(id);
  const toggleModal = (imgObj) => {
    setToEdit((prevItems) => [...prevItems, imgObj]);
    console.log(toEdit);
    // setModalIsOpen(!isModalOpen);
  };

  // setModalIsOpen(true);

  return (

    <>

      <ul id="topNavbar" className="nav nav-tabs">
        <span className="col" />
        <div className="col-11">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" href="/#" role="button" aria-expanded="false">Date uploaded</a>
            <div className="dropdown-menu">
              {/* <ul>
                <a className="dropdown-item" onClick={filterupdate} href="/#">Date uploaded</a>
                <a className="dropdown-item" onClick={filtertaken} href="/#">Date taken</a>
              </ul> */}
            </div>
          </li>

        </div>
      </ul>
      {/* <div className="row">
        <div className="col"> */}
      {/* <nav className="nav flex-column">
        <a className="nav-link active " aria-current="page" href="/#">2021</a>
        <a className="nav-link " href="/#">- April</a>
        <a className="nav-link text-secondary" href="/#">- January</a>
      </nav> */}
      {/* </div> */}
      {/* <div className="col-11"> */}
      <div className=" container_body">

        { sortedimagesuploaded.map((image) => (
          <ImagesCR
            Url={image.Url}
            image
            onEdit={toggleModal}
            detected={detectID}
            id={0}
          />

        )) }

      </div>

      {/* </div> */}
      {/* </div> */}
      {/* <div className="container_body"> */}

      {/* </div> */}
      {/* <Modal /> */}

      <main>
        {isModalOpen && (
        <Modal
          onRequestClose={toggleModal}
          id={0}
        />
        )}
      </main>

    </>
  );
}

export default CamreRoll;
