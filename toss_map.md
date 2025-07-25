아래 JavaScript 코드는 Map 객체를 사용하여 정보를 저장하고 요소를 검색하는 동작을 하고 있어요.  
다음 보기 중 map.get 메서드를 통해 요소에 접근하는 "올바른" 시간 복잡도를 고르세요.

```javascript
const map = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3'],
  ...,
  ['key9999', 'value9999']
]);

map.get('key582');
```

<br>

 ### <해설>
 Map 객체는 ECMAScript 2015(ES6)에서 도입된 자료구조로, 키-값 쌍을 저장하며 삽입된 순서를 기억한다. Map 객체는 일반 객체보다 키의 타입으로 다양한 값을 허용하며, 해시 테이블(Hash Table)을 기반으로 구현되어 있다.  
map.get(key) 메서드는 해당 키에 대응하는 값을 반환하는 메서드로, 내부적으로 해시를 통해 키를 탐색한다. 해시 테이블은 평균적으로 **O(1)**의 시간 복잡도를 가진다.  
이는 키를 해시 함수에 넣어 인덱스를 계산하고, 해당 인덱스에서 값을 즉시 가져올 수 있기 때문이다.  
다만, 충돌이 발생할 경우 체이닝이나 오픈 어드레싱 방식 등으로 충돌을 해결해야 하므로 최악의 경우 **O(n)**이 될 수 있다.  
그러나 문제에서 묻는 것은 "올바른" 시간 복잡도, 즉 평균적인 시간 복잡도를 의미하므로, 일반적인 상황에서는 **O(1)**이 정답이다.  

※ 부연 설명
일반적인 인터뷰나 시험에서 JavaScript의 Map 또는 Python의 dict, Java의 HashMap 등 해시 기반 자료구조의 조회 연산은 **O(1)**로 간주한다.
