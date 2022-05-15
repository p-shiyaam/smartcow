import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  additionalClass?: string;
  btntype?: "primary" | "secondary" | "default";
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonClass = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  default: "btn-default",
};

const Button: React.FC<ButtonProps> = ({
  text,
  additionalClass = "",
  btntype = "primary",
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={`${ButtonClass[btntype]} ${additionalClass}`}
      type="submit"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
