/* this는 호출 시에 결정된다. */

function a() {
    console.log(this);
}
a();

const obj = {
    name: 'zero',
    sayName() {
        console.log(this.name);
    },

    /* 화살표 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정된다. */
    sayArrowName: () => {
        console.log(this.name);
    }
}

function Human(name) {
    console.log(this);
    this.name = name;
}

// Q. 아래 함수의 출력 결과는?
a();
obj.sayName();
obj.sayArrowName();
new Human('2kooong2');



/* 정답 */
// a(); -> 전역 객체의 정보가 출력된다.
// obj.sayName(); -> zero
// obj.sayArrowName(); -> undefined
// new Human('2kooong2'); -> Human{}

const obj2 = {
    name: '2kooong2',
    sayName() {
        console.log(this.name);
        function inner(){
            console.log(this.name);
        }
        inner();

        function arrowInner(){
            console.log(this.name);
        }
        arrowInner();
    }
}

// Q. inner의 스코프 체인은 어떻게 됩니까?
// (스코프 체인도 항상 정확하게 말씀할 줄 아셔야 됩니다. 특정 식별자에 접근할 수 있는지 없는지 알 수 있어야 합니다.)

// A. inner >> sayName >> 전역
// 그렇기 때문에 화살표 함수의 this가 뭔지 보려면 먼저 상위 스코프의 this가 동적으로 어떻게 결정되는지 파악해야 됩니다.
// 화살표 함수를 썼다고 항상 정적이라고 안일하게 생각했다.

/* 심화학습 */
// "this가 무엇인지는 런타임 중에 결정되며, 뭘 가리킬지는 공식 문서 보기 전까진 모른다."
// https://www.youtube.com/watch?v=3l2yiP0ch3U&list=PLcqDmjxt30Rt9wmSlw1u6sBYr-aZmpNB3&index=8