import React from "react";
import { Button } from "../button/Button";
import { useModalToggle } from "../../context/ModalContext";

type HeaderProps = {
  text: "Create new task" | "Edit task" | "Change category";
};

export const ModalHeader = (props: HeaderProps) => {
  const { closeModal } = useModalToggle();
  return (
    <header className="flex justify-between align-middle">
      <h2 className="font-medium text-xl">{props.text}</h2>
      <Button type="button" variant="text" icon="close" onClick={closeModal} />
    </header>
  );
};
