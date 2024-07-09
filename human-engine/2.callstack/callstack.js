// 실행을 안 해보고도 실행 결과가 어떤지, 어떤 함수에서 어떤 변수에 접근 가능한지 99% 정확하게 알고 계셔야 합니다.
// 머릿속에 그릴 줄 아셔야 코드를 제대로 작성할 수 있습니다.
// 처음에는 직접 그리는 연습을 해 보고 익숙해지면 머릿속으로 그리세요.

// 코드에 debugger;를 집어넣고 브라우저에서 실행하면 source 탭에서 호출 스택을 확인할 수 있습니다.

function c(){ 
    console.log('c');
    debugger;
}

function a(){
    var private = 'x';
    console.log('a');
    function b(){
        const z = 'z';
        console.log('b');
        c();
    }
    b();
}

a();
c();

console.log(private);