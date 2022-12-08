import React, {useState} from 'react'

const OnEventBasic = (props) => {

  // userInput 선언
  const [userInput, setUserInput] = useState('')

  // Input 요소에 텍스트가 입력될 때마다 해당 함수 실행
  function inputChangeHandler(event) {
    // userInput을 Input요소의 내용으로 갱신
    setUserInput(event.target.value)
  }

  // Button 클릭 시 해당 함수 실행
  function clickHandler(event) {
    alert('You clicked button.')
  }

  return (
    <div>
      {/* userInput의 내용 표시 */}
      <p>Input: {userInput}</p>

      {/* onChange는 해당 요소에 변경점이 있을 때마다 함수를 실행시킴 */}
      {/* onInput도 같은 역할이지만 onChange는 Input 외에도 Select, Dropdown 등등에도 사용이 가능 */}
      {/* 텍스트가 입력될 때마다 inputChangeHandler 함수 실행 */}
      {/* input의 value 속성으로 양방향 바인딩, props와 함께 사용하면 자식이나 부모 컴포넌트간 요소와 양방향 바인딩이 가능하다. */}
      <input type="text" onChange={inputChangeHandler} value={userInput}/>
      <br />

      {/* onClick은 해당 요소를 클릭할 때마다 함수를 실행시킴 */}
      {/* 버튼을 클릭할 때마다 clickHandler 함수 실행 */}
      <button onClick={clickHandler}>onClickButton</button>

    </div>
  )
}

export default OnEventBasic