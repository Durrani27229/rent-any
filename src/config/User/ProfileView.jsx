import { Divider } from "antd";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import HomeLayout from "../../Layout/HomeLayout";

const ProfileView = () => {
    const data = ['Business Name','Business Email','Contact Number']
    const userData = ['Ryan Levin','Ryanlevin@gmail.com','03232465878']
  return (
      <HomeLayout>
        <div className="flex items-center gap-[30px]">
        <FaArrowLeft onClick={() => window.history.back()} className="cursor-pointer" size={25} />
        <p className="font-bold text-[32px] lexend">Profile Business User</p>
      </div>
      <div className="profile-pic mt-5">
        <img src="profile.png" alt="user" />
      </div>

        <div className="business-profile mt-5">
            {
                data.map((item,index)=>{
                    return(
                        <div key={index} className='red-hat'>
                            <p className='font-bold text-[14px]'>{item}</p>
                            <p className='font-medium text-[14px]'>{userData[index]}</p>
                        </div>
                    )
                })
            }
        </div>
        <div className="divider">
        <Divider style={{ background: "#4D4D4D" }} />
        </div>
        <div className="business-profile mt-5 red-hat">
            <div className="flex flex-col justify-start">
                <p className="font-bold text-xl">Documents</p>
                <p className="text-gray-400">Required Documents For Approval</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="font-medium text-lg">Product Certificate</p>
                <button className="add-btn">View</button>
            </div>
        </div>

        <div className="business-profile mt-5 red-hat">
            <div className="flex flex-col justify-start">
                <p className="font-bold text-xl">Documents</p>
                <p className="text-gray-400">Required Documents For Approval</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="font-medium text-lg">Product Certificate</p>
                <button className="add-btn">View</button>
            </div>
        </div>      
    </HomeLayout>
  );
};

export default ProfileView;
