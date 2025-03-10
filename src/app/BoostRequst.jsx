import React from 'react'
import HomeLayout from '../Layout/HomeLayout'
import { Table } from 'antd'
import column from '../config/columns/BoostColumn.jsx'
import data from '../config/data/boost.js'

const BoostRequst = () => {
  return (
    <HomeLayout>
    <div className='flex items-center justify-start gap-[40px] px-3'>
        <p className='font-bold text-[32px] lexend'>Boost Requests</p>

    </div>
    <div className='db-table mt-5'>
        <div className='flex items-center justify-between px-3 mb-5'>
      
       
        </div>
    <Table columns={column} dataSource={data} scroll={{ x: 800 }} />
    </div>
</HomeLayout>
  )
}

export default BoostRequst
