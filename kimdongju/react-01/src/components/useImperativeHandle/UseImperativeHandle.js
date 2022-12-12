// useImperativeHandle
// 컴포넌트나 컴포넌트 내부에서 오는 기능들을 명령적으로 사용할 수 있게 해주는 훅
// 일반적으로 자주 사용되는 훅은 아니며, 자주 사용해서도 안된다.

import React, {useRef, useImperativeHandle} from 'react'

// useImperativeHandle을 사용하기 위해서는 컴포넌트 함수를 forwardRef로 감싸주고 인자에 ref를 추가해야 한다.
// forwardRef는 리액트 컴포넌트를 반환한다.
// 중요! 또한 인자에 ref가 추가됨으로써 ref를 props처럼 부모 컴포넌트에게서 받아서 사용할 수 있다.
// input은 여전히 리액트 컴포넌트이지만, ref에 바인딩 될 수 있는 리액트 컴포넌트가 된다.
const UseImperativeHandle = React.forwardRef((props, ref) => {

  const userInputRef = useRef('')

  // useImperativeHandle 훅 선언
  useImperativeHandle(ref, () => {
    return {
      // activate함수에서 input의 focus 메서드를 사용할 수 있게 된다.
      focus: activate,
    }
  })

  // useImperativeHandle 훅에서 설정한 activate 함수에서는 focus 메서드를 사용할 수 있게 된다.
  const activate = () => {
    userInputRef.current.focus()
  }

  return (
    <div>
      <input type="text" ref={userInputRef} />
      <button onClick={activate}>Activate Input</button>
    </div>
  )
})

export default UseImperativeHandle