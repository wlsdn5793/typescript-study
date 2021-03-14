function sendGreeting(message, userName) {
    if (message === void 0) { message = 'Hello'; }
    console.log(message + ", " + userName);
}
sendGreeting();
sendGreeting('Good morning');
sendGreeting('Bye', 'Lee');
/*매개변수와 인자의 수가 일치하지 않으면 에러 메서지가 출력된다.
선택적 매개변수의 오른쪽에 오는 매개변수들은 모두 선택적 매개변수여야 한다. */
//message 매개변수는 Hello가 기본 값이기에 string을 써줄 필요가 없다.
