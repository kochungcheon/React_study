// React.Fragment를 사용하기 위해서는 React를 import해야 한다.
import React from 'react'

const ComponentUsedWrapper = (props) => {

// React와 같이 컴포넌트 기반의 프레임워크는 기본적으로 각각의 컴포넌트는 가장 상위의 요소에 하위 요소들을 묶어서 return해야만 한다.
// 하지만 이렇게 사용할 경우 수많은 컴포넌트들이 중첩될 때, 의미없는 요소들이 다수 중첩되는 중첩 지옥에 빠질 수 있다.
// 또한 이러한 모든 요소들을 렌더링 하게 되면 성능 면에서도 좋지 않고, 클래스 이름이 중첩되어 html구조를 구성하는데에 있어서도 어려움을 겪을 수 있다.
// 이때 React.Fragment를 사용하면 해당 컴포넌트는 더이상 최상위 요소 하나에 하위 요소들을 감싸서 return하지 않게 된다.

  return (
    // React.Fragment로 감싼 요소들
    // html 구조에서 더이상 하위 요소들을 감싸는 최상위 요소(예: <div></div>)가 보이지 않게 된다.
    <React.Fragment>
      <div>First Element</div>
      <div>Second Element</div>
      <div>Third Element</div>
    </React.Fragment>
  )
}

export default ComponentUsedWrapper