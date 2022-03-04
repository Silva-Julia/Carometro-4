import React from "react";
import "./Modal.css";
import setinha from '../../assets/img/setinha.png';

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="openBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button><img src={setinha} /></button>
        </div>
      </div>
    </div>
  );
}

export default Modal;