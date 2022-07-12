import { divide, multiply, substract, sum } from "./index";

describe("math operations functions", () => {
  test("should sum", () => {
    const answer = sum(2, 4);
    expect(answer).toBe(6);
  });

  test("should substract", () => {
    const answer = substract(4, 2);
    expect(answer).toBe(2);
  });

  test("should multiply", () => {
    const answer = multiply(3, 3);
    expect(answer).toBe(9);
  });

  test("should divide", () => {
    const answer = divide(10, 5);
    expect(answer).toBe(2);
  });

  test.todo("should power by");
});
