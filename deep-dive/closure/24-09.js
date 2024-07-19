
// increase는 num의 상태를 유지하지 못한다.
const increase = function () {
    let num = 0;
    return ++num;
};

/* 클로저 */
const closureIncrease = (function () {
    let num = 0;
    return function() {
        return ++num;
    };
}());

// 즉시 실행 함수는 호출 이후 소멸된다.
// 한 번만 실행되므로 closureIncrease가 호출될 때마다 num이 다시 초기화되지 않는다.
// 하지만 즉시 실행 함수가 반환한 클로저는 closureIncrease 변수에 할당되어 호출된다.
// 즉시 실행 함수가 반환한 클로저는 즉시 실행 함수의 렉시컬 환경을 기억하고 있다.

console.log(increase());
console.log(increase());
console.log(increase());
console.log(closureIncrease());
console.log(closureIncrease());
console.log(closureIncrease());