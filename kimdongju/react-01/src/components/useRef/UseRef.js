// ref를 사용하기 위해 useRef import
import React, {useRef} from 'react'

const UseRef = (props) => {
  // ref 선언
  const userInputRef = useRef('')

  
  function clickAlertHandler() {
    // ref에 담긴 값 확인
    // ref는 value 뿐만 아니라 내장 HTML 요소가 가지는 속성 모두에 접근이 가능하다. (예: focus 등등...)
    alert(userInputRef.current.value)
    
    // ref에 담긴 값 초기화, input 요소의 value도 함께 초기화된다.
    // DOM을 직접 조작하는 것은 지양해야 하나 ref를 사용할 때 input의 값을 초기화할 때 예외적으로 사용할 수 밖에 없다.
    // ref는 native DOM에서 조작되므로 '제어되지 않는 컴포넌트'라고 불리운다. React 단에서 조작되지 않기 때문이다.
    // 반대로 state가 사용되는 컴포넌트는 '제어되는 컴포넌트'라고 불리우는데, 이는 React 단에서 조작되는 state를 가지기 때문이다.
    userInputRef.current.value = ''
  }

  return (
    <div>
      {/* 아래와 같이 ref의 값을 표시하는 요소를 추가하였으나 state와 달리 실시간으로 렌더링 되지 않는다. */}
      {/* 즉 ref는 값을 html에 표시할 필요가 없는 값들을 간단하게 받아올 때 사용된다. */}
      <p>{userInputRef.current.value}</p>

      {/* input요소의 속성에 ref 추가, userInputRef와 바인딩한다. */}
      <input type="text" ref={userInputRef} />

      {/* 클릭하면 ref에 담긴 값을 확인한다. */}
      <button onClick={clickAlertHandler}>Check</button>
    </div>
  )
}

export default UseRef