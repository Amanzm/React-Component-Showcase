import React, { useState } from "react";
import ModalLogic from "./ModalLogic";
function Modal() {
  const [cli, setCli] = useState(false);

  const handleClose = () => {
    setCli(false);
  };
  const handleClick = () => {
    setCli(true);
  };
  return (
    <div className="container  mt-3 py-4 text-center ">
      <div className="d-flex p-5 justify-content-center ">
        {!cli && (
          <button className="btn btn-outline-primary" onClick={handleClick}>
            Show Modal
          </button>
        )}

        {cli && (
          <ModalLogic
            head={"I am Modal Head"}
            body={"I am Modal text"}
            foot={"I am Modal Footer"}
            handleClose={handleClose}
          />
        )}
      </div>
    </div>
  );
}

export default Modal;
