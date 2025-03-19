import React from 'react'
import { useState } from 'react'
import Text from './Text'

const StaticComponent = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className='static-inner red-hat'>
      <p>{props.title}</p>
      <div>
        <img onClick={() => setIsModalOpen(true)} src="edit2.png"  alt="edit" />
      </div>
      <Text isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} title={props.title} />
    </div>
    
  )
}

export default StaticComponent
