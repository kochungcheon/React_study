// useContext 훅을 import
import React, { useContext } from 'react'

// Context를 사용하기 위해 예제 Context import
import ContextExample from '../../../context/context-example'

const ContextAPIconsumer_Centralized = (props) => {
  // context 상수에 ContextExample을 useContext 훅을 통하여 선언
  const context = useContext(ContextExample)

  function clickHandler() {
    // context의 parentFunction 호출
    context.contextFunction()
  }

  return (
    <div>
      {/* context의 data1 표시 */}
      {context.data1}
      <br />
      {/* context의 inputChangeHandler 함수와 연결 */}
      <input type="text" onChange={context.inputContextChangeHandler} />
      <br />
      <button onClick={clickHandler}>Execute context's function</button>
    </div>
  )

}

export default ContextAPIconsumer_Centralized