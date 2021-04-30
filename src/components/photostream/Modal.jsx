import React,{useState,useEffect} from "react"
import './EditInfo.css'

function Modal(props){

    return (
        <div className="modal__backdrop">
            <div className="modal__container">
                <h3 className="modal__title">I'm a modal!</h3>
                <p>
                You cannot reverse this action. Are you sure you want to permanently delete this photo?
                </p>
                <button type="button" onClick={props.onRequestClose}>
                    Cancel
                </button>
                <button type="button" onClick={ () =>{
                    props.onDelete();}}>
                    Confirm
                </button>
            </div>
        </div>
    );


}

export default Modal;