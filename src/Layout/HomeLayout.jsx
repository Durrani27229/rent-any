import { CloseOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Layout, Drawer, Button, Dropdown, Avatar, Input } from 'antd'
import { Header, Content } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import { Sidebar, menu } from './SideBar'
import { useState } from 'react'
import DropDownHeader from '../Component/DropDownLang'
import DropDownNotify from '../Component/DropDownNotify'



function HomeLayout({ children }) {
    const [collapsed, setCollapsed] = useState(false);
    const [drawerVisible, setDrawerVisible] = useState(false);
    // Media query for responsive layout: max-width 768px (mobile)
    const isMobile = window.matchMedia('(max-width: 992px)').matches;
    // const { isDarkMode, toggleTheme } = useTheme() as any;
    return (
        <Layout>
            {isMobile ? (
                <>
                    <Drawer
                        placement="left"
                        onClose={() => setDrawerVisible(false)}
                        closeIcon={<CloseOutlined style={{ color: 'white' }} />}
                        visible={drawerVisible}
                        bodyStyle={{ padding: 0 }}
                        // style={{ height: '100vh'}}
                        className='!bg-gradient-to-b from-red-700 to-gray-800 text-white flex flex-col'
                    >
                        {<Sidebar />}
                    </Drawer>
                </>
            ) : (
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={setCollapsed}
                    trigger={null}
                    width={235}
                    className='!bg-gradient-to-b from-red-700 to-gray-800 text-white flex flex-col !h-[100vh] overflow-auto hide-scrollbar'
                >
                    {<Sidebar />}
                </Sider>
            )}
            <Layout>
                <Header style={{ padding: 0 , background: 'white' }} className="flex items-center justify-between !px-6 bg-white">
                    {
                        isMobile && <>
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined style={{}} /> : <MenuFoldOutlined style={{}} />}
                                onClick={isMobile ? () => setDrawerVisible(!drawerVisible) : () => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    // width: 60,
                                    height: 64,
                                }}
                            />
                        </> 
                    }
                    <Input
                        placeholder="Search"
                        className='search-bar'
                        // style={{
                        //     width: isMobile ? 250 : 300,
                        //     height: 45,
                        //     borderRadius: 15,
                        //     backgroundColor: 'white',
                        // }}
                        
                        // className='h-[56px]'
                        prefix={<img className='w-4' src="search.png" />}
                    />
                    
                    <div className='flex gap-4 items-center'>
                    <DropDownNotify />    
                    <DropDownHeader />
                    <Avatar className="cursor-pointer" size={50} src="profile.png" />
                        <Dropdown overlay={menu()} trigger={['click']}>
                            <div className='flex gap-4 items-center'>
                                <div className='flex flex-col justify-center items-center m-0 p-0 leading-[1.5]'>
                                <p className='text-sm text-[#7D7D7D] font-bold'>Scarlet Fox</p>
                                <p className='text-xs text-[#7D7D7D] font-semibold'>Admin</p>
                                </div>
                                {
                                    isMobile ? null : <p className='text-[16px] lexend-medium'></p>
                                }
                                
                            </div>
                        </Dropdown>
                    </div>
                </Header>
                <Content
                    style={{
                        minHeight: 280,
                        backgroundColor: '#F1F4F9',
                    }}
                    className="p-6 h-[calc(100vh-64px)] overflow-auto hide-scrollbar"
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default HomeLayout
