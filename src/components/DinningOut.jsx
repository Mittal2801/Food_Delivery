import React from 'react'
import {  Collectionsone, collectionstwo, ResInAhmedabad } from '../assets/Asserts'

const DinningOut = () => {
  return (
    <>
      <div className='bg-[#f8f8f8] h-[900px]'>
        <div className='text-4xl font-semibold mx-60 pt-10'>Collections</div>
        <div className='flex mx-60 pt-10 pb-5'>
          <div className='font-light text-gray-600'>Explore curated lists of top restaurants, cafes, pubs, and bars in Ahmedabad, based on trends</div>
          <div className='font-light text-red-500 ms-50'>All collections in Ahmedabad</div>
        </div>
           <div className='grid grid-cols-4 mx-30'>
                    {
                      Collectionsone.map((p)=>{
                        return(
                          <div className='mx-3'>
                            <div><img src={p.image} alt="" className='rounded-sm h-[300px] absolute '/></div>
                            <div className='relative text-white text-xl ps-5 top-60 '>{p.description}</div>
                            <div className='relative text-white ps-5 top-60 font-semibold'>{p.places}</div>
                          </div>
                        )
                      })
                    }
            </div>
          <div className='grid grid-cols-4 mx-30 mt-80'>
                    {
                        collectionstwo.map((p)=>{
                        return(
                          <div className='mx-3'>
                            <div><img src={p.image} alt="" className='rounded-sm h-[300px] absolute '/></div>
                            <div className='relative text-white text-xl ps-5 top-60 '>{p.description}</div>
                            <div className='relative text-white ps-5 top-60 font-semibold'>{p.places}</div>
                          </div>
                        )
                      })
                    }
            </div>
      </div>
          <div>
            <ul className='flex mt-20 mx-40'>
              <li className='border p-2 rounded-sm me-5'>Filters</li>
              <li className='border p-2 rounded-sm me-5'>Offers</li>
              <li className='border p-2 rounded-sm me-5'>Rating: 4.5+</li>
              <li className='border p-2 rounded-sm me-5'>Pet friendly</li>
              <li className='border p-2 rounded-sm me-5'>Outdoor seating</li>
              <li className='border p-2 rounded-sm'>Open Now</li>
            </ul>
          </div>
          <div className='mt-20 mx-40'>
            <img src="https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png" alt="" />
          </div>

          <div className='text-3xl mx-40 mt-10'>Restaurants in Ahmedabad</div>
          <div className='grid grid-cols-3 mx-30 my-10'>
                                                {
                                                  ResInAhmedabad.map((r)=>{
                                                    return(
                                                      <div className='me-10 my-5 bg-gray-50 p-3'>
                                                        <div><img src={r.image} alt="" className='rounded-sm h-[250px]'/></div>
                                                        <div className='text-gray-400'>{r.name}</div>
                                                        <div className='text-gray-600'>{r.description}</div>
                                                        <div className='flex'>{r.location}<span>{r.price}</span></div>
                                                      </div>
                                                    )
                                                  })
                                                }
                                                
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

export default DinningOut
