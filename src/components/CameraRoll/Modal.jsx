import './Modal.css';
import 'react-responsive-modal/styles.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import ImagesMM from './ImagesMM';

/** Renders Main modal component in CameraRoll 
 * @author Khadija Khaled
 * @namespace Modal
 * @category Functional Component
 * @extends Component
 * @property {Function} props.onRequestClose -To be triggered to close the modal
 * @property {Function} props.onEditRequest -To open the EditModal 
 * @property {Function} props.onAddRequest -To open AddAlbumImages modal
 * @property {Function} props.onDeleteRequest -To open Delete modal
 * @property {Array} props.imgSelected - Array of selected photos
 * @property {Integer} props.countSelected -Count of selected photos
 */

function Modal(props) {
    const lock = <FontAwesomeIcon icon={faLock} color="DarkGrey" />;
    const edit = <FontAwesomeIcon icon={faEdit} color="DarkGrey" />;
    const add = <FontAwesomeIcon icon={faPlusSquare} color="DarkGrey" />;
    const download = <FontAwesomeIcon icon={faArrowDown} color="DarkGrey" />;
    const deleteit = <FontAwesomeIcon icon={faTrashAlt} color="red" />;
    // const imgEdit = [{ Url: 'https://picsum.photos/id/237/200/300', dateuploaded: new Date('2019-05-28'), id: '1' }, { Url: 'https://picsum.photos/200', dateuploaded: new Date('2019-06-10'), id: '2' }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-11'), id: '3' }, { Url: 'https://picsum.photos/200/300?grayscale', dateuploaded: new Date('2019-06-10'), id: '4' }, { Url: 'https://picsum.photos/seed/picsum/200/300', dateuploaded: new Date('2019-06-10'), id: '5' }];

    return (
      <>


        <div className="modal__container_main">
          <div className="row">
            <h3 className="modal__title_main">
              {props.countSelected}
              {' '}
              selected
            </h3>
            <a href="#" onClick={props.onRequestClose}>
              <h3 className="modal__title_main" id="clear_selection">Clear selection</h3>
            </a>
          </div>
          <div className="row" id="image_modal">
            { props.imgSelected.map((image) => (
              <ImagesMM
                url={image.photoUrl}
              />
              ))}
          </div>
          <div className="row bottom_options_modal">
            <a href="#" onClick={props.onEditRequest}>
              {' '}
              <h3 className="modal__title_main">
                {edit}
                {' '}
                Edit
              </h3>
            </a>
            <span className="space__modal_main" />
            <a href="#" onClick={props.onAddRequest}>
              <h3 className="modal__title_main">
                {add}
                {' '}
                Add to album
              </h3>
            </a>
            <span className="space__modal_main" />
            <a href="#" onClick={ () =>{
                    props.onDeleteRequest(props.imgSelected);}}>
              <h3 className="modal__title_main" id="delete_option">
                {deleteit}
                {' '}
                Delete
              </h3>
            </a>
          </div>
        </div>
        {/* </div> */}

 

      </>
  );
}

export default Modal;
