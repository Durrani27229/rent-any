import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Btn from '../Component/Btn';
const EditProfile = ({ isModalOpen, setIsModalOpen }) => {
  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      
      <Modal title="Change Password" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <div className="change-password">
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg">Change Password</p>
            <img src="cancel.png" width={22} height={22} alt="cancel" />
          </div>
          <div className="flex flex-col gap-[5px]">
            <p className="font-medium text-base">
              Current Password: <span>*</span>
            </p>
            <input type="text" placeholder="Enter Current Password" />
          </div>
          <div className="flex flex-col gap-[5px]">
            <p className="font-medium text-base">
              New Password: <span>*</span>
            </p>
            <input type="text" placeholder="Enter New Password" />
          </div>
          <div className="flex flex-col gap-[5px]">
            <p className="font-medium text-base">
              Confirm Password: <span>*</span>
            </p>
            <input type="text" placeholder="Enter Confirm Password" />
          </div>
          <div>
            <Btn title="Save" />
          </div>
        </div>
      </Modal>
    </>
  );
};
export default EditProfile;