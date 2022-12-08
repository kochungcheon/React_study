// Context 파일은 여러개 작성하여 각각의 컴포넌트들에 서로 다른 Context가 적용 가능하다.
// Context는 값이 초단위 혹은 0.1초 단위로 자주 바뀌는 경우에는 사용하지 않는 것이 좋다. (OFFICIAL)

import React, {useState} from 'react'

// 실질적인 Context 부분
// 여기에 데이터 초기값을 작성해도 사용할 수는 없다.
// 사실상 VSCode의 자동 완성을 위해 더미 데이터를 작성한 것 뿐이다.
const ContextExample = React.createContext({
  data1: '',
  contextFunction: () => {},
});


// 컨텍스트를 관리하는 별도의 컴포넌트
// 해당 컴포넌트는 src/index.js에서 사용
export const ContextExampleProvider = (props) => {
  const [userInputContext, setUserInputContext] = useState('')

  const inputContextChangeHandler = (event) => {
    setUserInputContext(event.target.value)
  }

  const showContextAlert = () => {
    alert("This is context's function!")
  }

  return <ContextExample.Provider
    value={{
      data1: userInputContext,
      inputContextChangeHandler: inputContextChangeHandler,
      contextFunction: showContextAlert,

    }}
  >{props.children}</ContextExample.Provider>
}

export default ContextExample