{
  // union types : OR

  type Direction = "left" | "right";
  function move2(direction: Direction) {
    console.log(direction);
  }

  move("left");

  type FontSize = 1 | 10 | 100;
  const font: FontSize = 10;

  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login2(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in",
      },
    };
  }

  function printLoginState2(state: LoginState) {
    if (state.result === "success") {
      console.log("성공");
    } else {
      console.log("실패");
    }
  }
  //
}
