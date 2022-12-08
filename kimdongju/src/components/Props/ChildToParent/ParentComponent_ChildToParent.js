// childData를 넘겨받았을 때 해당 컴포넌트를 넘겨받은 데이터로 재렌더링 하기 위해 useState 훅을 import
import React, {useState} from 'react'

// 자식 컴포넌트 import
import ChildComponent_ChildToParent from './ChildComponent_ChildToParent'

const ParentComponent_ChildToParent = (props) => {

  // useState 훅을 통해 변수 선언, React에서는 변하지 않는 상수를 제외하고는 useState를 통해 변수를 선언
  const [parentVariable, setParentVariable] = useState('not received childData yet.')

  // 자식 컴포넌트에게 넘겨줄 함수
  // 자식 컴포넌트에게 해당 함수를 넘겨주고, 자식 컴포넌트는 이 함수의 인자에 childData를 담아서 부모에게 올려보낸다.
  // 다시 부모에게 올려보낸 해당 함수는 자식에게 넘겨받은 childData를 useState를 사용하여 parentVariable에 대입한다.
  const ParentFunction = (childData) => {
    setParentVariable(childData)
  }

  return (
    <div>
      {/* 자식 컴포넌트의 속성에 임의의 이름 conveyData를 선언하고 인자로 데이터를 받아올 함수 ParentFunction를 넘겨준다. */}
      <ChildComponent_ChildToParent conveyData={ParentFunction}/>

      {/* 자식에게 받은 데이터를 html에 표시 */}
      {parentVariable}
    </div>
  )
}

export default ParentComponent_ChildToParent