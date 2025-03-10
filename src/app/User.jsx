import React from 'react'
import HomeLayout from '../Layout/HomeLayout'
import { Table } from 'antd'
import column from '../config/columns/UserColumn.jsx'
import data from '../config/data/user.js'


const User = () => {

    
    const btnGroup1 = () => {
        let btn1 = document.querySelector('.btn1')
        btn1.style.backgroundColor = '#4A7ABC'
        btn1.style.color = 'white'
        let btn2 = document.querySelector('.btn2')
        btn2.style.backgroundColor = '#F1F4F9 '
        btn2.style.color = 'black'
        
        
        
         
    }

    const btnGroup2 = () => {
        let btn2 = document.querySelector('.btn2')
        btn2.style.backgroundColor = '#4A7ABC'
        btn2.style.color = 'white'
        let btn1 = document.querySelector('.btn1')
        btn1.style.backgroundColor = '#F1F4F9 '
        btn1.style.color = 'black'

        
    }


  return (
    <HomeLayout>
        <div className='flex items-center justify-start gap-[40px] px-3'>
            <p className='font-bold text-[32px] lexend'>Users</p>
            <div className='btn-group'>
                <button className='btn1 red-hat' onClick={btnGroup1} active>User Management</button>
                <button className='btn2 red-hat' onClick={btnGroup2}>Business Management</button>
            </div>

        </div>
        <div className='db-table mt-5'>
            <div className='flex items-center justify-between px-3 mb-5'>
            <p className='font-bold text-[24px] lexend'>
                User Management
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

export default User;
