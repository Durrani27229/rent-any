import React from 'react'
import HomeLayout from '../Layout/HomeLayout'
import { Table } from 'antd'
import column from '../config/columns/ProductColumn'
import data from '../config/data/product.js'


const Products = () => {
  return (
    <HomeLayout>
    <div className='flex items-center justify-start gap-[40px] px-3'>
        <p className='font-bold text-[32px] lexend'>Product Ads</p>

    </div>
    <div className='db-table mt-5'>
        <div className='flex items-center justify-between px-3 mb-5'>
        <p className='font-bold text-[24px] lexend'>
            Ads
        </p>
        <span>
           <select name="user" id="">
               <option value="all">All</option>
               <option value="active">Active</option>
               <option value="inactive">Inactive</option>
           </select>
        </span>
        </div>
    <Table columns={column} dataSource={data} scroll={{ x: 800 }} />
    </div>
</HomeLayout>
  )
}

export default Products
