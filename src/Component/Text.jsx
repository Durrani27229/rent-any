import React from 'react'
import Btn from './Btn'
import { Input, Modal } from 'antd'
const Text = ({isModalOpen, setIsModalOpen,title}) => {
    const { TextArea } = Input;
    const handleOk = () => {
        
        setIsModalOpen(false);
    }
  return (
    <Modal title={title} open={isModalOpen} footer={null} onOk={handleOk} onCancel={handleOk}>
         <div>
         <TextArea
      showCount
      maxLength={150}
      
      style={{ height: 120, resize: 'none' }}
    />
     <div className='flex justify-start gap-[10px] mt-5'>
    <button className='cancel-btn' onClick={handleOk}>
    Cancel
    </button>
    <button onClick={handleOk} className='save-btn'>
        Save
    </button>
     
     </div>

    </div>    
    </Modal>
  )
}

export default Text
