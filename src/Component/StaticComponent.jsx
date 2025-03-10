import React from 'react'

const StaticComponent = (props) => {
  return (
    <div className='static-inner red-hat'>
      <p>{props.title}</p>
      <div>
        <img src="edit2.png"  alt="edit" />
      </div>
    </div>
  )
}

export default StaticComponent
