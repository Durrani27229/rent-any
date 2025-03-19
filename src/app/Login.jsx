import React from 'react'
import AuthLayout from '../Layout/AuthLayout'
import { Divider, Select , Form, Input } from 'antd'
import data from '../config/Form/login'
import Btn from '../Component/Btn'

const Login = () => {
  return (
    <AuthLayout>

        <div className='h-screen  content-center px-[60px]'>
           <div className='flex justify-center items-center mb-[80px]'>
                <p className='text-[15px] red-hat'>Language</p>
                <Divider type="vertical" style={{ height: '36px', background: '#2D2B2C' }} />
                <Select className='login-select custom-select-arrow' 
                placeholder="English" 
                defaultValue={"en"}  
                style={{ width: 100, border: 0 }}
                
>
                    <Select.Option value="en">English</Select.Option>
                    <Select.Option value="ar">Arabic</Select.Option>
                </Select>
           </div>
           <div className='text-center mt-[60px]'>
                <p className='font-medium text-[27px] red-hat'>Welcome Back</p>
                <p className='text-[15px] text-gray-400 red-hat'>Login to continue</p>
           </div>
           <Form layout='vertical' className='mt-[60px]' >
            {
                data.map((item, index) => {
                    return (
                        <Form.Item key={index} name={item.name} rules={item.required} label={<p className='text-base font-medium'>{item.title}</p>}>
                            {
                                item.type === 'email' ? (
                                    <Input className='h-[47px] !w-[100%] rounded-[11px]' prefix={<img className='w-[20px] h-[16px]' src={item.icon} alt="email" />} />
                                ): (
                                    <Input.Password className='h-[47px] !w-[100%] rounded-[11px]' prefix={<img className='w-[20px] h-[20px]' src={item.icon} alt="lock" />} />
                                )
                            }
                        </Form.Item>
                    )
                })
            }

            <Btn onClick={() => navigate('/dashboard')}  title="Login" marginTop='70px'/>

           </Form>
        </div>
    </AuthLayout>
  )
}

export default Login
