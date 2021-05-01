/* eslint-disable linebreak-style */
import React from 'react';
import './DropdownPrivacy.css';

function DropdownPrivacy() {
  return (
    <>
      {/* <div className="styled"> */}

      {/* <select className="form-control" data-style="btn-primary"> */}
      <select>
        <span className="styled" />
        <option value="Public">Public</option>
        <option value="Private">Private</option>
        <option value="Family">Family</option>
        <option value="Friends">Friends</option>
        <option value="Friends & Family">Friends & Family</option>
      </select>

      {/* </div> */}
    </>
  );
}

export default DropdownPrivacy;
