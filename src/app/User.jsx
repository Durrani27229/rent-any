import React from "react";
import HomeLayout from "../Layout/HomeLayout";
import { Table } from "antd";
import column from "../config/columns/UserColumn.jsx";
import data from "../config/data/user.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [tabs, setTabs] = useState(1);
  const navigate = useNavigate();  
  const openModal = () => {
    navigate("/user-detail");
  }
  const columns = column(openModal);

  return (
    <HomeLayout>
      <div className="flex items-center justify-start gap-[40px] px-3">
        <p className="font-bold text-[32px] lexend">Users</p>
        <div className="btn-group">
          <button
            className="btn1 red-hat"
            style={{
              backgroundColor: tabs === 1 ? "#4A7ABC" : "#F1F4F9",
              color: tabs === 1 ? "white" : "black",
            }}
            onClick={() => setTabs(1)}
          >
            User Management
          </button>
          <button
            className="btn2 red-hat"
            style={{
              backgroundColor: tabs === 2 ? "#4A7ABC" : "#F1F4F9",
              color: tabs === 2 ? "white" : "black",
            }}
            onClick={() => setTabs(2)}
          >
            Business Management
          </button>
        </div>
      </div>
      <div className="db-table mt-5">
        <div className="flex items-center justify-between px-3 mb-5">
            {
                tabs === 1 ? <p className="font-bold text-[24px] lexend">User Management</p> : <p className="font-bold text-[24px] lexend">Business Management</p>
            }
          {/* <p className="font-bold text-[24px] lexend">User Management</p> */}
          <span>
            <select name="user" id="">
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </span>
        </div>

        <Table columns={columns} dataSource={data} scroll={{ x: 800 }} />
      </div>
    </HomeLayout>
  );
};

export default User;
