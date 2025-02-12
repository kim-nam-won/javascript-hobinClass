// let num1 = "150";
// let num2 = 15.5;

// console.log(parseFloat(num1) + parseFloat(num2)); // 165.5

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

//null 병합 연산자 -> 변수에 기본값을 할당하고싶을때 사용한다.
// A ?? B
// let num1;
// let num2 = 10;
// console.log(num1 ?? 20);
// console.log(num2 ?? 20);

// 삼항 연산자
// A ? B : C

// let num = 101;
// let result = num % 2 === 0 ? "짝수" : "홀수";
// console.log(result);

// let num = "105";
// if (num < 101) {
//   console.log("101보다 작다");
// } else {
//   if (num === 101) {
//     console.log("숫자 101과 같다");
//   } else {
//     if (num == 101) {
//       console.log("문자 101과 같다");
//     } else {
//       console.log("101보다 크다");
//     }
//   }
// }

// switch case
// let animal = "cat";
// switch (animal) {
//   case "dog":
//     console.log("개");
//     break;
//   case "tiger":
//     console.log("호랑이");
//     break;
//   case "cat":
//     console.log("고양이");
//     break;
//   case "lion":
//     console.log("사자");
//     break;
//   default:
//     console.log("모르겠다");
// }

// let answer = "";
// let str1 = "hello";
// let str2 = "javascript";
// function connectStrings(str1, str2) {
//   return str1 + " " + str2; // 값을 반환
// }
// answer = connectStrings(str1, str2); // 반환값을 answer에 할당
// console.log(answer);
// // 출력결과 : hello javascript

// 전역, 지역 스코프(변수의 범위)
// let globalNum = 100;

// function testFunc() {
//   let innerNum = 200;
//   console.log(globalNum);
//   console.log(innerNum);
// }
// testFunc();
// console.log(globalNum);
// console.log(innerNum);

// 함수 스코프, 블록 스코프
// var는 함수 스코프, let, const는 블록 스코프
// function print() {
//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// print();
// var 는 함수 스코프이기 때문에 함수 내에서 선언된 변수는 함수 내에서만 유효하다.
// let, const는 자바스크립트 es6에서 도입됨, 블록 스코프이기 때문에 블록 내에서 선언된 변수는 블록 내에서만 유효하다.
// var 키워드가 변수를 중복해서 선언할수있는 이유는 함수 스코프를 가지며 호이스팅 특성을 가진다

// 호이스팅 변수 호이스팅, 함수 호이스팅이 있다.
// var 키워드로 선언된 변수는 호이스팅이 발생한다.
// let, const 키워드로 선언된 변수는 호이스팅이 발생하지 않는다.
// 함수 선언문은 호이스팅이 발생한다.
// 함수 표현식은 호이스팅이 발생하지 않는다. -> 이유는 함수를 변수에 할당하기 때문에 호이스팅 발생되지 않음.

// const add = (a, b) => a + b;

// console.log(add(1, 2));

// 콜백 함수
// const calculate = (a, b, callback) => {
//   let result = a + b;
//   callback(result);
// };

// const printResult = (result) => {
//   console.log("결과:" + result);
// };
// const doubleResult = (result) => {
//   console.log("결과에 2를 곱한값:" + result * 2);
// };
// calculate(10, 20, printResult);
// calculate(10, 20, doubleResult);

// const testFunc = (callback) => {
//   callback();
// };

// testFunc(() => {
//   console.log("함수 호출");
// });

// 객체를 생성하는 방법: 생성자 함수, 리터널
//생성자 함수 -> new 키워드를 사용하여 객체를 생성하는 함수
// let obj = new Object();
// console.log(obj);

// 리터널 -> 객체를 생성하는 방법
// let obj2 = {};
// console.log(obj2);

// 객체의 속성(property) -> 객체의 속성은 key와 value로 이루어져 있다.
// key는 문자열, value는 어떤 값이든 할당 가능
// key는 중복될 수 없다.
// key는 문자열이 아닌 다른 타입을 사용할 수 없다.

// let book = {
//   title: "자바스크립트",
//   author: "홍길동",
//   price: 10000,
//   category: "IT",
//   year: undefined,
//   color: function () {
//     console.log("red");
//   },
// };

