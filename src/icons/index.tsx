import React from "react";

type IconProps = {
  name: "create-video" | "saved-videos";
  color?: string;
  size?: number;
};

export const Icon = ({ name, color = "#fff", size = 28 }: IconProps) => {
  return (
    <svg fill={color} width={size} height={size}>
      <use href={`/icons/sprite.svg#${name}`} />
    </svg>
  );
};
