
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
import Login from './app/Login'
import UserProfile from './config/User/UserProfile'
import ProfileView from './config/User/ProfileView'
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
        <Route path="/login" element={<Login/>} />
        <Route path="/user-detail" element={<UserProfile/>} />
        <Route path="/profile-view" element={<ProfileView />} />




      </Routes>
    </>
  )
}

export default App
