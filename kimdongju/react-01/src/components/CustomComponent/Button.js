import React from 'react'

import styles from './Button.module.css'

const Button = (props) => {
  
  return (
    // React에 내장된 기능을 가진 이름을 props로 전달 받으면 해당 컴포넌트로 전달 받은 뒤 실행된다.
    // 예를 들어 부모 컴포넌트의 함수가 저장된 props.onClick를 전달 받으면 해당 부모 컴포넌트의 함수가 실행된다.
    // 클래스 이름은 해당 커스텀 컴포넌트 자체의 클래스 이름과 props.className으로 전달받은 클래스 이름이 중첩된다.
    // 타입같은 경우도 마찬가지로 props.type으로 전달받은 타입이 적용되고, props.type을 넘겨받지 않으면 'button'이라는 속성이 기본적으로 적용된다.
    <button className={`${styles.button} ${props.className} `} type={props.type || 'button'} onClick={props.onClick}>
      {/* button 요소 사이에는 해당 컴포넌트가 감싸고 있는 내용이나 요소가 보이도록 {props.children}을 작성한다. */}
      {props.children}
    </button>
  )
}

export default Button