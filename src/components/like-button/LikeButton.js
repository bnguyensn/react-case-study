import React from 'react';
import './like-button.css';

export default function LikeButton() {
  const toggleLikeButton = () => {
    // 🤔
  };

  return (
    <div className="like-button" role="button" onClick={toggleLikeButton}>
      Like - 100
    </div>
  );
}
