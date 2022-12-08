import React, {useState} from 'react'
import Button from './Button'
import Card from './Card'
import Modal from './Modal'

const CustomComponent = (props) => {

  const [showModal, setShowModal] = useState(false)

  function clickAlertHandler() {
    setShowModal(!showModal)
  }

  return (
    <div>
      {showModal && <Modal title={'Modal Form'} message={'You clicked custom button!'} onConfirm={clickAlertHandler}/>}
      <Card>
        <Button className="nested-class-name" onClick={clickAlertHandler}>Custom Button</Button>
      </Card>
    </div>
  )
}

export default CustomComponent