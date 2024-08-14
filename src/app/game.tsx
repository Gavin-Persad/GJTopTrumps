"use client";

import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import ComputerCard from "./components/ComputerCard";
import { playerCard, shuffleAndSplitCards } from "./helpers";
import { statTitles } from "./playerData";
import databaseCards from "../../playerDatabase.json";

const Game = () => {
  const [playerCards, setPlayerCards] = useState<playerCard[]>([]);
  const [computerCards, setComputerCards] = useState<playerCard[]>([]);
  const [statClicked, setStatClicked] = useState<string>("");
  const [gameEnded, setGameEnded] = useState<boolean>(false);
  let [rounds, setRounds] = useState<number>(0);

  // on page load useEffect[], shuffle (x) cards
  useEffect(() => {
    // const stringifiedData = JSON.parse(databaseCards);
    const allShuffledCards = shuffleAndSplitCards(databaseCards);
    // assign player and computer cards (state arrays)
    setPlayerCards(allShuffledCards.playerCards);
    setComputerCards(allShuffledCards.computerCards);
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
      //! in a non null assertion operator, the value is guaranteed to be non-null and non-undefined
      const playerCard: playerCard = playerCards.shift()!;
      const computerCard: playerCard = computerCards.shift()!;
      setComputerCards([...computerCards]);
      setPlayerCards([...playerCards, playerCard, computerCard]);
      if (computerCards.length === 0) {
        setGameEnded(true);
      }
    } else {
      console.log(
        `Computer wins! Player had ${
          playerCards[0].attributes[`${stat}`]
        } - Computer had ${computerCards[0].attributes[`${stat}`]}`
      );
      //! in a non null assertion operator, the value is guaranteed to be non-null and non-undefined
      const playerCard: playerCard = playerCards.shift()!;
      const computerCard: playerCard = computerCards.shift()!;
      setPlayerCards([...playerCards]);
      setComputerCards([...computerCards, playerCard, computerCard]);
      if (playerCards.length === 0) {
        setGameEnded(true);
      }
    }
    setStatClicked("");
  }

  // console.log(playerCards);
  // console.log(computerCards);

  // potential of double render because of resetting stat click in handlecompare func
  useEffect(() => {
    // console.log(playerCards);
    if (statClicked.length > 0) {
      // console.log(
      //   `stat clicked = ${statClicked} which is of type ${typeof statClicked}`
      // );
      handleCompare(statClicked);
    }
  }, [statClicked]);

  return (
    <>
      <div>
        {playerCards.length > 0 && !gameEnded ? (
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
        ) : playerCards.length === 0 && gameEnded ? (
          "Computer Wins"
        ) : computerCards.length === 0 && gameEnded ? (
          "Player Wins"
        ) : (
          "Loading"
        )}
      </div>
      <div>
        {computerCards.length > 0 && !gameEnded ? (
          <ComputerCard
            playerData={computerCards[0]}
            statTitle1={statTitles.statTitle1}
            statTitle2={statTitles.statTitle2}
            statTitle3={statTitles.statTitle3}
            statTitle4={statTitles.statTitle4}
            statTitle5={statTitles.statTitle5}
            statTitle6={statTitles.statTitle6}
          />
        ) : (
          "test"
        )}
      </div>
    </>
  );
};

export default Game;
