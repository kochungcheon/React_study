import React from 'react'

const ListItem = (props) => {

  return (
    <div style={{margin:'15px', backgroundColor:'gray', color:'white'}}>
      <p>{props.name}, {props.age}, {props.gender}</p>
    </div>
  )
}

export default ListItem