import React from "react";

type ButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  type = "submit",
  disabled = false,
}) => {
  return (
    <button className="btn-submit" type={type} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
