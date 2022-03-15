{
  // union types : OR

  type Direction = "left" | "right";
  function move(direction: Direction) {
    console.log(direction);
  }

  move("left");

  type FontSize = 1 | 10 | 100;
  const font: FontSize = 10;

  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: "logged in",
      },
    };
  }

  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log("성공");
    } else {
      console.log("실패");
    }
  }
}
