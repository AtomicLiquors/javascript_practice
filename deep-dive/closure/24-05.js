const x = 1;

function outer(){
    const x = 10;
    const inner = function () { console.log(x); };
    return inner;
}

// outer 함수를 호출하면, outer는 중첩 함수 inner를 반환하고 생명주기를 마친다.
// (outer 함수의 실행 컨텍스트가 실행 컨텍스트 스택에서 제거된다.)
// 따라서 outer의 지역변수 x도 생명주기를 마감한다.

const innerFunc = outer();
innerFunc();


// 실행 결과 : 10
// 그럼에도 불구하고 출력 결과가 10이 나온 까닭은??
// outer 함수의 렉시컬 환경이 사라지지 않고 살아있다.
// inner 함수의 [[Environment]] 슬롯에 의해 참조되고 있기 때문이다.
// "가비지 컬렉터는 누군가가 참조하는 메모리 공간을 함부로 해제하지 않는다."