// 객체의 값을 꺼내 사용하는 방법 점표기법, 괄호 표기법
// let car = {
//   name: "붕붕붕",
//   color: "red",
//   model: "소나타",
// };

// 점표기법 -> 객체이름름.키값 -> 객체 밸류을 반환한다
// console.log(car.name);
// console.log(car.color);

// 괄호 표기법 -> 객체이름["키값"] -> 객체 밸류을 반환한다
// 객체의 키값이 문자열이 아닌 경우에 사용한다.
// 객체의 키값이 고정되지 않고, 매개개변수로 받아서 사용해야 할 경우에 사용한다.
// console.log(car["name"]);
// console.log(car["color"]);

// const getValue = (key) => {
//   console.log(car[key]);
// };
// getValue("name");
// getValue("color");

// 객체의 속성 추가, 삭제, 수정
// 객체는 let, const로 선언하더라도 속성을 추가, 삭제, 수정이 가능하다.
// const로 선언하더라도 객체의 속성을 변경하는것은 const 변수의 고유의 아이디를 훼손하는 것이 아니기때문에
// 객체 속성값은 변경가능 하다.
// const cat = {
//   age: 2,
//   color: "black",
//   name: "야옹이",
// };
// 객체 속성 삭제제
// delete cat.color;
// delete cat.age;
// cat.age = 3;
// cat.name = "냥뇽냥양양";
// cat["color"] = "blue";

// console.log(cat);

// 객체 프로퍼티가 함수일 경우!-> 메서드
// 메서드는 객체의 속성으로 함수를 할당한 경우를 말한다.
// 객체의 매서드에서는 this 키워드를 사용하여 객체 자신을 가리킨다.
// this 키워드는 객체 자신을 가리킨다.
// const person = {
//   name: "홍길동",
//   age: 20,
//   sayHello: function () {
//     console.log(`안녕하세요! ${this.name} 입니다.`);
//   },
// };
// 매서드에서는 화살표 함수보다는 펑션 키워드를 사용하는것이 좋다.
// 화살표 함수는 매서드의 객체를 가리키지 못하고, 글로벌 객체 window 객체를 가리키기때문에
// this 키워드를 사용할 수 없다. 객체내 또다른 프로퍼티값 사용하지 못함 화살표함수!

// person.sayHello();
// person["sayHello"]();

// const sumNumber = (a, b) => {
//   function addFive(number) {
//     const result = number + 5;
//     return result;
//   }
//   return a + addFive(b);
// };

// console.log(sumNumber(1, 2));

// let arr = new ());
// console.log(arr);

// 배열 생성자 함수
// let arr = new Array(1, 2, 3);
// let arr1 = new Array(3);
// console.log(arr);
// console.log(arr1);

// 리터널 방식으로 배열 생성
// let arr1 = [1, 2, 3];
// let arr2 = [3];
// console.log(arr1);
// console.log(arr2);

// 배열의 요소에 접근하는 방법
// let array = [1, "hello", true, { name: "홍길동" }, [1, 2, 3]];
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[4][1]);

// 배열의 요소 추가, 삭제, 수정
// 배열의 요소 추가 -> push, unshift
// push -> 배열의 마지막에 요소 추가
// unshift -> 배열의 처음에 요소 추가
// 배열의 요소 삭제 -> pop, shift
// pop -> 배열의 마지막 요소 삭제
// shift -> 배열의 처음 요소 삭제
// 배열의 특정 요소 삭제제 -> splice(index, deleteCount, item)
// index -> 배열의 인덱스
// deleteCount -> 배열의 요소를 삭제할 개수
// item -> 배열의 요소를 추가할 값
// 배열의 요소 수정 -> 인덱스를 이용하여 수정

// let fruits = ["apple", "banana", "mango"];
// fruits.push("orange"); // 배열의 마지막에 요소 추가
// fruits.unshift("grape"); // 배열의 처음에 요소 추가
// console.log(fruits);

// let animal = ["dog", "cat", "lion"];
// let 은 변수 재할당이 가능하다. 아래 실행가능
// const는 변수 재할당이 불가능하다. 아래 실행불가능 직접 변수를 수정하는 269번 줄에서 오류발생

// animal[1] = "tiger";
// animal = ["dog", "cat", "hamster"];
// console.log(animal);

