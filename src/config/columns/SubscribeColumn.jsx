import { Switch } from "antd"
import data from "../data/subscriber"
const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
const column = [
    {
        title: 'Package Icon',
        dataIndex: 'packageIcon',
        key: 'packageIcon',
        render: (text, record) => {
                return(
                    <img src={record.packageIcon} alt="see detail" width={57} height={59} />
                )
        }
    },
    {
        title: 'Number of Ads',
        dataIndex: 'ads',
        key: 'ads',
    },
    {
        title: 'Duration',
        dataIndex: 'duration',
        key: 'duration',
    },
    {
        title: 'action',
        render: (text, record) => {
            return (
                <div className="flex items-center gap-[20px]">
                   
                <img src="edit1.png" alt="see detail" width={24} height={19} />
                <img src="del.png" alt="see detail" width={24} height={19} />
                <Switch defaultChecked onChange={onChange} />
                <p>{record.action}</p>
            </div>
            )
        }
    }
]

export default column