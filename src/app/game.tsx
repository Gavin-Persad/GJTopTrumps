"use client";

import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import { shuffleAndSplitCards } from "./helpers";
import { statTitles } from "./playerData";
import databaseCards from "../../playerDatabase.json";

const Game = () => {
  interface playerCard {
    id: number;
    name: string;
    facts: {
      age: number;
      country: number; // country id num
      position: string;
      club: number; // club id number
    };
    image: number; // player id number
    rating: number;
    attributes: {
      stat1: number;
      stat2: number;
      stat3: number;
      stat4: number;
      stat5: number;
      stat6: number;
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
    // const stringifiedData = JSON.parse(databaseCards);
    const allShuffledCards = shuffleAndSplitCards(databaseCards);
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
        />
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Game;
