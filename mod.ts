import { createElement, useState } from "react";

interface CardProps {
  title: string;
}

const Card = (props: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return createElement(
    "div",
    {
      style: {
        padding: "1rem",
        border: "1px solid #ccc",
        backgroundColor: isHovered ? "#f5f5f5" : "white"
      },
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    },
    createElement("h2", null, props.title)
  );
};

export default Card;