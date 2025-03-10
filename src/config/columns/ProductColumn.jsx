import data from "../data/product"
const style = {borderRadius: "15px ", padding: "5px 25px",backgroundColor: "#00B69B", color: "white", border: "none"}
import { Button } from "antd"

const column = [
    {
        title: "Product Name",
        dataIndex: "name", 
        key: "name",
        render: (text, record) => {
            return (
                <div className="flex items-center gap-[10px]">
                    <img src={record.img} width={50} alt="" />
                    <p>{record.name}</p>
                </div>
            )
        }
    },
    {
        title: "Location",
        dataIndex: "location",
        key: "location",
    },
    {
        title: "Date-Time",
        dataIndex: "date",
        key: "date",
    },
    {
        title: "Owner Name",
        dataIndex: "owner",
        key: "owner",
    },
    {
        title: "Rent",
        dataIndex: "rent",
        key: "rent",
    },
    {
        title: 'Status',
       render: (text, record) => {
           return (
            <Button style={style} >{record.status}</Button>
           )
       }
    }
]
export default column