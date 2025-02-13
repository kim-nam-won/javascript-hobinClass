// 모듈이 아닌 일반적인 자바스크립트 변수 선언은 다른 파일에서 접근이 가능하기때문에 중복선언이 안된다.
// 하지만 파일 확장자 명을 mjs 변경하고, type을 module로 선언하면 모듈로 인식되어 중복선언이 된다.
// 각자 파일이 모듈로 인식되어 각자의 스코프를 가지게 된다.
// let num = 35;
// console.log(num);

export const num = 35;

export function add(num1, num2) {
  return num1 + num2;
}

export function User(name) {
  this.name = name;
}

// 하나씩 export 번거롭다면 아래처럼 한번에 export 가능
// export { num, add, User };
// 내보내고자 하는 값이 단 1개라면 맨아래쪽에 export default 가능 하지만 export default는 const, let,var 키워드는 사용할수없다.
// export default 한 파일은 import 할때 중괄호 없이 import 가능하다.
// 예시 import testModule from "./test.mjs";
