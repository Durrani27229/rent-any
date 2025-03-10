import  data  from "../data/user.js";
import { Switch } from 'antd';


const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
export const column = [
    {
        title: "Full Name",
        dataIndex: "name",
        key: "name",
        render: (text, record) => {
            return (
                <div className="flex items-center gap-[10px]">
                <div>
                    <img src={record.img} alt={record.name} width={40} height={40}/>
                </div>
                <p>{record.name}</p>
            </div>
            )
            
        }
    },
    {
        title: "Email Address",
        dataIndex: "email",
        key: "email",
    },
    {
        title: "Phone Number",
        dataIndex: "phone",
        key: "phone",
    },
    {
        title: "Total Ads",
        dataIndex: "ads",
        key: "ads",
    },
    {
        title: "Actions",
        dataIndex: "actions",
        key: "actions",
        render: (text, record) => {
            return (
                <div className="flex items-center gap-[20px]">
                    <Switch defaultChecked onChange={onChange} />
                <p>{record.action}</p>
                <img src="eye.png" alt="see detail" width={24} height={19} />
            </div>
            )
            
        }
    }
]
export default column

