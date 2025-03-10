
import './App.css'
import Home from './app/Home'
import { Route, Routes } from "react-router-dom"
import User from './app/User'
import Products from './app/Products'
import Requests from './app/Requests'
import Category from './app/Category'
import ListOfCategory from './app/ListOfCategory'
import BoostRequst from './app/BoostRequst'
import Subscriber from './app/Subscriber'
import Queries from './app/Query'
import Faq from './app/Faq'
import Static from './app/Static'
function App() {
  

  return (
    <>
       <Routes >
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/products" element={<Products />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/category" element={<Category />} />
        <Route path="/list-of-subscribers" element={<ListOfCategory />} />
        <Route path="/subscriptions" element={<Subscriber/>} />

        <Route path="/boostRequest" element={<BoostRequst/>} />
        <Route path="/queries" element={<Queries/>} />
        <Route path="/faqs" element={<Faq/>} />
        <Route path="/static" element={<Static/>} />

        {/*<Route path="/calender" element={<Calender />} />
        <Route path="/gaps" element={<Gaps />} />
        <Route path="/map" element={<Map />} />
        <Route path="/lead" element={<Lead />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/attraction" element={<Attraction />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/groupcustomers" element={<Groupcustomers />} />
        <Route path="/services" element={<ServicesList />} />
        <Route path="/request" element={<Request />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/monthlycustomers" element={<MonthlyCustomers />} />
        <Route path="/beginningbalances" element={<BeginningBalances />} />
        <Route path="/employees" element={<Employes />} />
        <Route path="/create-absences" element={<Absences />} />
        <Route path="/create-vehicle" element={<Vehicles />} />
        <Route path="/employee-hours" element={<EmployeeHours />} />
        <Route path="/hours-by-date" element={<HoursByDate />} />
        <Route path="/income-and-debts" element={<IncomeAndDebts />} />
        <Route path="/service-hours" element={<ServiceHours />} />
        <Route path="/service-amount" element={<ServiceAmount />} />
        <Route path="/queries-management" element={<QueriesManagement />} />
        <Route path="/customers-archive" element={<CustomersArchive />} />
        <Route path="/deleted-booking" element={<DeletedBookings />} />
        <Route path="/archived-bookings" element={<ArchivedBookings />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/cash-out" element={<CashOut />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/group-statement" element={<GroupStatement />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/income" element={<Income />} />
        <Route path="/files" element={<Files />} />
        <Route path="/newschedule" element={<NewSchedule />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/group-statement" element={<GroupStatement />} />
        <Route path="/customer-schedule" element={<CustomerSchedule />} /> */}
      </Routes>
    </>
  )
}

export default App
