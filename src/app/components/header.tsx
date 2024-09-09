"use client";

import React, { useState } from 'react';

const Header = () => {
  
const [howToPlay, setHowToPlay] = useState(false);

const toggleHowToPlay = () => {
  setHowToPlay(!howToPlay);
};


  return (
    <>
      <header className="flex items-center bg-blue-700 justify-between p-4">
        <h1 className="">Top Trumps</h1>
        <button className="rounded-full bg-blue-700 text-white  border-2 border-white-500 rounded  h-8 w-8" onClick={toggleHowToPlay}>ℹ️</button>
      </header>
      {howToPlay && (
        <div className="bg-blue-700 text-white p-4">
          <h2>How to play</h2>
          <p>Click on a card to select a category. The player with the highest value in that category wins the round.</p>
          <p>Play continues until one player has all the cards.</p>
        </div>
      )}
    </>
  );
};

export default Header;