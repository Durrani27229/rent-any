import React from 'react'
import Btn from './Btn'
import { Modal } from 'antd';

const EditFaq = ({isModalOpen, setIsModalOpen}) => {
  const handleOk = () => {
    setIsModalOpen(false);
  }
  return (
   <Modal title="Edit FAQs" open={isModalOpen} footer={null} onOk={handleOk} onCancel={handleOk}>
     <div className="add-faq red-hat"> 
    
    <div className="flex flex-col gap-[5px]">
      <p className="font-medium text-base">
        Question
      </p>
      <input type="text" placeholder="Enter" />
    </div>
    <div className="flex flex-col gap-[5px]">
      <p className="font-medium text-base">
        Answer
      </p>
      <input type="text" className="ans" />
    </div>
    <div>
      <Btn onClick={handleOk} title="Done" />
    </div>
  </div>
   </Modal>
  )
}

export default EditFaq
