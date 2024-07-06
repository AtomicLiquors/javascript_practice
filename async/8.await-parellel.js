// https://inpa.tistory.com/entry/JS-%F0%9F%9A%80-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9E%90%EB%8F%99%EC%9C%BC%EB%A1%9C-%EB%82%B4%EB%A6%AC%EA%B8%B0-1
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(3000);
    return 'apple';
}

async function getBanana(){
    await delay(3000);
    return 'banana';
}

// getApple과 getBanana는 서로 연관성이 없어서 기다릴 필요가 없다.
// 두 개를 동시에 실행시키면 3초면 끝날 일인데 await 때문에 6초나 걸린다.
async function pickFruitsByAsync(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

async function pickFruitsByPromiseCall(){
    // 프로미스를 둘 다 직접 호출해서 곧바로 실행시키고
    const applePromise = getApple();
    const bananaPromise = getBanana();

    // 그 결괏값을 기다리게 한다.
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

console.time('실행 시간'); // 측정 시작
pickFruitsByAsync()
//pickFruitsByPromiseCall()
.then((result) => {console.log(result);console.timeEnd('실행 시간')});

// 이렇게 하면 시간 측정이 비동기를 기다리지 않는다.
/* 
.then(console.log)
.then(console.timeEnd('실행 시간'))
*/