// const colors = ["red", "blue", "green", "yellow"];
// colors.pop(); // 배열의 마지막 요소 삭제
// colors.shift(); // 배열의 처음 요소 삭제
// colors.splice(1, 2); // 배열의 특정 요소 및 구간 삭제
// colors[1] = "black"; // 배열의 특정 요소 수정
// console.log(colors.length); // 배열의 길이
// console.log(colors);

// 생성자 함수
// new 키워드를 사용하여 객체를 생성하는 함수 객체 이름은 대문자로 시작한다.
// 함수 내부에서는 this 키워드를 사용하여 객체 자신을 가리킨다.
// new 키워드를 사용하여 만든 값을 변수에 할당한것을 인스턴스라고 한다.

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHello = function () {
//     console.log(
//       `안녕하세요! ${this.name} 입니다. 제 나이는${this.age}살 입니다. `
//     );
//   };
// }

// const person1 = new Person("홍길동", 20);
// const person2 = new Person("김철수", 30);
// console.log(person1);
// console.log(person2);
// person1.sayHello();
// person2.sayHello();

// 반복문
// for문 초기식, 조건식, 증감식
// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }

// while 문 -> 조건식이 참일때 반복
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// 반복문으로 배열 모든요소 접근하기
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 객체를 반복문으로 접근하려면 우선 배열로 변경해야한다.
// let person = {
//   name: "홍길동",
//   age: 20,
//   sayHello: function () {
//     console.log(
//       `안녕하세요! ${this.name} 입니다. 제 나이는 ${this.age}살 입니다.`
//     );
//   },
// };

// 객체를 배열로 변경하는 3가지 방법
// 1. Object.keys() -> 객체의 키를 배열로 반환
// console.log(Object.keys(person));
// console.log(Object.values(person)); //-> 객체의 값들을 배열로 반환
// 3. Object.entries() -> 객체의 키와 값들을 배열로 반환
// let newArray = Object.entries(person);
// console.log(newArray);
// for (let i = 0; i < newArray.length; i++) {
//   console.log(`key: ${newArray[i][0]}, value: ${newArray[i][1]}`);
// }

// for of 문 -> 배열의 요소를 순회할때 사용'
// let arr = [1, 2, 3, 4, 5];

// for (let i of arr) {
//   console.log(i);
// }

// for in 문 -> 객체의 속성을 순회할때 사용

// let person = {
//   name: "홍길동",
//   age: 20,
//   height: 180,
// };

// for (let key in person) {
//   console.log(`key: ${key}, value: ${person[key]}`);
// }

// 배열의 메서드 배열 내장함수
// let arr = [1, 2, 3, 4, 5];

// forEach -> 배열의 요소를 순회하며 콜백함수를 실행한다.
// arr.forEach((elm, idx, array) => {
//   console.log(`${idx}번째 요소는 ${elm}입니다.`);
//   console.log(array);
// });
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// map -> 배열안에 모든 원소를 새로운 원소로 변환할때 유용한 매서드
// let arr = [1, 2, 3, 4, 5];
// let newArray = [];

// for (let i = 0; i < arr.length; i++) {
//   newArray.push(arr[i] * 10);
// }
// console.log(newArray);

// let arr = [1, 2, 3, 4, 5];
// let newArray = arr.map((elm) => {
//   return elm * 10;
// });
// console.log(newArray);

// let colors = ["red", "blue", "green", "yellow"];
// // at 메서드드 -> 배열의 특정 인덱스에 있는 요소를 반환
// console.log(colors.at(-1)); // 배열의 마지막 요소를 반환
// console.log(colors.at(-2)); // 배열의 마지막에서 두번째 요소를 반환
// console.log(colors.includes("red", 1)); // 배열에 특정 요소가 포함되어 있는지 확인 true, false
// console.log(colors.includes("blue", 1)); // 숫자는 인덱스부터 요소가 있는지 검색
// console.log(colors[2]);
// console.log(colors[colors.length - 1]);
// console.log(colors.indexOf("black")); // 배열의 특정 요소의 인덱스를 반환 // 없으면 -1 반환
// indexof 요소가 객체나 배열의 형태라면 찾아주지 못한다.

// let colors = [
//   { id: 1, color: "red" },
//   { id: 2, color: "blue" },
//   { id: 3, color: "green" },
//   { id: 4, color: "yellow" },
// ];
// console.log(colors.indexOf({ id2: "blue" })); // -1 반환 요소가 객체라서 찾지못함
// findIndex -> 배열의 요소를 순회하며 콜백함수의 조건을 만족하는 인덱스를 반환 요소가 객체 배열이라면 이걸 사용용
// let idx = colors.findIndex((elm) => elm.color === "green"); //중괄호와 return 생략가능
// colors.findIndex((elm, idx, array) =>
//   console.log(`${idx}번째 값은 id: ${elm.id}, color: ${elm.color}`)
// );
// colors.findIndex((elm, idx, array) => console.log(array));
//find 매서드는 조건을 만족하는 요소를 반환한다. 값이 없다면 undefined를 반환한다.
// let idx = colors.find((elm) => elm.color === "green");
// console.log(idx);

// filter -> 배열의 요소를 순회하며 콜백함수의 조건을 만족하는 모든 요소들을 배열로 반환
// let filterArray = colors.filter((elm, idx, array) => elm.id > 1);
// console.log(filterArray);

// slice -> 배열의 특정 범위의 요소를 추출하여 새로운 배열을 반환
// let sliceArray = colors.slice(1, 3); // 1번째 인덱스부터 3-1번째 2번째 인덱스까지 추출
// console.log(sliceArray);

// reduce -> 배열의 요소를 순회하며 콜백함수의 리턴값을 누적하여 반환

// class Animal {
//   constructor(name, sound) {
//     this.name = name;
//     this.sound = sound;
//   }

//   makeSound() {
//     console.log(`${this.name}이(가) ${this.sound}하고 있습니다.`);
//   }
// }

// const dog = new Animal("개", "멍멍");
// const cat = new Animal("고양이", "야옹");
// dog.makeSound();
// cat.makeSound();

// function Animal(name, sound) {
//   this.name = name;
//   this.sound = sound;

//   this.makeSound = function () {
//     return `${this.name}이(가) ${this.sound}하고 있습니다.`;
//   };
// }

// const dog = new Animal("개", "멍멍");
// const cat = new Animal("고양이", "야옹");
// console.log(dog.makeSound());
// console.log(cat.makeSound());

// concat 매서드-> 배열을 합쳐서 새로운 배열을 반환
// let array1 = ["green", "blue"];
// let array2 = ["red", "yellow"];
// let newArray = array1.concat(array2);
// console.log(newArray);

// join 매서드 -> 배열의 모든 요소를 문자열로 변환하여 반환
//
// let array = ["green", "blue", "red", "yellow"];
// let str = array.join(); // 매서드 안에 인자를 아무것도 넣지 않으면, 가 기본값 join(" ") 공백으로 구분 할수있음.
// console.log(str);

// sort 매서드 -> 배열의 요소를 정렬하여 반환
// let colors = ["red", "blue", "green", "yellow"];
// colors.sort(); // 배열의 요소를 오름차순으로 정렬
// console.log(colors);

// compare 함수를 사용하여 내림차순으로 정렬
// const compare = (a, b) => {
//   if (a > b)
//     return -1; // a가 b보다 크면 문자가 크다작다는 알파벳이 뒤로갈수록 큰수임 -1을 반환하면 sort함수에서 a 가 b 보다 앞에 위치시킴
//   else if (a < b) return 1; // a가 b보다 작으면 1을 반환 b가 a보다 앞에 위치시킴
//   else return 0; // a와 b가 같으면 0을 반환 위치변동 없음.
// };
// let colors = ["red", "blue", "green", "yellow"];

// colors.sort(compare);
// console.log(colors);

// let numbers = [1, 100, 25, 50, 120, 3];
// numbers.sort();
// console.log(numbers); // [1, 100, 120, 25, 3, 50] -> 문자열로 인식하여 정렬(숫자 앞 첫글자 1, 2만 비교교) -> 숫자로 정렬하려면 compare함수를 사용해야함

// const compare = (a, b) => {
//   return b - a; //내림차순
// };
// let numbers = [1, 100, 25, 50, 120, 3];
// numbers.sort(compare); // sort 매서드는 원본 배열을 변경한다. 인덱스 번호 변경되서 주의해서 사용
// console.log(numbers);

// reduce 매서드 -> 배열의 요소를 순회하며 콜백함수의 리턴값을 누적하여 반환

// let numbers = [1, 100, 25, 50];
// let sum = numbers.reduce((acc, cur, idx) => {
//   console.log(acc, cur, idx); // acc는 누적값 cur는 현재값 idx는 인덱스
//   return acc + cur;
// }, 0); //0 초기값

// console.log(sum);

// isArray 매서드 -> 배열인지 아닌지 확인하는 매서드
// let a = Array.isArray([1, 100, 50]);
// let b = Array.isArray({ id: 1, color: "red" });
// let c = Array.isArray("hello");
// let d = Array.isArray(undefined);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// 구조분해 할당 -> 배열, 객체의 요소를 변수로 분해하여 할당하는 방법
// let colors = ["red", "blue", "green"];
// let [c1, c2, c3] = colors;
// let c1 = colors[0];
// let c2 = colors[1];
// let c3 = colors[2];

// let c1, c2, c3; // 선언 분리 할당
// [c1, c2, c3, c4 = "yellow"] = ["red", "blue", "green"]; // 변수의 길이보다 배열의 길이가 더 길면 무시된다.
// 변수의 길이가 더 길면 undefined로 할당된다.
// 변수에 디폴트값을 설명할수있다.
// console.log(c1);
// console.log(c2);
// console.log(c3);
// console.log(c4);

// 두 변수의 값을 교환하는 방법
// let a = 10;
// let b = 20;
// let tmp;
// tmp = a;
// a = b;
// b = tmp;
// console.log(tmp);
// console.log(a);
// console.log(b);

// 배열 구조분해 할당을 이용한 두 변수의 값을 교환하는 방법
// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(a, b);

// let colors = { c1: "red", c2: "blue", c3: "green" };

// let c1 = colors.c1;
// let c2 = colors.c2;
// let c3 = colors.c3;
// 객체 구조분해할당
// let { c1, c2, c3 } = colors;

// console.log(c1);
// console.log(c2);
// console.log(c3);

// 객체 구조분해 할당을 이용한 변수의 이름 변경
// let color1 = colors.c1;
// let color2 = colors.c2;
// let color3 = colors.c3;
// console.log(color1);
// console.log(color2);
// console.log(color3);

// let { c1: color1, c2: color2, c3: color3 } = colors;
// console.log(color1);
// console.log(color2);
// console.log(color3);

// spread 연산자 -> 배열, 객체의 요소를 복사하여 새로운 배열, 객체를 만드는 연산자
// const toy = {
//   type: "bear",
//   price: 10000,
// };

// const blueToy = {
//   ...toy,
//   color: "blue",
// };

// const redToy = {
//   ...toy,
//   color: "red",
// };

// console.log(blueToy);
// console.log(redToy);

// const color1 = ["red", "blue", "green"];
// const color2 = ["yellow", "black", "white"];
// const rainbow = [...color1, 1, "purple", ...color2]; // 배열의 요소를 복사하여 새로운 배열을 만든다.
// console.log(rainbow);

// rest 매개변수 -> 함수의 매개변수 앞에 ...을 붙여서 나머지 매개변수를 배열로 받는다. 배열이나 객체를 하나로 묶어서 받을수있다.
// 나머지 매개변수

// const blueToy = {
//   type: "bear",
//   price: 10000,
//   color: "blue",
// };

// const { type, ...rest } = blueToy; // type을 제외한 나머지 요소를 rest에 할당 // rest 문법은 순서를 지켜야한다. 마지막에 배치
// console.log(type);
// console.log(rest);

// const color = ["red", "blue", "green", "yellow"];
// const [first, second, ...rest] = color;
// console.log(first);
// console.log(second);
// console.log(rest);

// const print = (a, b, c, d, e, f) => {
//   console.log([c, d, e, f]);
// };

// print(1, 2, 3, 4, 5, 6);
// const print = (a, b, ...rest) => {
//   console.log(a);
//   console.log(b);
//   console.log(rest);
// };

// print(1, 2, 3, 4, 5, 6);

// 스프레드 레스트 연산자를 사용한 예제
// const print = (...rest) => {
//   // rest 문법으로 많은 매개변수를 안전하게 받을수있다.
//   console.log(...rest);
// };
// const numbers = [1, 2, 3, 4, 5, 6];
// print(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5]); // 넘버스 배열 인수 부분을 스프레드 문법으로 대체체
// print(...numbers); // 스프레드 문법을 사용하여 배열의 요소를 펼쳐서 인수로 전달할수있다.
// const sumAndDouble = (...numbers) => {
//   const sum = numbers.reduce((acc, cur) => acc + cur, 0);
//   const doubled = numbers.map((num) => num * 2);
//   console.log(sum);
//   return doubled;
// };
// console.log(sumAndDouble(1, 2, 3, 4));

// 동기 비동기
// 동기 하나의 작업이 실행되는 동안은 다른 작업을 수행하지 않는 방식
// 예시 console.log(1); console.log(2); console.log(3); -> 동기적으로 실행됨
// 비동기 작업이 종료되기를 기다리지 않고 다음 작업을 병렬적으로 수행하는 방식
// 자바스크립트는 싱글 스레드 언어 스레드는 작업을 수행하는 기체 한번에 하나의 작업만 수행가능능

// 동기로 수행되는 코드
// const workA = () => {
//   console.log("workA done");
// };

// const workB = () => {
//   console.log("workB done");
// };

// const workC = () => {
//   console.log("workC done");
// };

// workA();
// workB();
// workC();

// 비동기로 수행되는 코드
// setTimeout(() => {
//   console.log("비동기");
// }, 3000); // 3초후에 비동기로 실행됨 3000 밀리세컨드 딜레이타임이 화살표 함수 뒤에 옴

// console.log("종료"); // 비동기 코드가 먼저 실행되고 종료가 나중에 실행됨

// 비동기 콜백함수를 순서대로 실행하는 방법
// const work = (callback) => {
//   setTimeout(() => {
//     console.log("작업완료");
//     callback();
//   }, 3000);
// };

// work(() => {
//   console.log("종료");
// });

// 비동기의 대표 매서드 setTimeout, setInterval, fetch, axios, promise, async await
// const workA = () => {
//   setTimeout(() => {
//     console.log("workA done");
//   }, 2000);
// };

// const workB = () => {
//   setTimeout(() => {
//     console.log("workB done");
//   }, 1000);
// };

// const workC = () => {
//   setTimeout(() => {
//     console.log("workC done");
//   }, 3000);
// };

// const workD = () => {
//   console.log("workD done");
// };

// workA();
// workB();
// workC();
// workD();
// 메인스레드 메인 주방장, web api 보조 주방장, 테스크 큐 주문대기표표, 자바스크립트는 요리 공간이 1개이기때문에 비동기 작업이 필요한것임.
// setTimeout은 web api에 요청을 보내고 web api는 setTimeout이 종료되면 테스크 큐에 요청을 보냄. 자바스크립트는 테스크 큐에 있는 요청을 받아서 실행함.

// 비동기 프로미스 객체
// const excutor = (resolve, reject) => {
//   setTimeout(() => {
//     resolve('성공');
//     reject('실패');
//   }, 3000);
// }; // resolve, reject는 콜백함수

// const promise = new Promise(excutor); // excutor 함수를 실행
// // promise 객체는 excutor 함수를 실행하고, resolve, reject 함수를 인자로 받는다.
// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });// 성공하면 then, 실패하면 catch result는 resolve의 인자, error는 reject의 인자

// 콜백지옥
// const workA = (value, callback) => {
//   setTimeout(() => {
//     callback(value + 5);
//   }, 5000);
// };
// const workB = (value, callback) => {
//   setTimeout(() => {
//     callback(value - 3);
//   }, 3000);
// };
// const workC = (value, callback) => {
//   setTimeout(() => {
//     callback(value + 10);
//   }, 10000);
// };

// workA(10, (resA) => {
//   console.log(`workA의 결과 ${resA}`);
//   workB(resA, (resB) => {
//     console.log(`workB의 결과 ${resB}`);
//     workC(resB, (resC) => {
//       console.log(`workC의 결과 ${resC}`);
//     });
//   });
// });

// const workA = (value) => {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(value + 5);
//     }, 5000);
//   });
//   return promise;
// };

// const workB = (value) => {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(value - 3);
//     }, 3000);
//   });
//   return promise;
// };

// const workC = (value) => {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(value + 10);
//     }, 10000);
//   });
//   return promise;
// };

// workA(10).then((resA) => {
//   console.log(`workA의 결과 ${resA}`);
//   workB(resA).then((resB) => {
//     console.log(`workB의 결과 ${resB}`);
//     workC(resB).then((resC) => {
//       console.log(`workC의 결과 ${resC}`);
//     });
//   });
// });

// then 메서드 체이닝
// workA(10)
//   .then((resA) => {
//     console.log(`workA의 결과 ${resA}`);
//     return workB(resA);
//   })
//   .then((resB) => {
//     console.log(`workB의 결과 ${resB}`);
//     return workC(resB);
//   })
//   .then((resC) => {
//     console.log(`workC의 결과 ${resC}`);
//   });
// // await async 예제
// const delay = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('3초가 지났습니다.');
//     }, ms);
//   });
// };

// //async 를 사용하면 자동으로 Promise를 반환한다.
// //await 는 async 함수 안에서만 사용할 수 있다.
// //await 는 Promise가 resolve 될 때까지 기다린다.
// // then을 사용할때는 then 과 catch를 사용해야하지만 await는 try catch를 사용한다.
// // const start = async () => {
// //   let result = await delay(3000); // await는 Promise가 반환될때까지 함수를 중지 시킨다.
// //   console.log(result);

// // }

// const start = async () => {
//   try {
//     let result = await delay(3000); // await는 Promise가 반환될때까지 함수를 중지 시킨다.
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }
// start();

