import { Button } from "antd"
const column = [
    {
        title: 'Business Name',
        dataIndex: 'businessName',
        key: 'businessName',
    },
    {
        title: 'Business Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Contact Number',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Profile',
        render: (text, record) => {
            return (
                <button className="preview-btn red-hat font-medium text-sm">{record.profile}</button>
            )
        }

    },
    {
        title: 'Action',
        render: (text, record) => {
            return(
                <div className="flex items-center gap-[10px]">
                   <button className="approve-btn red-hat font-medium text-sm">{record.action.approve}</button>
                   <button className="reject-btn red-hat font-medium text-sm">{record.action.reject}</button>
                </div>
            )
        }
    }
]

export default column