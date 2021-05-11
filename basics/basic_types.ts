// ts types

// number
const num: number = -11;

// string
const str: string = "hi";

// boolean
const bool: boolean = false;

// undefined
let un: undefined; // 어떤 값으로도 재할당이 불가능하므로 undefined 단독은 쓸일이 없다.
let age: number | undefined;
age = undefined;
age = 22;

function find(): number | undefined {
  // 대충 조건에 부합하는 것을 못찾았다는 코드가 있다고 치고
  return undefined;
}

// null
let person: null; // undefined과 마찬가지로 단독으론 안쓴다.
let person2: string | null; // 보편적론 undefined를 더 많이 쓴다.
