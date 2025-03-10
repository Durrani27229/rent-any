import { Button } from "antd"
const style = {borderRadius: "15px ", padding: "5px 25px",backgroundColor: "#00B69B", color: "white", border: "none"}
const column = [
    {
        title: 'User Name',
        dataIndex: 'userName',
        key: 'userName',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: (text, record) => {
            return (
                <Button style={style} variant="solid">{record.status}</Button>
            )
        }
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
    }
]

export default column