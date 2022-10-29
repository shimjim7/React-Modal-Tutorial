import React from "react";
import "./Modal.css";


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
        <div className="title">
          <h1>LOREM IPSUM</h1>
        </div>
        <div className="body">
          <p>ROOM NO: 123<br></br>
           LOCATION: XYZ<br></br>
           CAPACITY: ABC<br></br>
          FACILITIES: PQR</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
