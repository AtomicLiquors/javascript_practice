29. 객관식

다음 JavaScript 코드를 실행했을 때 콘솔에 출력되는 결과와 그러한 결과가 나오게 된 "올바른" 이유를 보기에서 고르세요.

```js
const array = [];

function addNum(array, num) {
  array.push(num);
  return array;
}


const array2 = addNum(array, 1);
console.log(array === array2); // ??
```
답안을 선택하세요.

true / 배열은 Truthy Value이기 때문에 비교연산을 하면 true로 평가되기 때문이다.

true / array와 array2는 같은 레퍼런스를 가지고 있어 실질적으로는 같은 값이기 때문이다.

true / 배열은 모두 동일한 프로토타입을 가지고 있기 때문에 항상 같다고 평가된다.

false / array는 빈 배열이고 array2는 원소 1개를 가지고 있는 배열이기 때문이다.

false / 배열은 원소 개수와 상관없이 항상 다른 배열로 평가된다.

### ✅ 해설 
주어진 코드는 JavaScript에서 참조 타입인 배열의 비교 연산에 대한 이해를 묻는 문제이다.

```js
const array = [];
위 코드는 빈 배열을 생성하고 변수 array에 할당한다.

```js
function addNum(array, num) {
  array.push(num);
  return array;
}
```
함수 addNum은 전달받은 배열에 값을 push로 추가한 뒤, 같은 배열 객체를 반환한다.

```js
const array2 = addNum(array, 1);
여기서 array가 인자로 전달되며 1이 추가된다. array2에는 return array의 결과가 들어가므로, array2는 array와 같은 객체를 참조하게 된다.
```
```js
console.log(array === array2);
이 비교문은 두 배열이 같은 객체를 참조하고 있는지를 확인한다. 참조가 동일하므로 === 연산의 결과는 **true**이다.

각 보기를 검토하면 다음과 같다:

① 틀림. 배열이 Truthy value라는 설명은 맞지만, === 비교는 참조값 자체를 비교하므로 관련이 없다.

② 맞음. array와 array2는 같은 객체를 참조하고 있으므로 === 연산 결과는 true이다.

③ 틀림. 프로토타입이 같다고 해서 객체 비교에서 ===가 true가 되지는 않는다.

④ 틀림. 원소 개수는 같지 않지만, 참조가 동일하기 때문에 ===는 true이다.

⑤ 틀림. 배열이 다른 객체로 생성된 경우는 그렇지만, 이 경우는 같은 객체를 참조하므로 예외이다.

✅ 결론
정답: ② true / array와 array2는 같은 레퍼런스를 가지고 있어 실질적으로는 같은 값이기 때문이다.
