import React from 'react'

// 자식 컴포넌트 import
import ChildComponent_ParentToChild from './ChildComponent_ParentToChild'

const ParentComponent_ParentToChild = (props) => {
  // 자식 컴포넌트에 넘겨줄 상수 예시
  const ParentData = 'I am ParentData.'

  return (
    <div>
      {/* 자식 컴포넌트의 속성에 임의의 이름 receivedData를 선언하고 인자로 해당 컴포넌트의 ParentData를 넘겨준다. */}
      <ChildComponent_ParentToChild receivedData={ParentData}/>
    </div>
  )
}

export default ParentComponent_ParentToChild