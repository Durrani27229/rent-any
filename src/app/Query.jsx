import React from 'react'
import HomeLayout from '../Layout/HomeLayout'
import { Table } from 'antd'
import column from '../config/columns/QueryColumn'
import data from '../config/data/query'

const Query = () => {
  return (
    <HomeLayout>
        <div className='flex items-center justify-start gap-[40px] px-3'>
        <p className='font-bold text-[32px] lexend'>Queries</p>

        </div>
    <div className='db-table mt-5'>
    <Table columns={column} dataSource={data} scroll={{ x: 800 }} />
    </div>

    </HomeLayout>
  )
}

export default Query
