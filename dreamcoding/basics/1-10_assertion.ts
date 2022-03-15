{
  // type assertion

  function isStrFunc(): any {
    return "hello";
  }

  const result = isStrFunc();
  console.log((result as string).length); //5
  console.log((<string>result).length); //5

  function isStrFunc2(): any {
    return 2;
  }

  const result2 = isStrFunc2();
  console.log((result2 as string).length); // undefined

  const btn = document.querySelector("class")!; // 요소가 온다고 확신해버리기
}
