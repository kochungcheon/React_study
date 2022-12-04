import React, {useState} from 'react'

import ConditionalRenderingChild from './ConditionalRenderingChild'

const ConditionalRendering = (props) => {
  // 1 번째 방법
  // 변수 자체에 html 요소를 삽입할 수 있다.
  const [conditionalElement, setConditionalElement] = useState(<div>Hidden element.</div>)
  function clickChangeHandler2() {
    setConditionalElement(<div>This element will show when you clicked button above.</div>)
  }


  // 2 ~ 4 번째 방법
  // 눈에 보이지 않고 백그라운드에서만 존재하는 변수 또한 useState를 이용해야만 해당 변수에 영향을 받는 요소 및 컴포넌트가 재렌더링 된다.
  const [condition, setCondition] = useState(false)

  function clickChangeHandler1() {
    setCondition(!condition)
    console.log(condition)
  }

  // 5, 6 번째 방법에 사용될 배열
  const object = [
    {name: 'Kim', age: 27, gender: 'Man'},
    {name: 'Lee', age: 24, gender: 'Woman'},
    {name: 'Kwak', age: 30, gender: 'Man'},
    {name: 'Song', age: 25, gender: 'Woman'},
    {name: 'Tae', age: 31, gender: 'Woman'},
  ]

  // 6 번째 방법
  // object 배열을 사전에 필터링한다.
  const filteredObject = object.filter((el) => {
    return el.gender === 'Man'
  })

  
  
  return (
    <div>
      {/* 1. 변수에 요소를 지정 */}
      {/* 권장시 되는 방법 */}
      <button onClick={clickChangeHandler2}>Toggle Button for method 1</button>
      {/* html 요소가 저장된 변수 */}
      {conditionalElement}


      {/* Method 2, 3, 4 */}
      <button onClick={clickChangeHandler1}>Toggle Button for method 2, 3, 4</button>

      {/* 2. 자바스크립트의 특성을 이용 */}
      {/* && 앞의 조건이 만족되면 && 뒤의 요소가 렌더링 된다. 가장 간단한 방법 */}
      {condition === true && <div>This element will show when condition variable is true only.</div>}
      {condition === false && <div>Hidden element.</div>}

      {/* 3. 삼항 연산자 사용 */}
      {condition === false ? <div>Hidden element.</div> : <div>This element will show when condition variable is true only.</div>}

      {/* 4. 자식 컴포넌트에 조건이 되는 변수를 props에 전달, 자식 컴포넌트 차원에서 조건에 따라 다른 html 요소들을 return */}
      <ConditionalRenderingChild parentCondition={condition} />

      {/* 5. 배열이나 객체의 조건에 따른 컴포넌트 혹은 요소를 map과 if문을 이용한 반복 렌더링 */}
      {object.map((el) => {
        if (el.gender === 'Man') {
          return <div key={el.name}>{el.name}, {el.age}, {el.gender}</div>
        }
      })}

      {/* 6. 배열이나 객체를 filter 메서드로 사전에 필터링 한 후 컴포넌트 혹은 요소를 map으로 반복 렌더링 */}
      {filteredObject.map((el) => <div key={el.name}>{el.name}, {el.age}, {el.gender}</div>)}

    </div>
  )
}

export default ConditionalRendering