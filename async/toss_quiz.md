###  Q. 다음 코드의 실행 결과는?
```javascript
const init = async () => {
    const getSomeData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const jsonData = await response.json();
        
        return jsonData;
    };

    const data = await getSomeData();

    console.log(data);
}


init();
```

### A.
주어진 코드와 선택지를 분석해 보면, 핵심은 getSomeData()가 async 함수이므로 Promise 객체를 반환한다는 점입니다. 그런데 아래와 같이 await 없이 getSomeData()를 호출하고 그 값을 바로 data에 할당했습니다:
```javascript
const data = getSomeData();  
```
이 시점에서 data에는 실제 JSON 데이터가 아닌 Promise 객체가 들어갑니다. 따라서 console.log(data)는 JSON이 아닌 Promise를 출력합니다.

