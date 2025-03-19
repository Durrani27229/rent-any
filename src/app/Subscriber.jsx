import React from 'react'
import HomeLayout from '../Layout/HomeLayout'
import { Table } from 'antd'
import column from '../config/columns/SubscribeColumn'
import data from '../config/data/subscriber'
import AddSubscription from '../Component/AddSubscription'
import { useState } from 'react'

const Subscriber = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <HomeLayout>
    <div className='flex items-center justify-between px-3'>
        <p className='font-bold text-[32px] lexend'>Subscription Packages</p>
        <button className='add-btn' onClick={ ()=> setIsModalOpen(true) }>Add</button>

    </div>
    <div className='db-table mt-5'>
        <div className='flex items-center justify-between px-3 mb-5'>
        <p className='font-bold text-[24px] lexend'>
        Subscription
        </p>
    
        </div>
    <Table columns={column} dataSource={data} scroll={{ x: 800 }} />
    <AddSubscription isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
</HomeLayout>
  )
}

export default Subscriber