// const workA = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('A');
//     }, 3000);
//   });
// }
// const workB = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('B');
//     }, 5000);
//   });
// }
// const workC = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('C');
//     }, 10000);
//   });
// }

// // const start = async () => {
// //   try {
// //     let resultA = await workA();
// //     let resultB = await workB();
// //     let resultC = await workC();
// //     console.log(resultA);
// //     console.log(resultB);
// //     console.log(resultC);
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }

// // promise.all을 사용하면 동시에 병렬로 실행되며, 모든 작업들이 fulfilled 상태가 되어야 결과를 받을 수 있다.
// // promise.all 은 배열로 반환한다.
// // async await 는 api 호출시 사용하면 좋다.
// const start = async () => {
//   try {
//     let results = await Promise.all([workA(), workB(), workC()]);
//     results.forEach(result => console.log(result));
//   } catch (error) {
//     console.log(error);
//   }
// }

// start();

// 자바스크립트 내장 함수 fetch를 사용하여 api 호출하기 fetch는 비동기 함수이다.
// 네트워크 환경에 따라 변수가 생기기때문에 반드시 try catch를 사용해야한다.
// let getData = async () => {
//   try {

//     let response = await fetch('https://jsonplaceholder.typicode.com/users');
//     console.log(response);
//     let data = await response.json(); // json 매서드 자바스크립트로 사용할수있도록 객체로 변환 // response의 값이 담길때까지 기다린다. await
//     console.log(data);
//   }
//   catch (error) {
//     console.log(error);
//   }
// }

