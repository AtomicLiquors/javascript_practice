
// 새 프로미스가 만들어지는 순간 executor가 자동으로 실행된다.
// 요구하지도 않은 네트워크 통신을 일으킬 수 있으니 주의.

// Promise를 사용할 때는 데이터를 제공하는 Producer, 데이터를 가져오는 Consumer가 존재한다.

/* 정상 실행 예시 */
// Producer
const promise = new Promise((resolve, reject) => {
    // heavy work
    console.log('doing something...');

    setTimeout(() => {
        resolve('result');
    }, 2000);
});

// Consumer
promise.then((value) => {
    console.log(value);
})

/* 에러 실행 예시 */
// Producer
const promiseWithError = new Promise((resolve, reject) => {
    // heavy work
    console.log('doing something...');

    setTimeout(() => {
        reject(new Error('error!'));
    }, 2000);
});

// Consumer
promiseWithError.then((value) => {
    console.log(value);
})
.catch(error => {
    console.log(error);
});

