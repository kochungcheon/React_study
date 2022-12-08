// Context는 src/context/context-example.js 참고

import React from 'react'

// ContextExample.js에 작성된 Context를 관리하는 별도의 컴포넌트를 import
// 중앙집중식으로 Context를 사용하려면 src/index.js에 import한다. (여기서는 예제 코드를 위해 별도의 컴포넌트에 작성)
// 그리고 아래와 같이 root.render ~~ 부분에 <ContextExampleProvider></ContextExampleProvider>로 <App />을 감싼다.
// root.render(
//   <React.StrictMode>
//     <ContextExampleProvider>
//       <App />
//     </ContextExampleProvider>
//   </React.StrictMode>
// );
import { ContextExampleProvider } from '../../../context/context-example'

// Context 데이터를 사용할 자식 컴포넌트 import
import ContextAPIconsumer_Centralized from './ContextAPIconsumer_Centralized'

const ContextAPIprovider_Centralized = (props) => {
  return (
    // ContextExample.js에 작성된 Context를 관리하는 별도의 컴포넌트인 ContextExampleProvider로 요소들을 감싼다.
    // 이때 value 속성은 ContextExample.js의 ContextExampleProvider에 모두 작성되어 있으므로 작성하지 않아도 된다.
    <ContextExampleProvider>
      {/* Context의 변수, 함수들을 사용할 자식 컴포넌트 */}
      <ContextAPIconsumer_Centralized/>
    </ContextExampleProvider>
  )
}

export default ContextAPIprovider_Centralized