// getData();
// function fakeApiCall() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ name: "John Doe", age: 30 });
//     }, 2000);
//   });
// }

// fetchUserData = async () => {
//   try {
//     let user = await fakeApiCall();
//     console.log(`이름은 ${user.name}`);
//   } catch (error) {
//     console.log(error);
//   }
// };
// fetchUserData();

// const API_URL = "https://pokemon-api-ecru-eta.vercel.app";

// const fetchPokemon = async () => {
//   try {
//     const response = await fetch(`${API_URL}`);
//     const data = await response.json();
//     const pokemonArray = data.data;
//     const greenPokemon = pokemonArray.filter(
//       (pokemon) => pokemon.color === "green"
//     );
//     console.log(greenPokemon);
//   } catch (error) {
//     console.log(error);
//   }
// };
// fetchPokemon();

// Dom과 Dom API
// html 로 만들어놓은 것을 자바스크립트가 이해할수있도록 변환한 문서객체 모델 DOM
// Dom API는 Dom을 조작할수있는 다양한 매서드를 제공한다.
// 자바스크립트로 돔을 조작하려면 돔트리 구조를 이해해야한다.
// 1. Dom api getElementById, querySelector, querySelectorAll, getElementsByClassName, getElementsByTagName
// getElementById -> id 속성을 사용하여 요소를 선택

