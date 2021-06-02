function thisIsGeneric<T>(arg: T): T {
  return arg;
}

let ouput = thisIsGeneric<string>('mystring');
console.log(ouput); // 'mystring'
//Generic은 any를 쓰는 것과 차이가 있음     any는 number를 반환하여도 any타입이 반환한다는 정보를 얻게 된다.

interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
//제네릭 타입의 매개변수를 인터페이스의 매개변수로도 사용이 가능하다.