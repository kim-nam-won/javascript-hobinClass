// this 자신이 속한 객체를 가리킨다.
// 자바스크립트 함수와 관련이 있다. 함수의 호출방식에 따라 this가 가리키는 대상이 달라진다.

// 1. 함수가 일반 함수로 호출될 때 this는 전역 객체를 가리킨다.
// 2. 함수가 메서드로 호출될 때 this는 메서드를 소유한 객체를 가리킨다.
// 3. 함수가 생성자 함수로 호출될 때 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
// 4. 함수가 call, apply, bind 메서드로 호출될 때 this는 call, apply, bind 메서드의 첫 번째 인수로 전달된 객체를 가리킨다.

// 1. 함수가 일반 함수로 호출될 때 this는 전역 객체를 가리킨다.
// 전역공간 this
// console.log(this); // window 웹브라우저의 전역객체

// function func1() {
//   console.log(this);
// }
// func1(); // window

// // 2. 함수가 메서드로 호출될 때 this는 메서드를 소유한 객체를 가리킨다. 매서드 -> 객체 프로퍼티 함수
// const obj = {
//   name: "Lee",
//   func2: function () {
//     console.log(this);
//   },

//   newCafe: {
//     name: "Starbucks",
//     menu: '라떼',
//     func3: function () {
//       console.log(this);
//     },
//   },
// };
// obj.func2(); // {name: "Lee", func2: ƒ} 카페 객체 그 자체가 출력이 된다. obj 모두 출력
// obj.newCafe.func3(); // {name: "Starbucks", menu: "라떼", func3: ƒ} newCafe 프로퍼티들이 출력된다. .바로앞에 객체가 출력된다고 생각하면된다.

// 헷갈리는 부분 주의 할 것

// const cafe = {
//   brand: " 이디아",
//   menu: "아메리카노",
//   print: function () {
//     console.log(this);
//   },
// };

// const myCafe = cafe.print;
// myCafe(); // window 함수가 호출되는 방법이 매서드로 호출되는 것이 아니라 일반함수로 호출되었기 때문에 window가 출력된다. print 함수의 정의가 메서드로 정의되었지만 호출하는 방법이 일반함수로 호출되었기 때문에 window가 출력된다.
// 1. const myCafe = cafe.print에서:
// print 함수를 cafe 객체에서 분리하여 새로운 변수에 할당합니다.
// 이 시점에서 함수와 원래 객체와의 연결이 끊어집니다.
// 2. myCafe()를 호출할 때:
// 일반 함수로 호출됩니다 (객체의 메서드로 호출되지 않음)

// 3. 함수가 생성자 함수로 호출될 때 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
// 생성자 함수: 객체를 생성하는 함수 new 키워드
// function Cafe(menu) {
//   console.log(this);
//   this.menu = menu;
// }

// let myCafe = new Cafe("아메리카노"); // 아메리카노를 메뉴로 하는 카페 객체를 생성(인스턴스)
// console.log(myCafe); // Cafe {menu: "아메리카노"}

// 4. 콜백함수에서 this를 사용할 때 -> 일반함수로 호출이 되어서 this는 전역객체인 window가 출력된다.

// const cafe = {
//   brand: "이디아",
//   menu: "아메리카노",
//   setMenu: function (menu) {
//     this.menu = menu;
//   },
// };

// function getMenu(menu, callback) {
//   callback(menu); // getMenu 함수에서 일반함수로 호출이 되어서 setMenu 함수의 this는 window가 출력된다.
//   // 콜백함수로 카페에 setMenu 함수만 가져와 콜백함수에 저장을 한후 콜백함수 자체는 일반함수가 되기때문에 this는 window가 출력된다.
// } //window.menu 해보면 "아메리카노"가 출력된다. 즉 this가 윈도우를 가르키고있는것임.

// getMenu("아메리카노", cafe.setMenu);

// console.log(cafe);
// 화살표함수의 this는 상위 스코프의 this를 가리킨다.
// 화살표함수는 일반함수와 다르게 this를 가지지 않는다.
// 화살표함수는 this를 가지지 않기 때문에 this를 사용할 수 없다.

// function Counter() {
//   this.count = 0;
//   setInterval(function () {
//     // setInterval 함수는 일반함수로 호출이 되어서 this는 window가 출력된다.
//     this.count++;
//     console.log(this.count++);
//   }, 2000);
// }

// function Counter () {
//   this.count = 0;
//   setInterval(() => {  // 단지 setInterval 함수를 화살표함수로 변경했을 뿐인데, 화살표 함수로 호출을 하면 this는 상위 스코프의 this를 가리킨다. 상위 스코프의 this는 Counter 함수를 가리킨다.
//     this.count++;
//     console.log(this.count++);
//   }, 2000);
// }

// const counter = new Counter();

// 화살표 함수는 함수 선언 위치에 의해 스코프가 결정되는 -> 렉시컬 스코프(상위 스코프)를 가지기 때문에 호출방식에 의존하지 않아도 된다 -> this를 사용할 때 유용하다.

// const cafe = {
//   brand: "이디아",
//   menu: "아메리카노",
//   print: () => {
//     console.log(this);
//   }, // 화살표 함수는 자신의 속하는 객체를 가리키지 않는다. 화살표 함수는 상위 스코프의 this를 가리킨다. 상위 스코프의 this는 window를 가리킨다.
//   //   그래서 자바스크립트 매서드를 작성할때에는 화살표 함수를 사용하지 않는다. 상위스코프의 window를 가리키기 때문에 일반 함수를 사용해야만 한다.
// };

// cafe.print(); // window
