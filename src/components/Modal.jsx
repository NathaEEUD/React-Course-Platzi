import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/components/Modal.scss';

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__container">
        <button className="modal__close-button" onClick={props.onClose}>X</button>
        {props.children}
      </div>
    </div>,
    document.getElementById('modal'),
  );
}

export default Modal;
