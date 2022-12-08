import React, {useReducer, useEffect} from 'react'


const emailReducer = (state, action) => {
  if (action.type === 'CHANGE_VALUE') {
    return {value: action.value, isValid: action.value.includes('@')}
  }
}
const passwordReducer = (state, action) => {
  if (action.type === 'CHANGE_VALUE') {
    return {value: action.value, isValid: action.value.trim().length > 6}
  }
}

const UseReducerAdvanced = (props) => {

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null})
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null})

  // 중복되는 isValid를 별칭을 만들어 구조분해할당
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  // 구조분해할당으로 선언한 isValid들을 의존성으로 적용하면 사용자가 Email, Password 입력 시 일일이 useEffect가 실행되지 않는다.
  // Email, Password의 Value는 바뀌어도 isValid는 그대로인 경우는 실행되지 않고 오직 isValid가 바뀌었을 경우만 실행된다.
  // 구조분해할당을 하지 않았을 경우, isValid의 값이 그대로여도 useEffect는 isValid의 값이 변경된 것으로 감지하여 useEffect가 재실행된다.
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);


  function changeEmailHandler(event) {
    dispatchEmail({type: 'CHANGE_VALUE', value: event.target.value})
  }

  function changePasswordHandler(event) {
    dispatchPassword({type: 'CHANGE_VALUE', value: event.target.value})
  }




  return (
    <div>
      <p>console을 확인하세요.</p>
      <input type="text" placeholder='Email' onChange={changeEmailHandler} />
      <input type="password" placeholder='Password' onChange={changePasswordHandler} />
    </div>
  )
}

export default UseReducerAdvanced