/* 여러 개의 Promise 결괏값을 배열로 받아서 순회할 때 */

const results = await Promise.all([p1, p2, p3]);

// 동시에 실행되며 동작의 순서가 보장되지 않는다.
results.map(async() => {

});

// 동작이 순서대로 실행된다.
for (let result of results){
    await modifyResult(result);
}