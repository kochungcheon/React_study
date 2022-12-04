// index.js
// 가장 먼저 실행되는 파일. Vue의 App.vue와 같다.

// react-dom이라는 제3자 라이브러리로부터 ReactDom 객체를 가져온다.
// react와 react-dom 이 두가지 패키지는 다른 역할을 하지만 결국 모두 React 라이브러리로부터 같은 의존성을 갖는다.
import React from 'react';
import ReactDOM from 'react-dom/client';

// css 파일을 자바스크립트 내로 가져오는 구문. 일반적인 자바 스크립트에서는 불가능하나 React에서 가능하도록 함
import './index.css';

// App.js를 import
import App from './App';
import reportWebVitals from './reportWebVitals';


// ReactDom 객체의 createRoot 메서드 호출
// 이를 통해 중요한 주요 엔트리 포인트가 생성됨
// React로 구축할 전반적인 사용자 인터페이스에 대한 주요 Hook
// React로 구축할 사용자 인터페이스인 React 애플리케이션을 불러온 웹페이지 상에서 어디에 배치해야 하는지 React에 알려주는 것
// 이 메서드로 인해 우리는 public 폴더에 있는 index.html 파일로 이동, index.html의 root라는 id를 가진 Div 태그 내에 사용자 인터페이스가 렌더링 되도록 한다.
// 이를 root 상수나 변수로 저장한다.
const root = ReactDOM.createRoot(document.getElementById('root'));

// React에서는 자바스크립트 내에서 html 코드가 작성되는데, 이 코드들이 브라우저로 전송될 때 html 코드로 변환되기 때문에 정상 동작하는 것이다.
// 이렇게 함으로써 html과 자바스크립트간의 경계가 흐려져 자바스크립트를 더 잘 활용할 수 있기 때문이라고 볼 수 있다.
// root 객체에 render 메서드를 호출하여 실질적으로 사용자 인터페이스에 해당하는 App.js이라는 컴포넌트를 렌더링 한다.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
