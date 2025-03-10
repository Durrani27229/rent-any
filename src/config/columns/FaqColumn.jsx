import data from "../data/faq"
const column = [
    {
        title: 'View FAQs',
        dataIndex: 'viewFaq',
        key: 'viewFaq',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        render : (text, record) => {
            return(
                <div className="flex gap-[15px]">
                <img src={record.action.edit} width={24} height={24} alt='edit' />
                <img src={record.action.delete} width={24} height={24} alt='delete' />
            </div>
            )
        }
    }
]

export default column