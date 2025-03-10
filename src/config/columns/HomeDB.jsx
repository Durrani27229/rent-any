

const column = [
    {
        title: 'Product Name',
        dataIndex: 'name',
        key: 'name',
        render: (_ , record) => {
            return (
                <div className="flex items-center gap-[10px]">
                    <img src={record.img} width={50} alt="" />
                    <p>{record.name}</p>
                </div>
            )
        }
    },
    {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',    
    },
    {
        title: 'Date-Time',
        dataIndex: 'date',
        key: 'date',    
    },
    {
        title: 'Owner Name',
        dataIndex: 'owner',
        key: 'owner',   
    },
    {
        title: 'Rent',
        dataIndex: 'rent',
        key: 'rent',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    }
]

export default column

