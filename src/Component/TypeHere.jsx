import React from 'react'
import { Input } from 'antd';



const { TextArea } = Input;
const TypeHere = (props) => {

    // const type = document.querySelector('.type-here-inner');
    // type.addEventListener('input', () => {
       
    // })




  return (
    <div className='type-here'>
      <p className='font-bold text-[24px] red-hat'>{props.title}</p>
      <div className='type-here-inner mt-[40px]'>
        <Input />
      </div>
   
      <div className='flex gap-[10px] mt-[20px]'>
        <button className='cancel-btn'>Cancel</button>
        <button className='save-btn'>Save</button>
      </div>
    </div>
  )
}

export default TypeHere
