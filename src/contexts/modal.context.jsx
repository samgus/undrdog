import React, { useContext, useState } from "react";
import Modal from "../components/modal/modal.component";

const ModalContext = React.createContext();

// can be used on many pages
export function ModalProvider({ children }) {
  const [modal, setModal] = useState({ modal: null, show: false });

  const value = {
    modal,
    setModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {modal.show && (
        <Modal name={modal.modal} closeIcon={modal.closeIcon} transparent={modal.transparent}>
          {modal.children}
        </Modal>
      )}{" "}
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
