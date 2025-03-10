import React from 'react'

const Button = (props) => {
  return (
    <button style={{
      backgroundColor: '#4A7ABC',
      color: 'white',
      fontSize: '14px',
      border: 'none',
      fontWeight: '600',
      borderRadius: '10px',
      textAlign: 'center',
      width: '100%',
      height: '56px',
      cursor: 'pointer'
    }}>
      {props.title}
    </button>
  )
}

export default Button
