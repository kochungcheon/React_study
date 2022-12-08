import React, {useState} from 'react'
import Modal from './Modal'

const ReactPortal = (props) => {

  const [showModal, setShowModal] = useState(false)

  function clickAlertHandler() {
    setShowModal(!showModal)
  }

  return (

    
    
    <div>
      {/* React Portal을 사용했을 때에 해당 컴포넌트를 불러오게 될 자리가 될 부모 요소 */}
      {/* 해당 코드는 예시를 위해 해당 컴포넌트에 작성되어 있지만 Portal의 사용의도를 위해서는 public/index.html의 body태그 바로 아래 작성하는 것이 보통이다. */}
      <div id="backdrop-root"></div>
      <div id="overlay-root"></div>
      <div>
        <div>
          <div>
            <div>
              {/* React Portal이 사용된 컴포넌트를 불러오면 아래와 같이 아무리 많은 요소가 중첩되어 있더라도 해당 컴포넌트는 개발자가 의도하는 요소에 위치하게 된다.
              React Portal가 어떻게 사용되었는지는 Modal 컴포넌트 참고 */}
              {showModal && <Modal title={'Modal Form'} message={'You clicked custom button!'} onConfirm={clickAlertHandler}/>}
            </div>
          </div>
        </div>
      </div>
      <button onClick={clickAlertHandler}>Show Modal</button>
    </div>
  )
}

export default ReactPortal