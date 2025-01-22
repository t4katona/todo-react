import React, { useState } from "react";

export const useModalManager = () => {
  const [currentModal, setCurrentModal] = useState("");
  const [showModal, setShowModal] = useState(false);

  const openModal = (modalName: string): void => {
    setCurrentModal(modalName);
    setShowModal(true);
    console.log("inner: ", showModal);
  };

  const closeModal = (): void => {
    setCurrentModal("");
    setShowModal(true);
  };

  return {
    openModal,
    closeModal,
    currentModal,
    showModal,
  };
};
