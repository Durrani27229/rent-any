import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import HomeLayout from '../../Layout/HomeLayout';

const UserProfile = () => {

    const data = ['Full Name','Email Address','Phone Number','Date Of Birth','Gender']
    const userData = ['Ryan Levin','Ryanlevin@gmail.com','03232465878','12.09.2019','Male']



  return (
      <HomeLayout>
      <div className='flex items-center gap-[30px]'>
      <FaArrowLeft onClick={() => window.history.back()} className='cursor-pointer' size={25} />
      <p className="font-bold text-[32px] lexend">Profile User</p>
      </div>
      <div className='profile-pic mt-5'>
        <img src="user-profile.png" alt="user" />
      </div>


      <div className='profile-detail mt-5'>
        {data.map((item,index)=>{
            return(
                <div key={index} className='flex justify-between items-center red-hat'>
                    <p className='font-bold text-[14px]'>{item}</p>
                    <p className='font-medium text-[14px]'>{userData[index]}</p>
                </div>
            )
        })}
      </div>
      </HomeLayout>
  )
}

export default UserProfile
