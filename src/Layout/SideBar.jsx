// Sidebar
import { useLocation, useNavigate } from 'react-router-dom';
import { Avatar, Button, Divider, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// import { MenuProps } from 'antd';
// import { items } from '../../config/sidebarlinks';
import { items } from '../config/sidebarlinks.js';   
import { useEffect, useState } from 'react';
import EditProfile from '../Component/EditProfile.jsx';
import NewProfile from '../Component/NewProfile.jsx';
// import TansText from '../higherOrder/TansText';



const icons = (icon) => <img className='w-[18px]' src={icon} alt="" />


export const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedKeys = [location.pathname];
    const [openKeys, setOpenKeys] = useState([]);

    // Initialize openKeys based on the current location, only if needed
    useEffect(() => {
        const parentKey = items.find(item =>
            item.children?.some(child => child.key === location.pathname)
        )?.key;

        if (parentKey && !openKeys.includes(parentKey)) {
            setOpenKeys(prev => [...prev, parentKey]); // Add the parent key if not already open
        }
    }, [location.pathname]);

    // Handle menu item clicks
    const handleClick = ({ key, keyPath }) => {
        navigate(key);

        const parentKey = keyPath[keyPath.length - 1];
        if (!openKeys.includes(parentKey)) {
            setOpenKeys(prev => [...new Set([...prev, parentKey])]); // Keep parent open
        }
    };

    return (
        <div className="text-white flex flex-col bg-white">
            <div className="flex items-center justify-center h-20 bg-white">
                <img src="/Logo.png" alt="logo" width={150} height={26}/>
            </div>
            <Menu
                theme="light"
                mode="inline"
                selectedKeys={selectedKeys}
                openKeys={openKeys} // Maintain open state for parent
                onOpenChange={setOpenKeys} // Dynamically control open menus
                className="bg-transparent border-none flex-grow"
                items={items.map(item => ({
                    ...item,
                    icon: icons(item.icon),
                    // label: <TansText text={'menu.' + item.label} />,
                    label: item.label
                }))}
                onClick={handleClick}
                // style={{
                //     background: 'transparent',
                //     border: 'none'
                // }}
            />
        </div>
    );
};



export const menu = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <>
        <Menu className='w-[388px] text-center !p-[20px]'>
            <Avatar size={95} icon={<UserOutlined />} src="profile.png" />
            <p className='text-[24px] red-hat font-bold'>Scarlet Fox</p>
            <p className='text-[18px] red-hat-regular capitalize text-[#838589]'>admin@developercubix.com</p>
            <Divider />
         <div className='flex flex-col gap-[20px] font-medium text-lg

'> 
         <div className='flex items-center gap-[10px]'>
                <img onClick={()=>{
                    setIsModalOpen(true)
                }} src="edit.png" width={20} height={20} alt="edit" />
                <p>Edit Profile</p>
            </div>
            <div className='flex items-center gap-[10px]'>
                <img onClick={()=>{
                    setIsModalOpen(true)
                }} src="Lock.png" width={24} height={24} alt="edit" />
                <p>Change Password</p>
            </div>
         </div>
            <Button
                onClick={() => navigate('/')}
                // icon={<img className='w-[40px]' src="logout.png" />}
                className='logout-btn font-medium
'
            >
                Logout
            </Button>
        </Menu>

        {/* <EditProfile isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
        <NewProfile isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </>
    )
}