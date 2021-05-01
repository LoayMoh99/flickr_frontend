/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React from 'react';
import './EditModal.css';

function EditModal(props) {
  return (
    <>

      {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
        Launch demo modal
      </button>

      // eslint-disable-next-line max-len
      <div className="modal" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="modal__backdrop" onClick={props.onRequestClose}>
        <div className="modal__container">
          <span className="close" onClick={props.onRequestClose}>&times;</span>
          <h3 className="modal__title">Editing # photos </h3>
          <div className="title-desc-container">
            <input className="edit-title" type="text" placeholder="Change title" />
            <hr />
            <textarea className="edit-description" placeholder="Change description" />

          </div>
          <span className="privacy-label">Who can see this photo ?</span>
          <span className="truncate no-outline" data-action="toggle" aria-haspopup="true" aria-expanded="false">Friends & Family </span>
          <li data-action="set" data-value="public" data-text="Public">Public</li>
        </div>
      </div>

    </>
  );
}

export default EditModal;
