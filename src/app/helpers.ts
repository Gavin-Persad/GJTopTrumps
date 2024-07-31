// test helper functions
export function sum(a: number, b: number): number {
  return a + b;
}

// interface for player card
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

// shuffle and split cards  (player and computer)
export function shuffleAndSplitCards(data: playerCard[]) {
  // shuffle cards
  const shuffledData: playerCard[] = [...data].sort(() => Math.random() - 0.5);

  // create player and computer card arrays
  const player: playerCard[] = [];
  const computer: playerCard[] = [];

  // split shuffled cards into player and computer arrays
  for (let i = 0; i < shuffledData.length; i++) {
    if (i % 2 === 0) {
      player.push(shuffledData[i]);
    } else {
      computer.push(shuffledData[i]);
    }
  }

  // return player and computer card arrays
  return { playerCards: player, computerCards: computer };
}
