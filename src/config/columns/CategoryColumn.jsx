import data from "../data/category"

const column = [
    {
        title: 'Category ID',
        dataIndex: 'categoryId',
        key: 'categoryId',
    },
    {
        title: 'Category Icon',
        dataIndex: 'categoryIcon',
        key: 'categoryIcon',
        render: (_, record) => {
            return (
                <div>
                    <img src={record.categoryIcon} width={48} height={48} alt='icon' />
                </div>
            )
        }
    },
    {
        title: 'Category Name',
        dataIndex: 'categoryName',
        key: 'categoryName',
    },
    {
        title: 'Subcategories',
        dataIndex: 'subcategories',
        key: 'subcategories',
    },
    {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
        render: (_, record) => (
            <div className="flex gap-[15px]">
                <img src={record.action.edit} width={24} height={24} alt='edit' />
                <img src={record.action.delete} width={24} height={24} alt='delete' />
            </div>
        ),
    }
]

export default column