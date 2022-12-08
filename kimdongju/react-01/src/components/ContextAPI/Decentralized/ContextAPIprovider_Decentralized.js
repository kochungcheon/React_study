// Context는 src/context/context-example.js 참고

import React, {useState} from 'react'

// Context를 사용하기 위해 예제 Context import
import ContextExample from '../../../context/context-example'

// Context 데이터를 사용할 자식 컴포넌트 import
import ContextAPIconsumer_Decentralized from './ContextAPIconsumer_Decentralized'


const ContextAPIprovider_Decentralized = (props) => {

  const [userInput, setUserInput] = useState('')

  function inputChangeHandler(event) {
    setUserInput(event.target.value)
  }

  function showAlert() {
    alert("This is context's function!")
  }

  return (
    // ContextExample을 Provider 포지션으로 작성하여 요소들을 감싼다.
    // ContextExample의 속성의 키를 value로 작성, 값으로 사용할 변수들 혹은 함수 작성 
    <ContextExample.Provider
      value={{
        // data1의 값으로 userInput을 사용, 동적 할당에 해당
        data1: userInput,
        // 아래 두개의 키값은 함수
        // 자식 컴포넌트에서도 사용 가능
        inputChangeHandler, inputChangeHandler,
        contextFunction: showAlert,
      }}
    >
      {/* Context의 변수, 함수들을 사용할 자식 컴포넌트 */}
      <ContextAPIconsumer_Decentralized />

    </ContextExample.Provider>

  )
}

export default ContextAPIprovider_Decentralized