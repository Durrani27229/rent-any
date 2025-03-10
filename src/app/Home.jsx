import React from "react";
import HomeLayout from "../Layout/HomeLayout";
// import SalesChart from '../component/partial/Chart';
// import { Table } from 'antd';
// import { columns, columns2, booking } from '../component/partial/columns/home';
// import {dbdata} from '../config/home.js'
import dbdata from "../config/home.js";
// import CustomTable from "../Layout/CustomTable.jsx";
// import TansText from '../component/higherOrder/TansText';
// import { Table } from "antd";
import { Table ,DatePicker } from 'antd';
import column from "../config/columns/HomeDB.jsx";
import { data } from "../config/data/homedbData.js";

function Home() {

 




  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day');
  };


  return (
    <HomeLayout>
      <div className="db grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-[20px]">
       

        {dbdata.map((item, index) => {
          return (
            <div className="dashboard-data">
              <div className="flex justify-between items-center h-[80px]">
                <div className="flex flex-col gap-[15px]">
                  <p className="text-gray-400 text-base">{item.title}</p>
                  <p className="text-3xl">{item.value}</p>
                </div>
                <div>
                  <img src={item.img} width={60} height={60} alt="" />
                </div>
              </div>
              <div className="flex gap-[5px]">
                <div>
                  <img src={item.trade} width={20} alt="" />
                </div>
                <p className="text-green-500">{item.upAndDown}</p>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          );
        })}
        </div>
  
      {/* <SalesChart /> */}
      {/* <div className='grid lg:grid-cols-2 gap-[30px] mt-[40px]'>
                <div>
                    <TansText className='text-[20px] inter-semibold mb-[20px]' text="employeesofmonth" />
                    <Table
                        columns={columns}
                        dataSource={Data}
                        pagination={false}
                    />
                </div>
                <div>
                    <TansText className='text-[20px] inter-semibold mb-[20px]' text="topcustomers" />
                    <Table
                        columns={columns2}
                        dataSource={data2}
                        pagination={false}
                    />
                </div>
            </div>
            <div className='mt-[40px]'>
                <div className='flex items-center justify-between mb-[20px]'>
                    <TansText className='text-[20px] inter-semibold' text="Recent Booking" />
                    <img className='w-[200px]' src="/images/setting.png" alt="" />
                </div>
                <div>
                    <Table
                        columns={booking}
                        dataSource={DataBooking}
                        pagination={false}
                        scroll={{ x: 800 }}
                    />
                </div>
            </div> */}
      <div className="db-table mt-5">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">Recent Ads</p>
          <DatePicker picker="month" disabledDate={disabledDate} />
        </div>
       
       <div className="mt-5">
       <Table dataSource={data} columns={column} pagination={false} />
       </div>

      </div>   


            
    </HomeLayout>
  );
}

export default React.memo(Home);