// dom api 사용해서 변수에 할당할때는 변수명을 $로 시작하는것이 관례, 아니면 변수명뒤에 Element를 붙이는것도 관례
// let $color = document.getElementById("color");

// console.log($color);
// let $animalInfo = document.querySelector("div.animal-info");
// let ageElement = document.querySelector("div#age");

// console.log($animalInfo);
// console.log(ageElement);

// dom api 조건을 만족하는 요소가 여러개일 경우 querySelectorAll, getElementsByClassName, getElementsByTagName 사용
// let $infoItems = document.querySelectorAll("div.info-item");

// console.log($infoItems);

// let $infoItems = document.getElementsByClassName("info-item");
// console.log($infoItems);

// getElementsByTagName -> 태그 이름을 사용하여 요소를 선택
// let $infoItems = document.getElementsByTagName("div");
// console.log($infoItems);
// 요소 조작 dom api 사용해서 요소를 생성, 삭제, 수정, 이동, 복사, 이벤트 등록
// let $name = document.getElementById("name");
// $name.className = "dog-name";

// console.log($name);
// console.log($name.className);

// let $animalInfo = document.querySelector("div.animal-info");
// $animalInfo.id = "animal";
// console.log($animalInfo);
// console.log($animalInfo.id);

// let $color = document.getElementById("color");
// console.log($color.classList); // 클래스 리스트 여러가지 매서드를 제공한다.

