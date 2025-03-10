import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space} from "antd";
import { CheckOutlined } from '@ant-design/icons';
const items = [
    {
        label: 'Select Language',

    },
    {
        type: "divider",
    },
    {
    label: (
      <a
        href="https://www.antgroup.com"
        target="_blank"
        rel="noopener noreferrer"
      >
       <div className='flex items-center justify-between gap-[30px]'>
         <div className='flex items-center gap-2 h-[60px]'>
            <img src="english.png" alt="english" width={44} height={30} />
            <p>English</p>
          </div>
          <CheckOutlined />
         </div>
      </a>
    ),
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className='flex items-center justify-between gap-[30px]'>
         <div className='flex items-center gap-2 h-[60px]'>
            <img src="french.png" alt="french" width={44} height={30} />
            <p>French</p>
          </div>
          
         </div>
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: (
        <a
          href="https://www.aliyun.com"
          target="_blank"
          rel="noopener noreferrer"
        >
         <div className='flex items-center justify-between gap-[30px] w-[254px]'>
         <div className='flex items-center gap-2 h-[60px]'>
            <img src="spanish.png" alt="spanish" width={44} height={30} />
            <p>Spanish</p>
          </div>
          
         </div>
        </a>
      ),
    key: "3",
  },

];

const DropDownHeader = () => {
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space >
         <div style={{color: '#646464', fontSize: '16px',textAlign: 'end'}}>
                Select Language
         </div>
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropDownHeader;
