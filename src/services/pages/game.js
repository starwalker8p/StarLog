import React from 'react';
import './games.css';

const GameInfo = () => {
  return (
    <div className="container">
      <header className="header">
        <img 
          src="path_to_your_image/Persona3Reload.jpg" 
          alt="Persona 3 Reload" 
          className="game-image"
        />
        <button className="login-button">Log in to access rating features</button>
      </header>
      <main className="main-content">
        <section className="game-info">
          <h1>Persona 3 Reload</h1>
          <p>Released on Feb 02, 2024 by P Studio, Sega</p>
          <p>A remake of Persona 3</p>
          <p>
            Step into the shoes of a transfer student thrust into an unexpected fate
            when entering the hour "hidden" between one day and the next. Awaken
            an incredible power and chase the mysteries of the Dark Hour, fight for
            your friends, and leave a mark on their memories forever. Persona 3
            Reload is a captivating reimagining of the genre-defining RPG, reborn for
            the modern era.
          </p>
        </section>
        <section className="rating-info">
          <div className="rating">
            <span className="rating-value">4.5</span>
            <div className="rating-chart">
              {/* Add your rating chart here */}
            </div>
          </div>
          <div className="stats">
            <p>Plays: 11K</p>
            <p>Playing: 3.9K</p>
            <p>Backlogs: 6.1K</p>
            <p>Wishlist: 7.8K</p>
          </div>
        </section>
        <section className="platforms">
          <h3>Released on</h3>
          <p>Windows PC, PlayStation 4, Xbox One, PlayStation 5, Xbox Series</p>
        </section>
        <section className="genres">
          <h3>Genres</h3>
          <p>Adventure, RPG, Strategy, Turn Based Strategy</p>
        </section>
      </main>
    </div>
  );
};

export default GameInfo;
