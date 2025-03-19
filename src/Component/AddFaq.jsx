import React from 'react'
import { Modal } from 'antd'
import Btn from './Btn'

const AddFaq = ({isModalOpen, setIsModalOpen}) => {
  const handleOk = () => {
    setIsModalOpen(false);
  }

  return (
    <Modal title="Add FAQs" open={isModalOpen} footer={null} onOk={handleOk} onCancel={handleOk}>
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
      <Btn onClick={handleOk} title="Submit" />
    </div>
  </div>
  </Modal>
  )
}

export default AddFaq
