import React from 'react'
import { Locations } from '../assets/Asserts'
import { Link } from 'react-router-dom';


const Location = () => {
  return (
    <>
      <div className=''>
        <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="" className='w-[2000px] absolute' />
        <div className='flex ms-250 py-10 text-white relative'>
          <div className='mx-5'>Add restaurant</div>
          <div className='mx-5'>Log in</div>
          <div className='mx-5'>Sign Up</div>
        </div>
        <div className='font-extrabold text-8xl italic relative text-white text-center pt-50'>zomato</div>
        <div className='text-4xl text-white pt-5 text-center relative'>Find the best restaurants, cafés</div>
        <div className='text-4xl text-white pt-1 text-center relative'>and bars in India</div>
      </div>
      <div className='text-4xl text-center pt-80'>Popular locations in India</div>
      \
      /
      
      
      <p className='text-center text-gray-500 text-xl px-80 py-5'>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>
      <div className="grid grid-cols-3 mx-60 mt-15">
        <Link to='/agrares'><div className='rounded-sm p-3 border-1 border-gray-300 text-xl text-gray-600 me-5 mb-5 flex'>Agra Restaurants</div></Link>
        <Link to='/ahmedabadres'><div className='rounded-sm p-3 border-1 border-gray-300 text-xl text-gray-600 me-5 mb-5 flex'>Ahmedabad Restaurants</div></Link>
        <Link to='/amritsarres'><div className='rounded-sm p-3 border-1 border-gray-300 text-xl text-gray-600 me-5 mb-5 flex'>Amritsar Restaurants</div></Link>
      </div>
      <div className="grid grid-cols-3 mx-60 mt-15">
        <Link to='/bengalurures'><div className='rounded-sm p-3 border-1 border-gray-300 text-xl text-gray-600 me-5 mb-5 flex'>Bengaluru Restaurants</div></Link>
        <Link to='/chandigarhres'><div className='rounded-sm p-3 border-1 border-gray-300 text-xl text-gray-600 me-5 mb-5 flex'>Chandigarh Restaurants</div></Link>
        <Link to='/chennaires'><div className='rounded-sm p-3 border-1 border-gray-300 text-xl text-gray-600 me-5 mb-5 flex'>Chennai Restaurants</div></Link>
      </div>
      <div className="grid grid-cols-3 mx-60 mt-15">
        <Link to='/darjeelingres'><div className='rounded-sm p-3 border-1 border-gray-300 text-xl text-gray-600 me-5 mb-5 flex'>Darjeeling Restaurants</div></Link>
        <Link to='/delhires'><div className='rounded-sm p-3 border-1 border-gray-300 text-xl text-gray-600 me-5 mb-5 flex'>Delhi NCR Restaurants</div></Link>
        <div></div>
      </div>
      {/* <div className='grid grid-cols-3 mx-60 mt-15'>
        {
          Locations.map((loc)=>{
            return(
                <Link to={`/location/${loc.loc_name}`}><div className='rounded-sm p-3 border-1 border-gray-300 text-xl text-gray-600 me-5 mb-5 flex'>{loc.loc_name}</div></Link>
            )
          })
        }
      </div> */}
       <div className='bg-[#f8f8f8] py-10 mt-20'>
        <div  className='mx-60 mt-20'>
          <div className='grid grid-cols-3'>
            <div className='font-extrabold text-4xl py-10 italic '>zomato</div>
            <div className='border my-10 p-2 rounded-sm me-5 ms-50'>India</div>
            <div className='border my-10 p-2 rounded-sm me-5 me-50'>English</div>
          </div>
          <div className='grid grid-cols-5'>
            <div>
              <ul className='font-light'>ABOUT ZOMATO
                <li className='text-gray-700 pt-5'>Who We Are</li>
                <li className='text-gray-700'>Blog</li>
                <li className='text-gray-700'>Work With Us</li>
                <li className='text-gray-700'>Investor Relations</li>
                <li className='text-gray-700'>Report Fraud</li>
                <li className='text-gray-700'>Press Kit</li>
                <li className='text-gray-700'>Contact US</li>
              </ul>
            </div>
            <div>
              <ul className='font-light'>ZOMAVERSE
                <li className='text-gray-700 pt-5'>Zomato</li>
                <li className='text-gray-700'>Blinkit</li>
                <li className='text-gray-700'>District</li>
                <li className='text-gray-700'>Feeding India</li>
                <li className='text-gray-700'>Hyperpure</li>
                <li className='text-gray-700'>Zomaato Live</li>
                <li className='text-gray-700'>Zomaland</li>
                <li className='text-gray-700'>Wheather Union</li>
              </ul>
            </div>
            <div>
             <ul className='font-light'>FOR RESTAURANTS
                <li className='text-gray-700 pt-5'>Partner With US</li>
                <li className='text-gray-700'>Apps For You</li>
              </ul>
            </div>
            <div>
              <ul className='font-light'>LEARN MORE
                <li className='text-gray-700 pt-5'>Privacy</li>
                <li className='text-gray-700'>Security</li>
                <li className='text-gray-700'>Terms</li>
              </ul>
            </div>
            <div>
              <div className='font-light'>SOCIAL LINKS</div>
              <div><img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" className='my-5 pe-10' /></div>
              <div><img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt=""  className='pe-10'/></div>
            </div>
          </div>
          <div className='mt-10 mb-5'><hr /></div>
          <div className='text-gray-500'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2026 © Zomato™ Ltd. All rights reserved.</div>
        </div>
        </div>
    </>
  )
}

export default Location
