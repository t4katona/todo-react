import PlusIcon from "../../assets/plus.svg";
import SaveIcon from "../../assets/save.svg";
import CloseIcon from "../../assets/close.svg";

type ButtonProps = {
  variant: "filled" | "text";
  icon?: "plus" | "save" | "close";
  children?: string;
  onClick: () => void;
};

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

export const Button = (props: ButtonProps) => {
  const iconDetails = props.icon ? getIconSrc(props.icon) : null;
  return (
    <button
      onClick={props.onClick}
      className={`flex justify-between items-center gap-x-1 border-none rounded text-center no-underline cursor-pointer py-3 px-6 ${
        props.variant === "filled"
          ? "text-white bg-black hover:bg-primary-hoverColor"
          : "text-black bg-transparent"
      }`}
    >
      {iconDetails && <img src={iconDetails?.src} alt={iconDetails?.alt} />}
      {props.children}
    </button>
  );
};
