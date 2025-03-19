import React from "react";
import HomeLayout from "../Layout/HomeLayout";
import StaticComponent from "../Component/StaticComponent";
import DropDownHeader from "../Component/DropDownLang";
import DropDownNotify from "../Component/DropDownNotify";
import Btn from "../Component/Btn";
import TypeHere from "../Component/TypeHere";
import UserProfile from "../config/User/UserProfile";
import BuisnessProfile from "../config/User/ProfileView";


const Static = () => {
  return (
    <HomeLayout>
      <div>
        <p className="font-bold text-[32px] lexend">Static Content</p>
      </div>
      <StaticComponent title="Terms & Conditions" />
      <StaticComponent title="Privacy Policy" />
   

     

       

  

    </HomeLayout>
  );
};

export default Static;
