import React,{useState} from 'react'

function NewAlbumModal(props){

    const [inputTitle, setInputTitle] = useState("");
    const [inputDescription , setInputDescription] = useState("")

    function handleTitleChange(event) {
        const newTitle = event.target.value;
        setInputTitle(newTitle);
      }
    
      function handleDescriptionChange(event) {
        const newDescription  = event.target.value;
        setInputDescription(newDescription);
      }

    return (
        <div className="modal__backdrop" >
            <div className="new-modal-container">
                <span className="close" onClick={props.onRequestClose}>&times;</span>
                <h3 className="modal__title">Create a new album</h3>
                <div id="input-format">
                    <div class="form-group" >
                        <input type="text" className="form-control" placeholder="Album name" onChange={handleTitleChange}></input> 
                    </div>
                    <div class="form-group">
                        <textarea className="form-control" rows="3" placeholder="Description (optional)" onChange={handleDescriptionChange} ></textarea> 
                    </div>
                </div>
                <br/><br/><br/><br/>
                <button id="create" type="button" onClick={ () =>{
                    props.onCreate(inputTitle,inputDescription);}}>
                    Create
                </button>
                <button id="cancel" type="button" onClick={props.onRequestClose}>
                    Cancel
                </button>

            </div>
        </div>
    );
}

export default NewAlbumModal;