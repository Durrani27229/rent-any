import React from "react";
import HomeLayout from "../Layout/HomeLayout";
import StaticComponent from "../Component/StaticComponent";
import DropDownHeader from "../Component/DropDownLang";
import DropDownNotify from "../Component/DropDownNotify";
import Btn from "../Component/Btn";

const Static = () => {
  return (
    <HomeLayout>
      <div>
        <p className="font-bold text-[32px] lexend">Static Content</p>
      </div>
      <StaticComponent title="Terms & Conditions" />
      <StaticComponent title="Privacy Policy" />
      <div className="flex items-center gap-[10px]">
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

        <div className="edit-profile">
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg">Edit Profile</p>
            <img src="cancel.png" width={22} height={22} alt="cancel" />
          </div>
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
            <Btn title="Save" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-[10px] mt-5">
        <div className="add-faq">
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg">Add FAQs</p>
            <img src="cancel.png" width={22} height={22} alt="cancel" />
          </div>
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
            <Btn title="Submit" />
          </div>
        </div>



        <div className="add-faq">
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg">Edit FAQs</p>
            <img src="cancel.png" width={22} height={22} alt="cancel" />
          </div>
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
            <Btn title="Done" />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Static;
