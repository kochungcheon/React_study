import React from 'react'
import styles from './Modal.module.css'

// React Portal을 사용하기 위해 ReactDOM import
import ReactDOM from 'react-dom'

// 모달창 바깥의 배경을 처리하는 Backdrop
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />
}

// 모달창 자체
const ModalOverlay = (props) => {
  return (
    <div className={`${styles.modal} ${styles.card}`}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <button onClick={props.onConfirm}>Okay</button>
    </div>
  )
}

const Modal = (props) => {
  return (
    <React.Fragment>
      {/* 요소들 각각을 backdrop-root와 overlay-root로 보낸다. */}
      {/* 참고 : backdrop-root와 overlay-root 요소들은 ReactPortal.js에 작성되어 있음. */}
      {/* createPortal의 첫번째 인자로 JSX 코드로 이루어진 요소, 두번째 인자로 native javascript 코드로 작성된 document.getElementById('요소 ID') */}
      {/* 첫번째 요소는 JSX 코드이므로 아래와 같이 여전히 props를 전달할 수 있다. */}
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById('overlay-root'))}
    </React.Fragment>
  )
}

export default Modal