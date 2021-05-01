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
  const images = [{ Url: 'https://picsum.photos/id/237/200/300', dateuploaded: new Date('2019-05-28'), datetaken: new Date('2019-05-19') }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-10'), datetaken: new Date('2019-05-27') }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-10'), datetaken: new Date('2019-05-27') }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-10'), datetaken: new Date('2019-05-27') }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-10'), datetaken: new Date('2019-05-27') }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-10'), datetaken: new Date('2019-05-27') }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-10'), datetaken: new Date('2019-05-27') }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-10'), datetaken: new Date('2019-05-27') }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-10'), datetaken: new Date('2019-05-27') }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-10'), datetaken: new Date('2019-05-27') }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-10'), datetaken: new Date('2019-05-27') }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-10'), datetaken: new Date('2019-05-27') }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-10'), datetaken: new Date('2019-05-27') }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-10'), datetaken: new Date('2019-05-27') }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-10'), datetaken: new Date('2019-05-27') }];
  const sortedimagesuploaded = images.slice().sort((a, b) => b.dateuploaded - a.dateuploaded);
  // const sortedimagestaken = images.slice().sort((a, b) => b.datetaken - a.datetaken);
  // const filtered = 0; // 0 = dateupload .. 1= datetaken
  // eslint-disable-next-line no-unused-vars
  const [boolindicator, setboolindicator] = useState(1);
  // its role is to indicate whether we are filtering by dateuploaded (0) or by datetaken (1)
  //   const filterupload = (img) => {
  //     img.sort((a, b) => b.dateuploaded - a.dateuploaded);
  //   };
  //   const filtertaken = (img) => {
  //     img.sort((a, b) => b.datetaken - a.datetaken);
  //   };
  const filterupdate = () => setboolindicator(0);
  const filtertaken = () => setboolindicator(1);

  const [isModalOpen, setModalIsOpen] = useState(false);

  // const toggleModal = (id) => {
  //     setModalIsOpen(!isModalOpen);
  //     setID(id);
  // };

  function toggleModal(id) {
    console.log(id);
    setModalIsOpen(!isModalOpen);
  }

  return (

    <>

      <ul id="topNavbar" className="nav nav-tabs">
        <span className="col" />
        <div className="col-11">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" href="/#" role="button" aria-expanded="false">Date uploaded</a>
            <div className="dropdown-menu">
              <ul>
                <a className="dropdown-item" onClick={filterupdate} href="/#">Date uploaded</a>
                <a className="dropdown-item" onClick={filtertaken} href="/#">Date taken</a>
              </ul>
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
            onEdit={toggleModal}
            id={0}
          />

        )) }

      </div>

      {/* </div> */}
      {/* </div> */}
      {/* <div className="container_body"> */}

      {/* </div> */}
      <Modal />

      <main>
        {isModalOpen && <EditModal onRequestClose={toggleModal} />}
      </main>
    </>
  );
}

export default CamreRoll;
