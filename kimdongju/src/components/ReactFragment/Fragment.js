// React.Fragment의 구조를 설명하는 컴포넌트
// 해당 컴포넌트는 예로써, 직접 사용하지는 않는다.

// props는 하위 요소들의 모임인 children 배열을 기본적으로 가지기 때문에, props.children이라는 '하나의 배열'을 return하게 되면 javascript의
// 규칙을 여전히 지키게 되는 것이기 때문에 <div></div>와 같은 최상위 요소 없이도 요소들을 return하게 된다.
const Fragment = (props) => {
  return props.children
}

export default Fragment