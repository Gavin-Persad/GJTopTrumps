export function sum(a: number, b: number): number {
  return a + b;
}

export function shuffleAndSplitCards(data: number[]) {
  const shuffledData: number[] = [...data].sort(() => Math.random() - 0.5);

  const player: number[] = [];
  const computer: number[] = [];

  for (let i = 0; i < shuffledData.length; i++) {
    if (i % 2 === 0) {
      player.push(shuffledData[i]);
    } else {
      computer.push(shuffledData[i]);
    }
  }
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
