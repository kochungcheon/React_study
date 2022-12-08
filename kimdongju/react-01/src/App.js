import './App.css';
import Initialize from './components/Initailize/Initialize';
import ParentComponent_ParentToChild from './components/Props/ParentToChild/ParentComponent_ParentToChild';
import ParentComponent_ChildToParent from './components/Props/ChildToParent/ParentComponent_ChildToParent';
import UseStateBasic from './components/useState/UseStateBasic';
import UseStateAdvanced from './components/useState/UseStateAdvanced';
import UseRef from './components/useRef/UseRef';
import UseEffect from './components/useEffect/UseEffect';
import UseReducerBasic from './components/useReducer/UseReducerBasic';
import UseReducerAdvanced from './components/useReducer/UseReducerAdvanced';
import OnEventBasic from './components/onEvent/OnEventBasic';
import DynamicAttribute from './components/DynamicAttribute/DynamicAttribute';
import RecyclingComponent from './components/RecyclingComponent/RecyclingComponent';
import ConditionalRendering from './components/ConditionalRendering/ConditionalRendering';
import ScopedCSS from './components/ScopedCSS/ScopedCSS';
import CustomComponent from './components/CustomComponent/CustomComponent';
import ComponentUsedFragment from './components/ReactFragment/ComponentUsedFragment'
import ReactPortal from './components/ReactPortal/ReactPortal';
import ContextAPIprovider_Decentralized from './components/ContextAPI/Decentralized/ContextAPIprovider_Decentralized';
import ContextAPIprovider_Centralized from './components/ContextAPI/Centralized/ContextAPIprovider_Centralized';


function App() {
  // 일반적으로 유효한 자바스크립트 코드는 아님
  // 이는 JSX라는 기능, 구문으로 인해 가능한 형태
  // JSX는 자바스크립트 XML을 뜻함, 결국 html은 XML이라고 할 수 있기 때문
  // 백그라운드에서 html코드로의 변환 과정이 있음
  // 크롬의 개발자 모드에서 Sources 탭에서 localhost:3000 - static/js에서 관련 코드들을 확인할 수 있다.
  return (
    <div className="App">
      <p>VSCode에서 Ctrl + 컴포넌트 요소를 클릭하면 해당 컴포넌트 파일로 이동합니다.</p>
      <hr></hr>
      <p>1. 리액트 프로젝트 기본 셋팅</p>
      <Initialize/>
      <hr></hr>
      <p>2. Props - 부모가 자식에게 데이터 전달</p>
      <ParentComponent_ParentToChild/>
      <hr></hr>
      <p>3. Props - 자식이 부모에게 데이터 전달</p>
      <ParentComponent_ChildToParent/>
      <hr></hr>
      <p>4. useState - 리액트에서 사용되는 변수 조작 : 기초</p>
      <UseStateBasic />
      <hr></hr>
      <p>5. useState - 리액트에서 사용되는 변수 조작 : 고급</p>
      <UseStateAdvanced />
      <hr></hr>
      <p>6. useRef - 요소로부터 데이터를 받아오는 방법</p>
      <UseRef />
      <hr></hr>
      <p>7. useEffect - 의존하는 객체 혹은 변수가 변경되었을 때 실행되는 함수</p>
      <UseEffect />
      <hr></hr>
      <p>7. useReducer - useState보다 더 기능이 많지만 더 복잡한 State를 관리하는 훅 : 기초</p>
      <UseReducerBasic />
      <hr></hr>
      <p>7. useReducer - useState보다 더 기능이 많지만 더 복잡한 State를 관리하는 훅 : 고급</p>
      <UseReducerAdvanced />
      <hr></hr>
      <p>8. onEvent - 사용자의 요소에 대한 반응과 함수를 연결</p>
      <OnEventBasic />
      <hr></hr>
      <p>9. DynamicAttribute - 클래스 이름, ID, CSS 등을 동적으로 설정 </p>
      <DynamicAttribute />
      <hr></hr>
      <p>10. RecyclingComponent - 컴포넌트 하나에 각각의 데이터를 담아 배열의 인덱스만큼 반복하여 사용 </p>
      <RecyclingComponent />
      <hr></hr>
      <p>11. ConditionalRendering - 컴포넌트나 요소를 조건부 렌더링하는 방법 </p>
      <ConditionalRendering />
      <hr></hr>
      <p>12. ScopedCSS - 독립된 CSS 속성을 가지는 컴포넌트, CSS 모듈 </p>
      <ScopedCSS />
      <hr></hr>
      <p>13. CustomComponent - 특정 역할을 가지는 커스텀 컴포넌트, Wrapper Card, Button, etc... </p>
      <CustomComponent />
      <hr></hr>
      <p>14. React.Fragment - 최상위 요소는 반환하지 않고 하위 요소들만 반환하는 컴포넌트 </p>
      <ComponentUsedFragment />
      <hr></hr>
      <p>15. React.Portal - 요소나 컴포넌트를 DOM에서 원하는 위치로 이동 </p>
      <ReactPortal />
      <hr></hr>
      <p>15. ContextAPI - 전역적으로 사용가능한 변수 저장소 (분산식) </p>
      <ContextAPIprovider_Decentralized />
      <hr></hr>
      <p>15. ContextAPI - 전역적으로 사용가능한 변수 저장소 (중앙집중식) </p>
      <ContextAPIprovider_Centralized />
    </div>
  );
}

export default App;
