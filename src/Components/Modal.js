import React from "react";
import "./Modal.css";
import Slider from './Slider'
function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
        </div>
        <div className="title">
          <h5 align = "left">Seminar Hall</h5>
          <div class = "slider_body">
          <Slider/>
          </div>
         
        </div>
        <div className="body">
        <span className="font-link"></span>
         
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
