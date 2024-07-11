function sayName() {
    console.log(this.name);
}

const sayArrowName = () => {
    console.log(this.name);
}

const obj2 = {
    name: 'objName'
}

sayName();

sayName.bind({name: 'bindName'})();
sayName.bind(obj2)();
// this를 변경하는 새로운 함수를 만들어준다. 
// bind만 썼다고 해서 그 함수를 호출하는 건 아니기 때문에 ()를 붙여야 호출된다.

sayName.apply({name: 'applyName'});
sayName.call({name: 'callName'});
//this를 변경하고 함수를 호출까지 해 준다.

sayArrowName.bind({name: 'bindName'})();
sayArrowName.apply({name: 'applyName'});
sayArrowName.call({name: 'callName'});
//화살표 함수에 이런 것들을 사용하면 'undefined'가 뜨게 되는데...?


/* 매개변수와 함께 apply, call 사용하기 */
function add(a, b){
    console.log(a + b);
}

// 둘 다 공통으로 this 자리엔 null을 넣어줘도 무방.
add.apply(null, [1, 2]); // apply는 배열로 매개변수를 전달한다.
add.call(null, 1, 2); // call은 가변인자?로 배개변수를 전달한다.