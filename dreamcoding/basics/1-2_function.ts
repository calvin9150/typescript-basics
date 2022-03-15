{
  // JS
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TS
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JS
  function jsFetchNum(id) {
    // code.......
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TS
  function fetchNum(id: string): Promise<number> {
    // code........
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // js => ts
  // optional parameter
  function printName(firstName: string, lastName: string) {
    console.log(firstName);
    console.log(lastName);
  }

  // printName("gom"); ❌ ERROR! 2개의 인자를 전달해야 하는데 1개만 전달해서 오류
  function optionalPrintName(firstName: string, lastName?: string) {
    // 타입뒤에 ?를 붙이면.. 타입이 맞지않아도 되고 인자를 전달하지 않아도 됨.
    console.log(firstName);
    console.log(lastName);
  }
  optionalPrintName("gom");

  // Default parameter
  function printMsg(message: string = "default message") {
    console.log(message);
  }
  printMsg();

  // Rest parameter
  function addNumbers(...nums: number[]): number {
    return nums.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 5));
  console.log(addNumbers(1, 2, 3, 4, 5));
}
