const add = (a, b) => a + b;

function calculator(func, a, b){
    return func(a, b);
}

add(3, 5);
/* 1. 다음 중 맞는 코드는? */
calculator(add(), 3, 5); // TypeError: func is not a function
calculator(add, 3, 5);

/* 2. 다음 중 맞는 코드는? */
// 정답.
document.querySelector('#header').addEventListener('click', add); 

// 함수를 호출하고 그 리턴 값을 할당한 것.
document.querySelector('#header').addEventListener('click', add()); 
document.querySelector('#header').addEventListener('click', undefined + undefined);


/* 3. 다음 함수를 리턴문을 넣어 바꾸면? */
const onClick = () => () => {
    console.log('hello')
};

const onClickWithReturnStatement = () => {
    return () => {
        console.log('hello')
    }
};

/* 4. 위의 onClick을 인자로 전달했을 때 다음 코드의 실행 결과는? */
document.querySelector('#header').addEventListener('click', onClick()); 

// 정상 실행된다.
document.querySelector('#header').addEventListener('click', () => {
    console.log('hello')
}); 


/* 5. event parameter는 어디에 들어가야 옳을까? */
const onClickWtihEvent1 = (event) => () => {
    console.log('hello')
};

const onClickWtihEvent2 = () => (event) => {
    console.log('hello')
};

// 리턴 값을 넣어보면 판단이 선다.
// onClickWtihEvent1 (X)
document.querySelector('#header').addEventListener('click', () => {
    console.log('hello')
}); 

// onClickWtihEvent2 (O)
document.querySelector('#header').addEventListener('click', (event) => {
    console.log('hello')
}); 