import React, { useState } from "react";

const Card = ({ title, description, imageUrl, onAction, actionLabel = "Learn More" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return React.createElement(
    "div", 
    {
      className: "card",
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      style: { 
        transform: isHovered ? 'translateY(-2px)' : 'none',
        transition: 'transform 0.2s ease'
      }
    },
    imageUrl && React.createElement("img", { src: imageUrl, alt: title }),
    React.createElement(
      "div",
      { className: "content" },
      React.createElement("h3", null, title),
      description && React.createElement("p", null, description),
      onAction && React.createElement(
        "button",
        { onClick: onAction },
        actionLabel
      )
    )
  );
};

export default Card;