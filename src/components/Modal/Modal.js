import React from 'react';
import './Modal.css'

const Modal = props => {
  const handleSubmit = function () {
    localStorage.setItem(props.id, props.description);
  }
  return (
    <div id="modal">
      <img src={props.url} alt='currentItem' />
      <div id='title'>{props.title}</div>
      <form>
        <input id='description' name='description' type="text" value={props.description} onChange={props.onChange} />
        <button onSubmit={handleSubmit()}>Save Description</button>
      </form>
      <button onClick={() => props.deselector()}>Back to All Thumbnails</button>
    </div>
  );
}
export default Modal;