import React from 'react'
import { AhmedabadCollection, ResInAhmedabad } from '../assets/Asserts'

const Ahmedabadres = () => {
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
                            AhmedabadCollection.map((p)=>{
                              return(
                                <div className=''>
                                  <div><img src={p.image} alt="" className='rounded-sm w-[300px]  h-[300px] absolute '/></div>
                                  <div className='relative text-white text-xl ps-5 top-60 '>{p.description}</div>
                                  <div className='relative text-white ps-5 top-60 font-semibold'>{p.places}</div>
                                </div>
                              )
                            })
                          }
                  </div>

                  <div className='mt-80'>
                  <ul className='flex  mx-40'>
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

                {/* <div className='grid grid-cols-4 mx-30 mt-80'>
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
                  </div> */}

                  <div className='text-3xl font-semibold mx-35 mt-20'>Restaurants in Ahmedabad</div>
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
            </div>  
    </>
  )
}

export default Ahmedabadres