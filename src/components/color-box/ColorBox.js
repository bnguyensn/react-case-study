/**
 * GitHub's colors API:
 * --------------------
 *
 * Main documentation: https://noopschallenge.com/challenges/hexbot
 *
 * Short summary:
 * 1. Send a /GET request to: https://api.noopschallenge.com/hexbot
 * 2. You'll receive back a JSON object containing a random color value like
 * this:
 *    {
 *      "colors": [
 *        {
 *          "value": "#821160"
 *        }
 *      ]
 *    }
 */

import React from 'react';
import './color-box.css';

export default function ColorBox() {
  const handleClick = () => {
    // 🤔
  };

  return <div className="color-box" role="button" onClick={handleClick} />;
}
