import { useState } from "react";
import Modal from "./modal";
import classes from './index.module.css'

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose(){
    setShowModalPopup(false)
  }

  return (
    <div className={classes.modalContainer}>
      {!showModalPopup && (
        <div className={classes.buttonWrapper}>
          <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
        </div>
      )}
      {showModalPopup && (
        <Modal
          header={<h2>Customized Header</h2>}
          footer={<h2>Customized Footer</h2>}
          onClose={onClose}
          body={<h2>Customized Body Content</h2>}
        />
      )}
    </div>
  );
}
