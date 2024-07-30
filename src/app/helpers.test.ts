import { sum } from "./helpers";
import { arrayLength, shuffleAndSplitCards } from "./helpers";

test("sum adds two numbers correctly", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(-5, 10)).toBe(5);
  expect(sum(0, 0)).toBe(0);
});

test("myArray should match the expected array", () => {
  const myArray: string[] = ["apple", "banana", "cherry"];
  expect(myArray).toEqual(["apple", "banana", "cherry"]);
});

test("returns correct array length", () => {
  const myArray: string[] = ["apple", "banana", "cherry"];
  expect(arrayLength(myArray)).toBe(3);
});

test("checking shuffled array length", () => {
  const mockData: number[] = [{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}];
  const shuffledDeck = shuffleAndSplitCards(mockData);
  expect(shuffledDeck.playerCards.length).toBe(5);
  expect(shuffledDeck.computerCards.length).toBe(5);
});
