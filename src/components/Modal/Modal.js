import React from 'react';
import './Modal.css'

const Modal = props => (
    <div id="modal">
      <img src={props.url} alt='currentItem'/>
      <div id='title'>{props.title}</div>
      <form>
        <input id='description' name='description' type="text" value={props.description} onChange={props.onChange}/>
      </form>
      <button onClick={() => props.deselector()}>Back to All Thumbnails</button>
    </div>
  );
  
  export default Modal;