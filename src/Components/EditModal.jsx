/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa-tag } from '@fortawesome/free-solid-svg-icons';
import './EditModal.css';
import DropdownPrivacy from './DropdownPrivacy';

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

      <div className="modal__backdrop">
        <div className="modal__container">
          <span className="close" onClick={props.onRequestClose}>&times;</span>
          <h3 className="modal__title">Editing # photos </h3>
          <div className="title-desc-container">
            <input className="edit-title" type="text" placeholder="Change title" />
            <hr />
            <textarea className="edit-description" placeholder="Change description" />

          </div>
          <span className="privacy-label">Who can see this photo ?</span>
          {/* <div className="ui-dropdown" id="yui_3_16_0_1_1619815449803_2014">
            <span className="truncate" data-action="toggle" aria-haspopup="true" aria-expanded="true" id="yui_3_16_0_1_1619815449803_2380">Friends &amp; Family</span>
            <span className="ui-dialog-arrow" id="yui_3_16_0_1_1619815449803_2030" />
            <ul id="yui_3_16_0_1_1619815449803_2031">
              <li data-action="set" data-value="public" data-text="Public">Public</li>
              <li data-action="set" data-value="private" data-text="Private">Private</li>
              <li data-action="set" data-value="friends" data-text="Friends">Friends</li>
              <li data-action="set" data-value="family" data-text="Family">Family</li>
              <li data-action="set" data-value="friendsandfamily" data-text="Friends &amp; Family" className="ui-dropdown-item-selected">Friends &amp; Family</li>
            </ul>
            <div className="ui-dropdown-shim" />
          </div>
          <span className="truncate no-outline" data-action="toggle" aria-haspopup="true" aria-expanded="false"> Friends & Family ::after </span>
          <span className="ui-dialog-arrow">
            {' '}
            == $0
            ::after
          </span>

          <li data-action="set" data-value="public" data-text="Public">Public</li> */}
          <span className="space" />
          <DropdownPrivacy />
        </div>
        {/* <i class="fad fa-tag"></i>
        <i class="fas fa-tag"></i> */}
      </div>
    </>
  );
}

export default EditModal;
