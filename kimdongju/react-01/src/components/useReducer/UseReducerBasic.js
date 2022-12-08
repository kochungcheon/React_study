import React, { useReducer } from 'react'


// 2. Reducer 함수 정의
// Reducer 함수에서 dispatch가 요청하는 유형과 값에 따라 다른 키의 값을 바꾸는 등의 작업을 한다.
const inputReducer = (state, action) => {
  if (action.type === 'CHANGE_DATA1') {
    return { data1: action.value, data2: state.data2 };
  }
  if (action.type === 'CHANGE_DATA2') {
    return { data1: state.data1, data2: action.value };
  }
}


const UseReducerBasic = (props) => {
  // useReducer 훅은 useState와 마찬가지로 State를 관리하지만 useState보다 더 많은 기능을 가지고 있으며, 그만큼 useState보다 더 복잡하다.
  // useReducer를 사용해야 하는 경우는 아래와 같다.
  // 여러개의 State가 존재하고, 그 State들이 서로를 참조하며 그 참조한 값을 토대로 새로운 값을 도출하는 경우.
  // 이 경우, State를 단순히 일반적인 방법으로 참조했을 경우, 가장 최신의 State가 아닌 그보다 더 이전의 State를 참조하는 경우가 발생할 수 있다.
  // 그럼 이를 해결하기 위해 State를 화살표 함수의 형태로 참조, 변경해야 하는데, 다른 State를 화살표 함수의 형태로 참조, 변경하는 것은 불가능하다.
  // 이러한 구조적 한계로 인해 사용 규칙을 위반하게 되는데, 이때 위에서 말했듯 가장 최신의 값을 참조하지 않을 가능성이 있기 때문에 useReducer을 사용하는 것이 좋다.

  // 1. useReducer 정의
  // const [변수(객체)의 이름, 변수값 변경하는 함수이름] = useReducer(Reducer 함수 이름, 초기값)
  const [inputState, dispatchInput] = useReducer(inputReducer, {data1: '', data2:''})


  // 3. dispatch 함수를 이용하여 Reducer 함수로 값을 전달
  function inputChangeHandler1(event) {
    dispatchInput({type:'CHANGE_DATA1', value: event.target.value})
  }

  function inputChangeHandler2(event) {
    dispatchInput({type:'CHANGE_DATA2', value: event.target.value})
  }

  return (
    <div>
      {inputState.data1}, {inputState.data2}
      <br />
      <input type="text" onChange={inputChangeHandler1} />
      <input type="text" onChange={inputChangeHandler2} />
    </div>
  )
}

export default UseReducerBasic