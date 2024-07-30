"use client";

import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import { shuffleAndSplitCards } from "./helpers";
import { footballPlayerData, statTitles } from "./playerData";

const Game = () => {
  interface playerCard {
    id: number;
    name: string;
    facts: {
      age: number;
      country: string;
      position: string;
      club: string;
    };
    image: string;
    rating: number;
    attributes: {
      stat1: number;
      stat2: number;
      stat3: number;
      stat4: number;
      stat5: number;
      stat6: number;
      stat7: number;
    };
  }
  // interface shuffledCards {
  //   playerCards: playerCard[];
  //   computerCards: playerCard[];
  // }
  const [playerCards, setPlayerCards] = useState<playerCard[]>([]);
  const [computerCards, setComputerCards] = useState<playerCard[]>([]);
  // on page load useEffect[], shuffle (x) cards
  useEffect(() => {
    const allShuffledCards = shuffleAndSplitCards(footballPlayerData);
    // assign player and computer cards (state arrays)
    setPlayerCards(allShuffledCards.playerCards);
    setComputerCards(allShuffledCards.computerCards);
    // display 1st player card
  }, []);


  return (
    <div>
      {playerCards.length > 0 ? (
        <Card
          playerData={playerCards[0]}
          statTitle1={statTitles.statTitle1}
          statTitle2={statTitles.statTitle2}
          statTitle3={statTitles.statTitle3}
          statTitle4={statTitles.statTitle4}
          statTitle5={statTitles.statTitle5}
          statTitle6={statTitles.statTitle6}
          statTitle7={statTitles.statTitle7}
        />
      ) : (
        "empty"
      )}
    </div>
  );
};

export default Game;
