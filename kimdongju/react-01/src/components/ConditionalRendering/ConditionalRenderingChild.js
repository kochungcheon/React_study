import React from 'react'

const ConditionalRenderingChild = (props) => {

  // props로 받은 부모 컴포넌트 변수의 true, false 상태에 따라 다른 html 요소들을 return
  if (props.parentCondition === false) {
    return (
      <div>
        Hidden element.
      </div>
    )
  } else {
    return (
      <div>
        This element will show when condition variable is true only.
      </div>
    )
  }
  
}

export default ConditionalRenderingChild