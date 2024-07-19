/* 클로저란 '함수와 그 함수 외부에 선언한 변수 사이의 관계' */

/* 클로저 문제 */
// 클로저 때문에 생기는 게 아니라, 클로저를 사용하면 해결 가능한 문제.
// 스코프, 비동기, var
// 반복문과 비동기를 함께 사용할 때 종종 발생한다.

function a() {
    for (var i = 0; i < 5; i++){
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
}

a();
// Q) 왜 출력 결과가 5만 다섯 번 찍히는 거야? 그리고 var를 let으로 바꾸면 해결되는 이유는?

// A) 
// 1. for문에서 괄호로 감싸지는 (초기화식; 조건식; 표현식)은 전부 for문의 스코프 내에서 관리된다.
// 1-1. 또한 for 문은 한번 반복이 될 때마다 매번 스코프가 생긴다. 그러니 변수가 for문의 스코프 내부에서 관리가 된다면 기대했던 결과가 나올 것이다.
// 2. 그러나 var 선언은 블록 스코프가 아닌 함수 스코프를 따르며, a 스코프의 최상단으로 호이스팅된다.
// 3. setTimeout을 실행할 시기에는 i는 기대했던대로 0, 1, 2, 3, 4를 반영한 시간이 예약된다.
// 4. 그러나 호출 스택이 돌아가며 나머지 작업을 처리할 동안은 비동기로 예약된 작업은 개입조차 하지 않는다.
// 5. 호출 스택이 텅 비었으니 이벤트 루프가 예약된 작업을 하나씩 끌어올리는데...
// 6. 이 때 var는 이미 5인 상태인 것.



// var를 꼭 사용해야 된다면 : 즉시 실행 함수로 "클로저" 생성
function b() {
    for (var i = 0; i < 5; i++){
        // 즉시 실행 함수는 '선언이자 호출'.
        // "매개변수도 변수" var j = i가 익명 함수 내부 스코프에서 선언되고 관리된다.
        (function(j){
            setTimeout(() => {
                console.log(j);
            }, i * 1000);
        })(i);   
    }
}

b();