import React from 'react'
import HomeLayout from '../Layout/HomeLayout'
import { Table } from 'antd';
import column from '../config/columns/CategoryColumn';
import data from '../config/data/category';
import AddCategory from '../Component/AddCategory';
import { useState } from 'react';



const Category = () => {
  const [addCategory, setAddCategory] = useState(false);

  return (
    <HomeLayout>
    <div className='flex items-center justify-between px-3'>
        <p className='font-bold text-[32px] lexend'>Categories Management</p>
        <button className='add-btn' onClick={()=> setAddCategory(true)}>Add</button>

    </div>

     <AddCategory isModalOpen={addCategory} setIsModalOpen={setAddCategory} />

    <div className='db-table mt-5'>
        <div className='flex items-center justify-between px-3 mb-5'>
        <p className='font-bold text-[24px] lexend'>
            View List of Categories
        </p>
    
        </div>
    <Table columns={column} dataSource={data} scroll={{ x: 800 }} />
    </div>
</HomeLayout>
  )
}

export default Category
