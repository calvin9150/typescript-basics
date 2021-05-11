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

// unknown ❌
let notSure: unknown = 0;
notSure = "암거나";
notSure = true; // 타입에 관계없이 다 가능.. 때문에 unknown은 지양.

// any ❌
let anything: any = 0;
anything = "I'm shit";

// void
function print(): void {
  console.log("보이드");
  //   return "Adsds";  ❌ ERROR !!!!! void 타입은 무언가를 반환할 수 없다.
}
// ㄴ 변수에 void 선언 시, undefined만 할당 가능하므로 쓰지않는다.

// never
function throwError(message: string): never {
  // ㄴ 반환없음
  throw new Error(message);
  // while(true){}
}

// object ❌ 객체도 가능하면 구체적인 타입을 명시하는게 좋다.
let obj: object;
function someObject(obj: object) {}
someObject({ name: "gom" });
