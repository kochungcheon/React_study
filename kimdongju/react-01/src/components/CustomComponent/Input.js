import React from "react";

const Input = (props) => {

  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* input의 속성에 spread syntax를 사용할 수 있다. props.input에는 아래와 같은 객체가 담겨있다. */}
      {/* {id: 'amount', type: 'number', min: '1', max: '5', step: '1', defaultValue: '1' } */}
      <input {...props.input} />

    </div>
  )
}

export default Input