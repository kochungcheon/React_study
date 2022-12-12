import React, {useState} from 'react'
import Button from './Button'
import Card from './Card'
import Modal from './Modal'
import Input from './Input'

const CustomComponent = (props) => {

  const [showModal, setShowModal] = useState(false)

  function clickAlertHandler() {
    setShowModal(!showModal)
  }

  return (
    <div>

      <Input label="Amount" input={{id: 'amount', type: 'number', min: '1', max: '5', step: '1', defaultValue: '1' }} />
      
      {showModal && <Modal title={'Modal Form'} message={'You clicked custom button!'} onConfirm={clickAlertHandler}/>}
      <Card>
        <Button className="nested-class-name" onClick={clickAlertHandler}>Custom Button</Button>
      </Card>
    </div>
  )
}

export default CustomComponent