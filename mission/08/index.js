const obj = {
  value: 42,
  regularFunction: function () {
      console.log(this.value); // 여기서 this는 무엇을 가리키나요? => obj
  },
  arrowFunction: function () {
      console.log(this.value); // 여기서 this는 무엇을 가리키나요? => window
  },
};

obj.regularFunction(); // 출력: 42
obj.arrowFunction(); // 출력: undefined (이유를 설명해보세요)
// regularFunction은 obj 객체의 메서드로 호출되었기 때문에 this는 obj 객체를 가리킵니다.
// arrowFunction은 화살표 함수로 호출되었기 때문에 this는 상위 컨텍스트인 전역 객체인 window를 가리킵니다.