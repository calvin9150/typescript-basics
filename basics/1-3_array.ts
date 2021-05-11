{
  // array
  const fruits: string[] = ["apple", "banana"];
  const numbers: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {
    // fruits.push("orange"); 🚫ERROR!!! readonly는 읽기만 가능!
  }

  // Tuple : 배열에 서로 다른 타입의 데이터 담기.
  // ㄴ 사용이 권장되지는 않는다. 배열 인덱스마다 타입이 다르면 파악이 어렵다.
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
}
