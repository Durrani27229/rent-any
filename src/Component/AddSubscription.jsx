import React from "react";
import Btn from "./Btn";
import { Modal } from "antd";
import { useState } from "react";

const AddSubscription = ({ isModalOpen, setIsModalOpen}) => {
    const handleOk = () => {
        setIsModalOpen(false);
    }
  return (
    <Modal title="Add Subscription Packages" open={isModalOpen} footer={null} onOk={handleOk} onCancel={handleOk}>
        <div className="add-subs red-hat">
      <div className="flex flex-col gap-[10px] ">
        <p className="font-medium text-sm">Package Icon</p>
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
      <div className="flex gap-[10px] ">
      <div className="flex flex-col gap-[5px] w-[48%]">
        <p className="font-medium text-base">
          Package Name
        </p>
        <input type="text" placeholder="Enter" />
      </div>
      <div className="flex flex-col gap-[5px] w-[48%]">
        <p className="font-medium text-base">
          Duration
        </p>
        <input type="text" placeholder="Enter" />
      </div>
      </div>
      <div className="flex flex-col gap-[5px]">
        <p className="font-medium text-base">
          Number of Ads
        </p>
        <input type="text" placeholder="Enter" />
      </div>
      <Btn title="Done" onClick={handleOk} />
    </div>
    </Modal>
  );
};

export default AddSubscription;
