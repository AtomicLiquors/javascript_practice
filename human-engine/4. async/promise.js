// Promise란 실행은 즉시 하되, 그 결괏값은 다른 작업을 하다 필요할 때 사용할 수 있는 것

/* Q. 'Promise'와 'Anonymous' 중에 먼저 출력되는 건 뭘까? */
const p = new Promise((resolve, reject) => {
    console.log('Promise');
    /* 여기까지는 동기 : Promise가 호출되면서 즉시 동기적으로 실행되는 부분. */

    setTimeout(() => {
        /* 여기서부터 비동기 : 순서가 정상적인 흐름에서 벗어나는 시점. */
        a = 5;
        console.log(a);
        resolve(a);
    }, 0);
})

console.log('Anonymous');

p.then((result) => {
    console.log('result', result);
});

// A : 
/*
Promise -> p.then()을 하지 않더라도 new Promise가 실행되는 순간에 함께 실행된다.
Anonymous
5
result 5


*/
// https://www.youtube.com/watch?v=Z30cbiPLVfE&list=PLcqDmjxt30Rt9wmSlw1u6sBYr-aZmpNB3&index=14
// 이벤트 루프와 연관지어서 확실히 하고 넘어가라.
