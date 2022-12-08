import React from 'react'

const ChildComponent_ParentToChild = (props) => {

  return (
    <div>
      {/* 부모가 임의의 이름 receivedData로 넘겨준 props 데이터를 사용한다. */}
      {/* 이때 부모가 넘겨준 데이터는 함수의 props인자를 통해 넘겨받기 때문에 부모가 넘겨준 데이터 이름 앞에 props. 을 붙인다. */}
      {props.receivedData}
    </div>
  )
}

export default ChildComponent_ParentToChild