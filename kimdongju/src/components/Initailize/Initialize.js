// React 최신버전에서는 React를 일일이 import할 필요는 없으나 관례적으로 React 컴포넌트라는 것을 명시하기 위해 import
import React from 'react'

// 다른 컴포넌트를 import하여 해당 컴포넌트에서 사용할 수 있다.
import ChildComponent from './ChildComponent'

// 해당 컴포넌트에 대한 스타일을 적용시키기 위해 css파일을 import
import './Initialize.css'

// html 코드를 반환하는 함수
// 이때 함수의 이름은 컴포넌트의 이름과 같게 하는 것이 일반적
// 인자 props는 컴포넌트간 데이터를 주고 받기위함임으로 항상 명시
const Initialize = (props) => {

  // html 코드를 반환할 뿐만 아니라 자바스크립트의 변수, 상수 등을 지정하고 html에 반영할 수 있다.
  const Example = 'Welcome to React'

  return (
    // return하고자 하는 html 코드는 항상 최상위 요소 한개로 묶여있어야 한다.
    // React에서 html요소들을 모두 사용가능하지만 다른 점 한가지로 class속성이 자바스크립트의 class 선언과 겹치기 때문에 class 대신 className을 사용한다.
    <div className="initialize">
      {Example}
      <ChildComponent />
    </div>
  )
}

// React에서 해당 컴포넌트를 인식할 수 있게 하기 위해서는 export가 필요
// 이때 export 뒤에 default를 붙여서 별도 지정 없이 해당 컴포넌트를 import하면 자동으로 html코드를 반환하는 함수를 import하게 한다.
export default Initialize