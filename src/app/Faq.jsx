import React from 'react'
import HomeLayout from '../Layout/HomeLayout'
import { Table } from 'antd'
import column from '../config/columns/FaqColumn'
import data from '../config/data/faq'
import AddFaq from '../Component/AddFaq'
import { useState } from 'react'
import EditFaq from '../Component/EditFaq'

const Faq = () => {
  const [addFaq, setAddFaq] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  }
  const columns = column(openModal)
  return (
    <HomeLayout>
    <div className='flex items-center justify-between px-3'>
        <p className='font-bold text-[32px] lexend'>Categories Management</p>
        <button onClick={ ()=> setIsModalOpen(true) } className='add-btn'>Add</button>
        <AddFaq isModalOpen={addFaq} setIsModalOpen={setAddFaq} />
    </div>
    <div className='db-table mt-5'>
        <div className='flex items-center justify-between px-3 mb-5'>
        <p className='font-bold text-[24px] lexend'>
            View List of Categories
        </p>
    
        </div>
    <Table columns={columns} dataSource={data} scroll={{ x: 800 }} />
    </div>
    <EditFaq isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
</HomeLayout>
  )
}

export default Faq
