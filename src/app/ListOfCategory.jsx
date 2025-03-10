import React from 'react'
import HomeLayout from '../Layout/HomeLayout'
import { Table } from 'antd'
import column from '../config/columns/ListColumn.jsx'
import data from '../config/data/listOfCategory.js'

const ListOfCategory = () => {
  return (
 
      <HomeLayout>
         <div className='flex items-center justify-start gap-[40px] px-3'>
        <p className='font-bold text-[32px] lexend'>Subscribers</p>

    </div>
    <div className='db-table mt-5'>
        <div className='flex items-center justify-between px-3 mb-5'>
        <p className='font-bold text-[24px] lexend'>
           List of Subscribers
        </p>
       
        </div>
    <Table columns={column} dataSource={data} scroll={{ x: 800 }} />
    </div>  
      </HomeLayout>

  )
}

export default ListOfCategory
