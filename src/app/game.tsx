"use client";

import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import { playerCard, shuffleAndSplitCards } from "./helpers";
import { statTitles } from "./playerData";
import databaseCards from "../../playerDatabase.json";

const Game = () => {
  const [playerCards, setPlayerCards] = useState<playerCard[]>([]);
  const [computerCards, setComputerCards] = useState<playerCard[]>([]);
  const [playerActiveCard, setPlayerActiveCard] = useState<playerCard>();
  const [computerActiveCard, setComputerActiveCard] = useState<playerCard>();
  const [statClicked, setStatClicked] = useState<string>("");

  // on page load useEffect[], shuffle (x) cards
  useEffect(() => {
    // const stringifiedData = JSON.parse(databaseCards);
    const allShuffledCards = shuffleAndSplitCards(databaseCards);
    // assign player and computer cards (state arrays)
    setPlayerCards(allShuffledCards.playerCards);
    setComputerCards(allShuffledCards.computerCards);
    // display 1st player card
    setActiveCards();
  }, []);

  // func to compare stat clicked to active Computer card same stat
  function handleCompare(stat: string) {
    if (
      playerCards[0].attributes[`${stat}`] >
      computerCards[0].attributes[`${stat}`]
    ) {
      console.log(
        `Player wins! Player had ${
          playerCards[0].attributes[`${stat}`]
        } - Computer had ${computerCards[0].attributes[`${stat}`]}`
      );
    } else {
      console.log(
        `Computer wins! Player had ${
          playerCards[0].attributes[`${stat}`]
        } - Computer had ${computerCards[0].attributes[`${stat}`]}`
      );
    }
    // console.log(playerCards[0].attributes["stat1"]);
  }

  useEffect(() => {
    // console.log(playerCards);
    if (statClicked.length > 0) {
      console.log(
        `stat clicked = ${statClicked} which is of type ${typeof statClicked}`
      );
      handleCompare(statClicked);
    }
  }, [statClicked]);

  // function to set active player and pc cards
  function setActiveCards() {
    setPlayerActiveCard(playerCards[0]);
    setComputerActiveCard(computerCards[0]);
  }

  // add card to array of winner
  function addToDeck() {}

  // useEffect to fire after array change?

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
          setStatClicked={(stat: string) => {
            return setStatClicked(stat);
          }}
        />
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Game;
