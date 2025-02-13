// 모듈이 아닌 일반적인 자바스크립트 변수 선언은 다른 파일에서 접근이 가능하기때문에 중복선언이 안된다.
// 하지만 파일 확장자 명을 mjs 변경하고, type을 module로 선언하면 모듈로 인식되어 중복선언이 된다.
// 각자 파일이 모듈로 인식되어 각자의 스코프를 가지게 된다.
// const num = 20;
// console.log(num);

// import { num, add, User } from "./test.mjs"; // 이렇게 해도 되고 아래처럼 해도 된다.
import * as testModule from "./test.mjs"; // 이렇게 하면 경로의 모듈 모두 가져올 수 있다. testModule은 경로에 모든 모듈의 객체 변수가 됨됨
// console.log(num);
// console.log(add(5, 10));
// console.log(new User("홍길동"));

console.log(testModule.num);
console.log(testModule.add(5, 10));
console.log(new testModule.User("김남원"));
