// test helper functions
export function sum(a: number, b: number): number {
  return a + b;
}


// Interfaces for player card data
export interface Attributes {
  [key: string]: number;
}

export interface playerCard {
  id: number;
  name: string;
  facts: {
    age: number;
    country: number;
    position: string;
    club: number;
  };
  image: number;
  rating: number;
  attributes: Attributes;
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
