import { Table, Button } from 'antd';
import React from 'react'
import TansText from '../higherOrder/TansText';
// import columns from '../config/columns/user.js';

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        name: record.name,
    }),
};

function CustomTable({ columns, data, heading, btnText, onClick, type, className }) {
    return (
        <div>
            <div className='flex items-center justify-between mb-[20px]'>
                <span className='text-[20px] inter-semibold' text={heading ? `menu.${heading}` : ''} ></span>
                {
                    type && (
                        <Button onClick={onClick} className='text-[14px] !rounded-[12px] inter-regular text-white px-[30px] !h-[40px] bg-[#BF000F]'>
                            {btnText || ''}
                        </Button>
                    )
                }
            </div>
            <Table
                rowSelection={{
                    ...rowSelection,
                }}
                columns={columns.map((item) => ({
                    ...item,
                    title: <TansText text={item.title} />,
                }))}
                dataSource={data}
                scroll={{ x: 800 }}
                className={`${className}`}
            />
        </div>
    );
};

export default CustomTable