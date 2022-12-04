import React, {useState} from 'react'

import './DynamicAttribute.css'

const DynamicAttribute = (props) => {

  const [valueCSS, setValueCSS] = useState('white')
  function clickChangeHandler1() {
    setValueCSS('red')
  }

  const [booleanValue, setBooleanValue] = useState(false)
  function clickChangeHandler2() {
    setBooleanValue(!booleanValue)
  }

  const [idValue, setIdValue] = useState('input ID')
  function inputChangeHandler(event) {
    setIdValue(event.target.value)
  }

  return (
    <div>

      <button onClick={clickChangeHandler2}>Toggle Boolean</button>
      <br />
      <input type="text" value={idValue} onChange={inputChangeHandler} />

      {/* 1. 클래스나 ID 이름을 동적으로 설정 */}
      {/* 클래스나 이름에 따라 스타일 또한 동적으로 변경된다. 스타일 구조는 DynamicAttribute.css 파일 참고 */}
      {/* ID는 위 input의 value와 바인딩되어 있다. */}
      <div id={idValue} className={`dynamic-css-div ${booleanValue ? 'invalid' : ''}`}>
        Dynamic className and ID applied. (Included dynamic CSS)
      </div>
      

      {/* React에서는 스타일을 동적으로 지정할 수 있다. 이때 style속성의 값은 {{}}로 감싸준다. */}
      {/* 중요한 점은 background-color와 같이 중간에 -가 들어가는 경우는 카멜케이스인 backgroundColor로 사용해야 한다. */}
      {/* 중간에 -가 들어가는 경우, 따옴표('')로 감싸줘도 사용은 가능하지만 console 창에서 오류가 발생한다.  */}
      {/* 정적인 값은 따옴표('')로 감싸준다. */}

      {/* 1. 삼항 연산자를 사용하여 변수의 boolean 값을 기준으로 스타일 토글이 가능 */}
      <div style={{width: '600px', backgroundColor: booleanValue ? 'red' : 'white'}}>
        Dynamic CSS applied.
      </div>

      {/* 2. 변수 값 자체를 스타일 속성으로 사용하는 경우 */}
      <button onClick={clickChangeHandler1}>Change Style</button>
      <div style={{width: '600px', backgroundColor: valueCSS}}>
        Dynamic CSS applied.
      </div>


      
      

    </div>
  )
}

export default DynamicAttribute