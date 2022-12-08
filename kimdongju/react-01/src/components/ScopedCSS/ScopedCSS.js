import React, {useState} from "react";

// 1. CSS module import
// CSS module을 사용하기 위해서는 css파일의 이름과 css 확장자명 사이에 .module을 붙여야 한다.
// import를 할 때에는 일반적인 css파일과 달리 styles (관례적)를 import해야 한다.
import styles from './ScopedCSS.module.css'


// 2. styled-components를 사용한 컴포넌트 import
// styled-components에 관한 내용은 StyledComponents 컴포넌트 참고
import StyledComponents from "./StyledComponents";



const ScopedCSS = (props) => {
  const [booleanValue, setBooleanValue] = useState(false)
  function clickToggleHandler() {
    setBooleanValue(!booleanValue)
  }

  return (
    <div>
      <button onClick={clickToggleHandler}>Toggle boolean</button>
      <br />
      
      {/* 1. CSS module을 이용한 Scoped-dynamic-styling */}
      {/* 일반적인 css를 사용할 때와 달리, 클래스 이름을 아래와 같이 styles.<클래스 이름>으로 지정해야 한다. */}
      {/* 클래스 이름이 여러개일 경우 백틱(``)으로 감싸고 클래스 이름을 각각 ${}으로 감싼다. */}
      {/* 또한 클래스 이름에 '-'을 사용하기 위해서는 styles['클래스 이름']과 같은 형태를 사용해야 한다. */}
      <div className={`${booleanValue && styles.example} ${styles['div-tag']}`}>
        Div tag using CSS module
      </div>


      {/* 2. styled-components를 이용한 Scoped-dynamic-styling */}
      {/* styled-components는 해당 컴포넌트의 속성을 props로 전달하기 때문에 className을 선언한다면 className을 중첩하여 사용가능하게 된다. */}
      {/* 해당 className이 어떻게 사용되는지는 StyledComponents 컴포넌트 참고 */}

      {/* 또한 className 뿐만 아니라 개발자가 원하는 대로 props를 전달하여 css에서 사용할 수 있다. */}
      <StyledComponents className={'nested-class-name'} booleanValue={booleanValue}>Button that styled-components applied.</StyledComponents>


    </div>
  )
}

export default ScopedCSS