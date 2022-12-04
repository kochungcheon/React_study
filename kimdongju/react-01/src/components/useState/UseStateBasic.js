// useState를 사용하기 위해 react에서 useState 훅을 import
import React, {useState} from 'react'

const UseStateBasic = (props) => {

  // React는 Vue.js와 달리 let이나 const로 선언된 변수나 객체가 변경되는 경우 이를 실시간으로 감지하고 재평가, html를 재렌더링 하지 않는다.
  // 결국 변수나 상수가 재선언, 변화가 생겨도 눈에 보이는 html은 그대로인데, 이를 해결하기 위해 useState 훅을 사용한다.
  // useState는 두개의 배열 요소를 반환한다.
  // 첫번째 요소는 변수 그 자체로, 아래의 경우에는 'Variable has not changed yet'이 들어있다.
  // 두번째 요소는 변수의 내용을 바꾸는 함수로, 예를 들어 setExampleVar('Variable has been changed.') 이라는 코드가 실행되면 exampleVar은 'Variable has not changed yet.' 이라는 내용으로 갱신된다.
  const [exampleVar, setExampleVar] = useState('Variable has not changed yet.')

  
  const onClickChangeHandler = () => {
    // 아래의 코드는 useState로 선언된 변수 exampleVar의 내용을 바꿔주는 함수이다.
    setExampleVar('Variable has been changed.')
  }
  

  return (
    <div>
      {/* 아래의 버튼을 클릭하면 변수의 내용이 갱신되면서 해당 컴포넌트가 재렌더링 된다. */}
      <button onClick={onClickChangeHandler}>Change Variable</button>
      {/* 변수의 내용 */}
      <p>{exampleVar}</p>
    </div>
  )
}

export default UseStateBasic