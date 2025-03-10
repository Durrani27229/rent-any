import React, { useState } from 'react';
import Btn from '../Component/Btn';

const ChangePasswordModal = ({ isModalOpen, setIsModalOpen }) => {


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Button to Open Modal */}
      {/* <button onClick={openModal}>Change Password</button> */}

      {/* Modal */}
      {isModalOpen && (
        <div className="change-password justify-center">
        <div className="flex items-center justify-between">
          <p className="font-bold text-lg">Change Password</p>
          <img
            src="cancel.png"
            width={22}
            height={22}
            alt="cancel"
            onClick={closeModal}
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <p className="font-medium text-base">
            Current Password: <span>*</span>
          </p>
          <input type="text" placeholder="Enter Current Password" className="border p-2" />
        </div>
        <div className="flex flex-col gap-[5px]">
          <p className="font-medium text-base">
            New Password: <span>*</span>
          </p>
          <input type="text" placeholder="Enter New Password" className="border p-2" />
        </div>
        <div className="flex flex-col gap-[5px]">
          <p className="font-medium text-base">
            Confirm Password: <span>*</span>
          </p>
          <input type="text" placeholder="Enter Confirm Password" className="border p-2" />
        </div>
        <div>
          <Btn title="Save" onClick={closeModal}/>
        </div>
      </div>
      )}
    </div>
  );
};

export default ChangePasswordModal;
