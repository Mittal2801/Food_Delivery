import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Delivery from './components/Delivery'
import Nav from './components/Nav'
import DinningOut from './components/DinningOut'
import Nightlife from './components/Nightlife'
import Location from './components/Location'
import AgraRes from './components/Agrares'
import Ahmedabadres from './components/Ahmedabadres'
import AmritsarRes from './components/AmritsarRes'
import Bengalurures from './components/Bengalurures'
import Chandigarhres from './components/Chandigarhres'
import Chennaires from './components/Chennaires'
import Darjeelingres from './components/Darjeelingres'
import Delhires from './components/Delhires'
import Register from './pages/Register'
import Login from './pages/Login'
import Users from './pages/Users'
import AddFood from './pages/AddFood'
// import Food from '../backend/models/Food'
import Foods from './pages/Foods'
import CategoryFoods from './components/CategoryFoods'
import FoodDetails  from './components/FoodDetails'
import AddtoCart from './components/AddtoCart'
import AdminPanel from './components/AdminPanel'
import Orders from './components/Orders'
import MyOrders from './components/MyOrders'
import AdminOrders from './components/AdminOrders'
import UserCounter from './components/UserCounter'
// import AddHotel from './components/AddHotel'
// import AddDish from './components/AddDish'
// import ShowDish from './components/ShowDish'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/delivery' element={<Delivery />}></Route>
          <Route path='/dinningout' element={<DinningOut />}></Route>
          <Route path='/nightlife' element={<Nightlife />}></Route>
          <Route path='/locationinindia' element={<Location/>}></Route>
          {/* <Route path='/adddish' element={<AddDish />}></Route>
          <Route path='/showdish' element={<ShowDish />}></Route> */}
          <Route path='/agrares' element={<AgraRes />}></Route>
          <Route path='/ahmedabadres' element={<Ahmedabadres />}></Route>
          <Route path='/amritsarres' element={<AmritsarRes />}></Route>
          <Route path='/bengalurures' element={<Bengalurures />}></Route>
          <Route path='/chandigarhres' element={<Chandigarhres />}></Route>
          <Route path='/chennaires' element={<Chennaires />}></Route>
          <Route path='/darjeelingres' element={<Darjeelingres />}></Route>
          <Route path='/delhires' element={<Delhires />}></Route>
          {/* <Route path='/addhotel' element={<AddHotel />}></Route> */}
          <Route path='/' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/add-food' element={<AddFood />}></Route>
          <Route path='/food' element={<Foods />}></Route>
          <Route path='/category/:cat_name' element={<CategoryFoods />}></Route>
          <Route path='/food-details/:id' element={<FoodDetails />}></Route>
          <Route path='/cart' element={<AddtoCart />}></Route>
          <Route path='/admin' element={<AdminPanel />}></Route>
          <Route path='/orders' element={<Orders />}></Route>
          <Route path='/myorders' element={<MyOrders />}></Route>
          <Route path='/admin/orders' element={<AdminOrders />}></Route>
          <Route path='/admin-dashboard' element={<UserCounter />}></Route>
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
