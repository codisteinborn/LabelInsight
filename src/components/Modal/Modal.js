import React from 'react';
import './Modal.css'

const Modal = props => (
    <div className="modal">
      <img src={props.url} alt='currentItem'/>
      <form>
        <input type="text" placeholder='Add Caption Here' onChange={this.onChange}/>
      </form>
      <button onClick={() => props.deselector()}>Back to Home </button>
    </div>
  );
  
  export default Modal;