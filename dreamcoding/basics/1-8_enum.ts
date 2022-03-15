{
  // Enum : 여러 상수를 한 곳에 정의
  const monday = 1;
  const tuesday = 2;
  // 위에처럼 따로 선언 및 초기화가 가능하다. 하지만..
  // 자바스크립트에서 최대한 enum 표현
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  //타입스크립트 enum
  enum DAYS {
    Monday,
    Tuesday,
    Wednesday,
  }
  console.log(DAYS.Tuesday); // 1

  enum DAYS2 {
    Monday = "월욜",
    Tuesday = "화욜",
    Wednesday = "수욜",
  }
  console.log(DAYS2.Tuesday); // 화욜
}
