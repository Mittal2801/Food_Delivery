import React from 'react'
import { Link } from 'react-router-dom'
import { Brands, Category } from '../assets/Asserts'

const Delivery = () => {
  return (
    <>
        <div className='px-10 bg-[#f8f8f8] py-20 my-10'>
            <div className='text-2xl font-semibold'>Inspiration for your first order</div>
            <div className='grid grid-cols-9'>
            {
                Category.map((cat,index)=>{
                    return(
                      <Link key={cat.cat_name || index} to={`/category/${cat.cat_name}`}>
                        <div className='px-2 pt-10'>
                            <img src={cat.image} alt="" className='rounded-full'/>
                            <div className='text-xl text-center'>{cat.cat_name}</div>
                        </div>
                      </Link>
                    )
                })
            }
            </div>
        </div>
        <div>
            <div className='text-2xl font-semibold px-10'>Top brands for you</div>
            <div className='grid grid-cols-9 px-10'>
            {
                Brands.map((b,index)=>{
                    return(
                        <div key={b.brand_name || index} className='px-2 pt-10'>
                            <img src={b.image} alt="" className='rounded-full'/>
                            <div className='text-sm text-center mt-3'>{b.brand_name}</div>
                        </div>
                    )
                })
            }
            </div>
        </div>

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

export default Delivery
