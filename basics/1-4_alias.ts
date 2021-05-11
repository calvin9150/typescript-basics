{
  // Type Aliases : 새로운 타입 정의

  type text = string;
  const name: text = "gom";
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "jamg",
    age: 22,
  };

  // String literal types
  type Name = "name";
  // const jang: Name = "wonbae"; 🚫 타입으로 지정한 문자열 그 자체만 사용가능
  const jang: Name = "name";
}