// $color.classList.add("dog-color"); // 클래스 네임을 추가한다 add 매서드
// $color.classList.remove("info-item"); // 클래스 네임을 제거한다 remove 매서드

// console.log($color);

// let $age = document.getElementById("age");
// $age.textContent = "5살";
// console.log($age);

// let $color = document.getElementById("color");
// $color.style.color = "red";
// $color.style.backgroundColor = "yellow";
// $color.style.fontSize = "20px";

// dom api 2
// createElement -> 새로운 요소를 생성

// let $type = document.createElement("div");
// $type.className = "info-item";
// $type.id = "type";
// $type.textContent = "말티즈"; //textContent 요소 대신 createTextNode 사용할수있다.
// let $typeText = document.createTextNode("말티즈"); // type 노드에 추가되는게 아니라 새로운 텍스가 생성됨
// console.log($type);

// console.log($typeText);
// 화면에 표시 되지 않는 이유는 생성한 요소를 돔드리(상하관계)에 추가하지 않았기 때문이다.

//appendChild -> 요소를 부모요소의 마지막 자식요소로 dom-tree에 추가하기
// tpye 노드를 animal-info에 추가, 텍스트 노드를 type 노드에 추가 => 돔트리에 추가된다.
// let $animalInfo = document.querySelector("div.animal-info");
// $animalInfo.appendChild($type);
// $type.appendChild($typeText);

// let $button = document.createElement("button");
// $button.id = "new-button";
// $button.classList.add("new-button");
// $button.textContent = " 버튼";
// $button.addEventListener("click", () => { // addEventListener 매개변수로 이벤트와 리스너를 전달받는다. 이벤트는 조건, 리스너는 실행할 함수
//   window.alert("버튼이 클릭되었습니다.");
// });
// let $body = document.querySelector("body");
// $body.appendChild($button);

// let $animalInfo = document.querySelector("div.animal-info");
// $animalInfo.appendChild($button);

// console.log($animalInfo);

// innerHTML ->dom api 특정 요소의 내부 html을 문자열로 반환
// let $animalInfo = document.querySelector("div.animal-info");
// $animalInfo.innerHTML = "<div id='name'>고양이</div>"; //innerHTML 기존 모든 자식요소 제거 새로운 요소 대체됨됨
// console.log($animalInfo.innerHTML); // div 안에 있는 모든 요소를 문자열로 반환
//가능하면 createElement, textContent, appendChild를 사용하는것이 좋다.
// innerHTML은 보안상의 문제로 사용을 권장하지 않는다.

// Form 태그 사용자와 상호작용을 가능하게 하는 HTML 요소
