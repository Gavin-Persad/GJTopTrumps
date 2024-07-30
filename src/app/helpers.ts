export function sum(a: number, b: number): number {
  return a + b;
}

interface shuffledCards {
  playerCards: playerCard[];
  computerCards: playerCard[];
}

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

export function shuffleAndSplitCards(data: playerCard[]) {
  const shuffledData: playerCard[] = [...data].sort(() => Math.random() - 0.5);
 

  const player: playerCard[] = [];
  const computer: playerCard[] = [];

  for (let i = 0; i < shuffledData.length; i++) {
    if (i % 2 === 0) {
      player.push(shuffledData[i]);
    } else {
      computer.push(shuffledData[i]);
    }
  }
  // console.log(player);
  return { playerCards: player, computerCards: computer };
}

export function disp(arr_names: string[]) {
  var names: string[] = [];

  for (var i = 0; i < arr_names.length; i++) {
    names.push(arr_names[i]);
  }
  return names;
}

export function arrayLength(arr: string[]) {
  const length: number = arr.length;
  return length;
}
