function sum(a: number, b: number): number {
  return a + b;
}

function substract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  return a / b;
}

const power = (a: number, b: number): number => a ** b;

export { sum, substract, multiply, divide, power };
