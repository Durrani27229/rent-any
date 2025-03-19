import React from 'react'
import Btn from './Btn'
import { Modal } from 'antd'

const ProfileEdit = ({ isModalOpen, setIsModalOpen }) => {
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };
  return (
    <Modal title="Edit Profile" open={isModalOpen} onOk={handleOk} footer={null} onCancel={handleOk}>
    <div className="edit-profile red-hat">
    {/* <div className="flex items-center justify-between">
      <p className="font-bold text-lg">Edit Profile</p>
      <img src="cancel.png" width={22} height={22} alt="cancel" />
    </div> */}
    <div className="flex flex-col gap-[10px]">
      <p className="font-bold text-sm">Change Image</p>
      <div>
        <img
          src="profile.png"
          alt="profile"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
    </div>
    <div className="flex flex-col gap-[5px]">
      <p className="font-medium text-base">Name</p>
      <input type="text" placeholder="Enter Name" />
    </div>
    <div>
      <Btn title="Save" onClick={handleOk}/>
    </div>
  </div>
  </Modal>
  )
}

export default ProfileEdit
