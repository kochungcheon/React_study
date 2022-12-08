// useEffect import
import React, { useState, useEffect } from 'react'

const UseEffect = (props) => {
  const [triggerValue, setTriggerValue] = useState('')
  const [executedEffectCount, setExecutedEffectCount] = useState(0)

  function changeHandler (event) {
    setTriggerValue(event.target.value)
  }

  // useEffect는 원하는 코드를 특정 의존성이 변경되었을 경우에만 재실행 되도록 한다. (사이드 이펙트)
  // 즉, 해당 컴포넌트나 앱이 새로고침 등의 이유로 재실행이 되었을 경우, 불필요하게 함수 등이 매번 재실행 되는 것을 방지한다.
  // 중요한 점은 useEffect는 모든 컴포넌트들의 재평가가 완료된 이후 실행된다는 점이다.

  // 아래의 useEffect는 어떠한 의존성도 지니고있지 않다.
  // 즉, 앱이 실행되었을 때 한번만 실행하도록 되어있다.
  useEffect(() => {
    setExecutedEffectCount(executedEffectCount + 1)
  }, [])

  // 아래의 useEffect는 triggerValue라는 state에 의존성을 지니고 있다.
  // 즉, triggerValue의 값이 변했을 때 아래의 useEffect가 실행된다.
  useEffect(() => {
    setExecutedEffectCount(executedEffectCount + 1)
  }, [triggerValue])


  // useEffect를 setTimeout과 결합한 예시
  // useEffect는 함수를 반환할 수 있다. (익명 함수, 이름을 가진 함수 모두 포함. 여기서는 익명의 함수)
  // 반환하는 함수는 useEffect가 새로 실행될 때 이전의 useEffect의 코드에 영향이 미치도록 되어있다.
  // 즉 clearTimeout(update) 코드는 가장 최신의 이전 useEffect의 update 함수를 정지시킨다.
  // 이를 디바운싱이라 한다.
  // 이는 나중에 http 리퀘스트를 보내는 등의 작업을 할 때에 사용자의 키 입력이 이뤄질 때마다 매번 요청을 보내기에는 성능적으로 트래픽적으로 비효율
  // 적이기 때문에 아래와 같은 구조를 사용하면 사용자가 입력을 일정시간동안 하지 않으면 요청이 보내지도록 설계할 수 있다.
  useEffect(() => {
    console.log('useEffect is on proccessing.')

    const update = setTimeout(() => {
      setExecutedEffectCount(executedEffectCount + 100)
    }, 1000)
    
    return () => {
      clearTimeout(update)
      console.log('CLEANUP previous useEffect.')
    }
  }, [triggerValue])

  // props로 넘겨받은 부모 컴포넌트의 데이터를 의존성에 추가하고자 한다면 props의 데이터를 해당 컴포넌트의 것으로 만드는 과정을 거쳐야 한다.
  // const parentData = props.parentData
  // useEffect(() => {
  //   setExecutedEffectCount(executedEffectCount + 1)
  // }, [parentData])

  return (
    <div>
      <p>{executedEffectCount}</p>
      <input type="text" onChange={changeHandler} />
    </div>
  )
}

export default UseEffect