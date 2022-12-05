import React from "react";
import classes from "./MyModal.module.css";

const MyModal = ({ children, modal, setModal }) => {
  const modalClassses = [classes.myModal];
  if (modal) {
    modalClassses.push(classes.active);
  }
  return (
    <div className={modalClassses.join(" ")} onClick={() => setModal(false)}>
      <div
        className={classes.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
