// 해당 컴포넌트는 JSX를 다루지 않기 때문에 React import문이 필요 없다.
// import React from 'react'

// 1. 개요
// 독립된 스타일을 가지는 하나의 요소만을 가지는 컴포넌트 생성
// styled components를 사용한 요소는 고유의 랜덤한 클래스 이름을 가진다.
// styled components는 결국 상수(constant) 형태로 선언되기 때문에, 독립된 컴포넌트가 아니라 styled-components를 사용할 컴포넌트에 작성하고 import & export 없이 해당 컴포넌트에 한정하여 사용할 수도 있다.
// 공식 문서 참고 : https://styled-components.com/

// 2. 설치 방법 : 콘솔에 아래의 코드를 입력
// npm install --save styled-components

// 3. 사용 방법 : 아래의 코드를 참고

// styled import
import styled from 'styled-components'

// styled components를 사용하면 화살표 함수 대신 styled.<요소>``와 같은 형태를 사용
// styled. 뒤에 붙는 요소는 button 뿐만 아니라 div 등 여러 요소들 또한 사용 가능
// 일반적인 상태에서의 스타일은 전후에 어떠한 괄호 없이 바로 작성

// 1. hover나 focus 등과 같은 특정 상태를 가리키는 스타일은 &:<상태> { 스타일 } 과과 같은 형태로 작성한다.
// 2. 중첩되는 클래스 이름 또한 마찬가지로 &<.클래스 이름> { 스타일 } 과 같은 형태로 작성한다.
// 3. props로 넘겨받은 변수로 동적인 스타일을 구성할 수 있다. : ${props => props.booleanValue ? 'red' : 'blue'}
const StyledComponents = styled.button`
  background-color: ${props => props.booleanValue ? 'red' : 'blue'};
  width: 300px;

  &:hover {
    background-color: white;
  }

  &.nested-class-name {
    border: 10px solid black;
  }
`

export default StyledComponents

