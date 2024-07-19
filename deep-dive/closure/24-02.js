const x = 1;

function outerFunc() {
    const x = 10;
    innerFunc();
}

// rem) javaScript는 렉시컬 스코프를 따른다.
// innerFunc를 outerFunc 내부에서 호출하긴 했지만, outerFunc 내부에서 정의한 게 아니다.
// 따라서 innerFunc는 outerFunc 내부의 변수 x에 접근할 수 없다.
function innerFunc(){
    console.log(x);
}

outerFunc();