// useState를 사용하기 위해 react에서 useState 훅을 import
import React, {useState} from 'react'

const UseStateAdvanced = (props) => {

  // 아래와 같이 객체를 useState로 선언할 수 있다.
  const [exampleVar, setExampleVar] = useState({
    data1: 'data1 has not changed yet.',
    data2: 'data2 has not changed yet.',
    data3: 'data3 has not changed yet.',
  })

  // useState로 객체의 내용을 바꿀 경우, useState의 특성을 아는 것이 중요한데, useState는 엄밀히 말해 변수의 내용을 '변경' 시키는 것이 아니라 완전히 새롭게 재정의하는 것이다.
  // 그러므로 객체의 내용을 바꿀 때 바꾸고자 하는 키와 값만 작성할 경우, 그 외의 모든 키값들은 사라지게 된다.
  // 결국, 이전의 데이터를 받아오고 거기에 새로운 키값을 덮어쓰기해야 하는데, 이전의 데이터를 받아오는 방법은 여러가지가 있으나, 한번에 useState로 변수의 값을 여러번 변경 시킬 경우,
  // 다른 방법들은 가장 최신의 이전 데이터를 받아오는 것을 보장하지 않기 때문에 아래와 같은 형태를 사용한다.
  // 값을 변경하고자 하는 변수의 useState 함수를 화살표 함수의 형태로 작성해야 한다.
  // 이때 해당 함수의 인자로 prevState를 선언하는데, 해당 인자는 해당 변수의 이전 데이터를 받아오는데, 가장 최신의 이전 데이터를 받아오는 것을 보장한다.
  // 그리고 해당 함수 내에서 재정의하고자 하는 값을 return하면 되는데 이때 prevState를 spread syntax(...객체 혹은 배열)을 사용하여 손쉽게 이전 데이터와 결합시켜 반환한다.
  // (spread syntax를 사용할 때 중복되는 키값이 있으면 가장 최신의 키값으로 갱신되므로 결국 의도하고자 하는 결과값이 생성된다.)
  const onClickChangeData1Handler = () => {
    setExampleVar((prevState) => {
      return { ...prevState, data1: 'data1 has been changed.' }
    })
  }

  const onClickChangeData2Handler = () => {
    setExampleVar((prevState) => {
      return { ...prevState, data2: 'data2 has been changed.' }
    })
  }

  const onClickChangeData3Handler = () => {
    setExampleVar((prevState) => {
      return { ...prevState, data3: 'data3 has been changed.' }
    })
  }
  

  return (
    <div>
      {/* 아래의 버튼을 클릭하면 변수의 내용이 갱신되면서 해당 컴포넌트가 재렌더링 된다. */}
      <button onClick={onClickChangeData1Handler}>Change Data1</button>
      <button onClick={onClickChangeData2Handler}>Change Data2</button>
      <button onClick={onClickChangeData3Handler}>Change Data3</button>
      <br></br>
      {/* 변수의 내용 */}
      <p>{exampleVar.data1}</p>
      <p>{exampleVar.data2}</p>
      <p>{exampleVar.data3}</p>
    </div>
  )
}

export default UseStateAdvanced