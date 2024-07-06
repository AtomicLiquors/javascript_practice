
// Producer
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 3000);
});

// Consumer
fetchNumber
.then(num => num * 2) // 결괏값에 2를 곱하고
.then(num => num * 3) // 3을 곱하고
.then(num => {
    // 새로운 프로미스를 반환하고
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(num - 1), 1000);
    })
})
// 다시 그 결괏값을 출력
.then(num => console.log(num));