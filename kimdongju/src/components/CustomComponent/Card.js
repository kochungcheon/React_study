import React from 'react'

import './Card.css'

// 감싸는 역할을 하는 컴포넌트에 props 파라미터를 지정해야 한다.
// props를 통해 감싸고 있는 컴포넌트나 요소들을 받아오기 때문
function Card(props) {
  // 클래스 이름을 중첩해서 사용하기 위한 코드, 주의할 것은 문자열 뒤에 공백이 있어야 클래스 이름이 구분됨.
  const classes = 'card ' + props.className;
  return (
    // 감싸고자 하는 내용이 들어갈 {props.children} 코드를 최상위 요소 바로 아래에 삽입해야 한다.
    // 클래스 이름을 위에서 정의한 classes 상수로 입력
    <div className={classes}>
      <p>I am Card's element.</p>
      {props.children}
    </div>
  )
}

export default Card