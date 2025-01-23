import React from "react";

import PlusIcon from "../../../public/plus.svg";
import SaveIcon from "../../../public/save.svg";
import CloseIcon from "../../../public/close.svg";
import MoreIcon from "../../../public/more.svg";
import EditIcon from "../../../public/edit.svg";
import DeleteIcon from "../../../public/trash.svg";
import MoveIcon from "../../../public/arrow-up-right.svg";

type ButtonProps = {
  variant: "filled" | "text";
  icon?: "plus" | "save" | "close" | "more" | "edit" | "delete" | "move";
  children?: string;
  type?: "submit" | "button";
  onClick?: () => void;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  icon,
  children,
  type,
  onClick,
  className,
}) => {
  const getIconSrc = (
    icon: "plus" | "save" | "close" | "more" | "edit" | "delete" | "move"
  ): { src: string; alt: string } => {
    switch (icon) {
      case "plus":
        return { src: PlusIcon, alt: "Icon to create task" };
      case "save":
        return { src: SaveIcon, alt: "Icon to save changes" };
      case "close":
        return { src: CloseIcon, alt: "Icon to close modal" };
      case "more":
        return { src: MoreIcon, alt: "Icon to more actions" };
      case "edit":
        return { src: EditIcon, alt: "Icon to edit task" };
      case "delete":
        return { src: DeleteIcon, alt: "Icon to delete task" };
      case "move":
        return {
          src: MoveIcon,
          alt: "Icon to move task to a different category",
        };
      default:
        throw new Error("Unknown icon type");
    }
  };

  const iconDetails = icon ? getIconSrc(icon) : null;

  return (
    <button
      onClick={onClick}
      type={type}
      className={`w-fit flex justify-start items-center gap-x-2 border-none rounded text-center no-underline cursor-pointer py-3 px-6 ${
        variant === "filled"
          ? "text-white bg-black hover:bg-primary-hoverColor"
          : "text-black bg-transparent "
      }
      ${className}`}
    >
      {iconDetails && <img src={iconDetails?.src} alt={iconDetails?.alt} />}
      {children}
    </button>
  );
};
