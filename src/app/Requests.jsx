import React from 'react'
import HomeLayout from '../Layout/HomeLayout'
import { Table } from 'antd'
import column from '../config/columns/RequestColumn'
import data from '../config/data/request.js'
import { useNavigate } from 'react-router-dom'

const Requests = () => {
  const navigate = useNavigate();
  
  const openModal = () => {
     navigate('/profile-view')
  }
  const columns = column(openModal);
  return (
    <div>
       <HomeLayout>
    <div className='flex items-center justify-start gap-[40px] px-3'>
        <p className='font-bold text-[32px] lexend'>Requests</p>

    </div>
    <div className='db-table mt-5'>
        
    <Table columns={columns} dataSource={data} scroll={{ x: 800 }} />
    </div>
</HomeLayout>
    </div>
  )
}

export default Requests
