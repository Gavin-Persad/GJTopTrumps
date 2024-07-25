import { sum } from "./helpers";
import { disp } from "./helpers";

test("sum adds two numbers correctly", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(-5, 10)).toBe(5);
  expect(sum(0, 0)).toBe(0);
});

test("returns names array correctly", () => {
  const nameArray: Array<string> = ["Mary", "Tom", "Jack", "Jill"];
  it("should return list of names", () => {
    expect(disp(nameArray).toBe());
  });
});
