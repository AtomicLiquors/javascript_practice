function fetchUserByPromise(){
    return new Promise((resolve, reject) => {
        resolve('2kooong2');
    })
}

/* async 키워드 : 내부적으로 Promise를 반환하도록 함수를 변환해 준다. */
async function fetchUserByAsync(){
    return '2kooong2';
}

const user = fetchUserByPromise();
user.then(console.log);
console.log(user);