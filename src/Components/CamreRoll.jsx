/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable react/style-prop-object */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import _, { filter, map } from 'lodash';
import moment from 'moment';
import ImagesCR from './ImagesCR';
import Modal from './Modal';
import EditModal from './EditModal';
import './CamreRoll.css';
import './EditModal.css';
// import { mockComponent } from 'react-dom/test-utils';

function CamreRoll() {
  const images = [{ Url: 'https://picsum.photos/id/237/200/300', dateuploaded: new Date('2019-05-28'), id: '1' }, { Url: 'https://picsum.photos/200', dateuploaded: new Date('2019-06-10'), id: '2' }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-11'), id: '3' }, { Url: 'https://picsum.photos/200/300?grayscale', dateuploaded: new Date('2019-06-10'), id: '4' }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-10'), id: '5' }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-10'), id: '6' }];
  const sortedimagesuploaded = images.slice().sort((a, b) => b.dateuploaded - a.dateuploaded);
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [toEdit, setToEdit] = useState([]);
  // const toggleModal = (id) => {
  //     setModalIsOpen(!isModalOpen);
  //     setID(id);
  // };
  const grouped = _.groupBy(sortedimagesuploaded, 'dateuploaded');
  const monthName = (item) => moment(item.dateuploaded, 'YYYY-MM-DD').format('DD MMMM YYYY');
  // function to check if this image was already selected or a newly selected one
  function containsObject(obj, list) {
    return list.some((elem) => elem.id === obj.id);
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
  // const handleReset = (list) => {
  //   // Clone
  //   let clonedlist = [...list];
  //   // Edit
  //   clonedlist = clonedlist.map((c) =>
  //   // c.count = 0;
  //     p);
  //   // Set state
  //   this.setState({ products });
  // };

  // IncrementHandler = (product) => {
  //   // Clone
  //   const products = [...this.state.products];
  //   const index = products.indexOf(product);
  //   products[index] = { ...products[index] };
  //   // Edit
  //   products[index].count++;
  //   // Set State
  //   this.setState({ products });
  // };

  // handleDelete = (product) => {
  //   // Clone
  //   const products = [...this.state.products];
  //   const index = products.indexOf(product);
  //   // Edit
  //   products.splice(index, 1);
  //   // Set State
  //   this.setState({ products });
  // };
  // to toggle the modal .. if open then close and vice versa
  const toggleModal = (e, imgObj) => {
    // if count was initially 0 .. this the first image to be selected .. open modal
    let countCopy = count;
    console.log(countCopy);
    if (!countCopy) {
      if (!isModalOpen) {
        // setModalIsOpen(true);
        setModalIsOpen(!isModalOpen);
        setToEdit((prevItems) => [...prevItems, imgObj]);
        // setToEdit(() => toEdit.push(imgObj));
        // setCount(count + 1);
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
      // const isHere = toEdit.includes(imgObj);
      console.log(isHere);
      if (!isHere) {
        setToEdit((prevItems) => [...prevItems, imgObj]);
        // setToEdit(() => toEdit.push(imgObj));
        // setCount(count + 1);
        // setCount(handleIncrement(count));
        countCopy = handleIncrement(countCopy);
        setCount(countCopy);
      }
      console.log(count);
      if (isHere) {
        setToEdit(handleDelete(imgObj, toEdit));
        // setCount(count - 1);
        // setCount(handleDecrement(count));
        countCopy = handleDecrement(countCopy);
        setCount(countCopy);
      }
      console.log(count);
      // we now checked if the image was already selected .. unselect it.. count --
      // if no image left close modal
      console.log(toEdit);
      if (!countCopy) {
        // setModalIsOpen(false);
        setModalIsOpen(!isModalOpen);
      }
    }
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

        {/* {grouped.map((arr) => <h5>{arr[0]}</h5>)} */}
        {/* {map((arr) => ({ dateuploaded: arr[0], image: arr.slice(1) }))} */}
        { sortedimagesuploaded.map((image) => (
          <ImagesCR
            key={image.id}
            Url={image.Url}
            image={image}
            onEdit={toggleModal}
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
