import React, { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";
import './App.css';
import Slider from './Components/Slider'




function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <><>
      
    </><div className="App">

        <button
          className="openModalBtn"
          onClick={() => {
            setModalOpen(true);
          } }
        >
          Open
        </button>
        

        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div></>
    
  );
  
}

export default App;
