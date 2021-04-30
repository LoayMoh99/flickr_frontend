/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import './Modal.css';
import React from 'react';

function Modal() {
  return (
    <>
      <h2>Bottom Modal</h2>

      {/* <!-- Trigger/Open The Modal --> */}
      {/* <button id="myBtn">Open Modal</button> */}
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal" data-backdrop="false">Large modal</button>
      {/* <!-- The Modal --> */}
      <div id="myModal" className="modal">
        {/* <div className="modal modal-left fade"
        id="bottom_modal" tabIndex="-1" role="dialog" aria-labelledby="bottom_modal"> */}
        {/* <!-- Modal content --> */}
        <div className="modal-content">
          <div className="modal-header">
            <span className="close">&times;</span>
            <h2>Modal Header</h2>
          </div>
          <div className="modal-body">
            <p>Some text in dal Body</p>
            <p>Some other text...</p>
          </div>
          <div className="modal-footer">
            <h3>Modal Footer</h3>
          </div>
        </div>

      </div>

      {/* <script>
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
</script> */}
    </>
  );
}

export default Modal;
