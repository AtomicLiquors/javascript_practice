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

function pickFruits(){
    /* Promise에서도 콜백지옥이 발생할 수 있다. */
    return getApple()
    .then(apple => {
        return getBanana()
        .then(banana => `${apple} + ${banana}`)
    })
}

async function pickFruitsByAsync(){
    /* async, await을 이용하면 간편하게 변환할 수 있다! */
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log)