import React from 'react'

const ChildComponent_ChildToParent = (props) => {

  const childData = 'I am ChildData.'

  // 부모가 보내준 함수를 childData와 함께 위로 올려보낸다.
  props.conveyData(childData)
  
  return (
    <div>

    </div>
  )
}

export default ChildComponent_ChildToParent