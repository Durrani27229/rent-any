import React from 'react'
import Btn from './Btn'
import { Modal } from 'antd'

const AddCategory = ({ isModalOpen , setIsModalOpen }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };


  return (
    <Modal title="Add Category" open={isModalOpen} footer={null} onOk={handleOk} onCancel={handleOk}>
    <div className="add-category red-hat">
   
    <div className="flex flex-col gap-[10px] ">
        <p className="font-medium text-sm">Change Category</p>
        <div>
          <img
            src="addIcon.png"
            alt="add-icon"
            width={100}
            height={100}
            
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[5px]">
        <p className="font-medium text-base">
          Category Name
        </p>
        <input type="text" placeholder="Enter Current Password" />
      </div>
      <div className="flex flex-col gap-[5px]">
        <p className="font-medium text-base">
          Sub Category
        </p>
        <input type="text" placeholder="Enter New Password" />
      </div>
      <Btn title="Done" onClick={handleOk}/>
    </div>
    </Modal>
  )
}

export default AddCategory


{/* <div className="add-subs red-hat">
        <div className="flex items-center justify-between">
            <p className="font-medium lexend text-[18px]">Add Categories</p>
            <img src="cancel.png" width={22} height={22} alt="cancel" />
        </div>
        <div className="flex flex-col gap-[10px] ">
            <p className="font-medium text-sm">Change Category</p>
            <div>
              <img
                src="addIcon.png"
                alt="add-icon"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="flex gap-[15px]">
          <div className="flex flex-col gap-[5px] w-[50%]">
            <p className="font-medium text-base">
              Category Name
            </p>
            <input type="text" placeholder="Enter Current Password" />
          </div>
          <div className="flex flex-col gap-[5px] w-[50%]">
            <p className="font-medium text-base">
              Sub Category
            </p>
            <input type="text" placeholder="Enter New Password" />
          </div>
          </div> */}
