// Type inference

let text = "Hello";
// text = 11; // ERROR! 위에서 자동으로 String 타입으로 정해놨기 때문.

function print(msg = "hihihi") {
  // msg 역시 자동으로 string타입으로 됨
  console.log(msg);
}
print(); // hihihi
print("dasdds"); // dasdds

function add(x: number, y: number) {
  return x + y;
}

// 이렇게 해당 값으로 알아서 타입을 정해주지만 정확히 명시해주는게 좋음.
// 아래처럼...

function add2(x: number, y: number): number {
  return x + y;
}
