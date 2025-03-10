import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { CheckOutlined } from "@ant-design/icons";
const notification = [
  {
    img: "notify.png",
    title: "Settings",
    desc: "Update Dashboard",
  },
  {
    img: "notify.png",
    title: "Event Update",
    desc: "An event date update again",
  },
  {
    img: "notify.png",
    title: "Profile",
    desc: "Update your profile",
  },
  {
    img: "notify.png",
    title: "Application Error",
    desc: "Check your running application",
  },

];

const items = [
  {
    label: (
        <div>
            <p className="text-gray-400 font-bold text-base">Notification</p>
        </div>
    )
  },
  {
    type: "divider",
  },
  {
    label: (
      <div>
        {notification.map((item, index) => {
          return (
            <div className="flex flex-col justify-center  m-3 ">
              <div key={index} className="flex items-center gap-[10px]">
                <div>
                  <img src={item.img} width={36} height={36} alt="" />
                </div>
                <div className="p-0">
                  <p className="text-sm">{item.title}</p>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    ),
  },
  {
    type: "divider",
  },
  {
    label: (
        <div className="text-center text-sm text-gray-400">See all Notifications</div>
    ),
  }
];

const DropDownNotify = () => {
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
         <div className="pt-5">
            <img src="notification.png" width={27} height={27}  alt="notification" />
         </div>
         
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropDownNotify;
