import React from 'react';
import './Modal.css'

const Modal = props => (
    <div className="modal">
    Current Item
    <img src={props.current.url} alt={props.current.title}/>
    <button onClick={props.deselect}>Back to Home </button>
    </div>
  );
  
  export default Modal;