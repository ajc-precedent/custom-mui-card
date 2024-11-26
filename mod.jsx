import React, { useState } from "react";  // Regular React import

const Card = ({ title, description, imageUrl, onAction, actionLabel = "Learn More" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div 
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        transform: isHovered ? 'translateY(-2px)' : 'none',
        transition: 'transform 0.2s ease'
      }}
    >
      {imageUrl && (
        <img src={imageUrl} alt={title} />
      )}
      <div className="content">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        {onAction && (
          <button onClick={onAction}>
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;