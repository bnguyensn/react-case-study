import React from 'react';
import './styles.css';
import LikeButton from './components/like-button/LikeButton';
import LightSwitch from './components/light-switch/LightSwitch';
import ColorBox from './components/color-box/ColorBox';

export default function App() {
  return (
    <div className="app">
      <section className="app-section">
        <h2>1. Light Switch</h2>
        <LightSwitch />
      </section>
      <section className="app-section">
        <h2>2. Like Button</h2>
        <LikeButton />
      </section>
      <section className="app-section">
        <h2>3. Color Box</h2>
        <ColorBox />
      </section>
    </div>
  );
}
