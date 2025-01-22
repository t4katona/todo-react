import React from "react";

import PlusIcon from "../../../public/plus.svg";
import SaveIcon from "../../../public/save.svg";
import CloseIcon from "../../../public/close.svg";

type ButtonProps = {
  variant: "filled" | "text";
  icon?: "plus" | "save" | "close";
  children?: string;
  type?: "submit" | "button";
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  icon,
  children,
  type,
  onClick,
}) => {
  const getIconSrc = (
    icon: "plus" | "save" | "close"
  ): { src: string; alt: string } => {
    switch (icon) {
      case "plus":
        return { src: PlusIcon, alt: "Icon to create task" };
        break;
      case "save":
        return { src: SaveIcon, alt: "Icon to save changes" };
        break;
      case "close":
        return { src: CloseIcon, alt: "Icon to close modal" };
      default:
        throw new Error("Unknown icon type");
    }
  };

  const iconDetails = icon ? getIconSrc(icon) : null;

  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex justify-between items-center gap-x-1 border-none rounded text-center no-underline cursor-pointer py-3 px-6 ${
        variant === "filled"
          ? "text-white bg-black hover:bg-primary-hoverColor"
          : "text-black bg-transparent"
      }
      `}
    >
      {iconDetails && <img src={iconDetails?.src} alt={iconDetails?.alt} />}
      {children}
    </button>
  );
};
