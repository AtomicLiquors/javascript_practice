const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });

const getEgg = hen => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} >> 🥚` ), 1000);
    }); 

const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} >> 🍳` ), 1000);
    });

getHen()
.then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal));

/* 결괏값이 하나라면 아래와 같이 암묵적으로 전달도 가능하다. */
getHen() //
.then(getEgg)
.then(cook)
.then(console.log)

/* 에러 처리 */
getHen() //
.then(getEgg)
.catch(error => { 
    // 달걀을 가져오는 데 에러가 났다면 달걀 대신 0을 리턴
    return '0'
})
.then(cook)
.then(console.log)