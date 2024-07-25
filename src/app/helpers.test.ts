import { sum } from "./helpers";
import { disp, arrayLength } from "./helpers";

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
  expect(arrayLength(myArray).toBe(3));
});
