const column = [
    {
        title: 'View Request',
        dataIndex: 'viewRequest',
        key: 'viewRequest',
    },
    {
        title: 'View Advertisement',
        dataIndex: 'viewAdvertisement',
        key: 'viewAdvertisement',
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
