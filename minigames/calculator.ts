console.log(calculator("add", 1, 3));
console.log(calculator("subtract", 1, 3));
console.log(calculator("multiply", 1, 3));
console.log(calculator("divide", 1, 3));
console.log(calculator("remainder", 1, 3));

type Command = "add" | "subtract" | "multiply" | "divide" | "remainder";
function calculator(command: Command, a: number, b: number): number {
  switch (command) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    case "remainder":
      return a % b;
    default:
      throw Error("unknown command");
  }
}
