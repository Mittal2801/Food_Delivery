import React from 'react'


const Home = () => {
  return (
    <>
      <div>
        <div className="absolute bottom-0 left-0 h-full w-full bg-[linear-gradient(179.87deg,_rgba(50,50,50,0)_0%,_#1C1C1C_100%)]">
            <div className='relative overflow-hidden h-full w-full'>
                <img src="https://b.zmtcdn.com/data/o2_assets/52c985ee025e442b74fb4c91cbe20ced1743099385.png" alt="" className="absolute transition-opacity duration-200 opacity-0 absolute top-0 left-0 w-full h-full object-cover" loading="eager" />
                <video src="https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095925.mp4" className="absolute transition-opacity duration-400 overflow-clip pointer-events-none w-full h-full object-cover opacity-100" autoPlay muted loop playsInline loading="lazy" ></video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-[#1C1C1C] z-10"></div>

                <div className='relative py-30'>
                    <div className='text-center text-white font-extrabold text-7xl italic'>zomato</div>
                    <div className='text-center text-white font-semibold text-7xl pt-5'>India’s #1</div>
                    <div className='text-center text-white font-semibold text-7xl pt-2'>food delivery app</div>
                    <div className='text-center font-normal text-white text-2xl pt-5'>Experience fast & easy online ordering</div>
                    <div className='text-center font-normal text-white text-2xl pt-2'>on the Zomato app</div>
                    <div className='grid grid-cols-2 px-120 pt-10'>
                        <div>
                            <img src="https://b.zmtcdn.com/data/o2_assets/aad864bd17860b27634fe621001c32db1739350431.png" alt="" className='w-[200px]' />
                        </div>
                        <div>
                            <img src="https://b.zmtcdn.com/data/o2_assets/df6464de32f4a09262cee301f65aaa661739351256.png" alt="" className='w-[180px]'/>
                        </div>
                    </div>
                    <div className='text-center font-normal text-white font-bold text-2xl pt-2'>Scroll Now</div>
                </div> 
            </div>
        </div>
        
        
        
      </div>
      <div>
        <img src="https://b.zmtcdn.com/data/o2_assets/901001826baf04838b1bf505176ff0b11742453501.png" alt="" className='absolute top-180'/>
        <div className='grid grid-cols-3'>
            <div>
              <div><img src="https://b.zmtcdn.com/data/o2_assets/70b50e1a48a82437bfa2bed925b862701742892555.png" alt="" className='relative top-200 left-50 w-[50px]'/></div>
              <div><img src="https://b.zmtcdn.com/data/o2_assets/110a09a9d81f0e5305041c1b507d0f391743058910.png" alt="" className='w-[200px] relative left-70 top-250'/></div>
              <div><img src="https://b.zmtcdn.com/data/o2_assets/9ef1cc6ecf1d92798507ffad71e9492d1742892584.png" alt="" className='w-[50px] relative left-20 top-300'/></div>
            </div>
            <div className='pt-260 ps-5 relative'>
              <div className='text-center font-bold text-6xl text-[#ef4f5f]'>Better food for</div>
              <div className='text-center font-bold text-6xl text-[#ef4f5f]'>more people</div>
              <div className='pt-10 text-center font-light text-gray-500 text-xl'>For over a decade, we’ve enabled our</div>
              <div className='text-center font-light text-gray-500 text-xl'>customers to discover new tastes,</div>
              <div className='text-center font-light text-gray-500 text-xl'>delivered right to their doorstep</div>
            </div>
            <div>
              <div><img src="https://b.zmtcdn.com/data/o2_assets/b4f62434088b0ddfa9b370991f58ca601743060218.png" alt="" className='relative top-180 w-[200px]'/></div>
              <div><img src="https://b.zmtcdn.com/data/o2_assets/9ef1cc6ecf1d92798507ffad71e9492d1742892584.png" alt="" className='w-[40px] relative top-210 left-50'/></div>
              <div><img src="https://b.zmtcdn.com/data/o2_assets/316495f4ba2a9c9d9aa97fed9fe61cf71743059024.png" alt="" className='w-[250px] relative top-260'/></div>
            </div>
          </div>
      </div>
        {/* <div className='stats-box'>
          <div className='grid grid-cols-3 px-50'>
            <div className='grid grid-cols-2 card1'>
              <div>
                <div className='text-2xl font-bold text-gray-500'>3,00,000+</div>
                <div className='text-gray-500 text-sm'>restaurants</div>
              </div>
              <div>
                <img src="https://b.zmtcdn.com/data/o2_assets/d19ec60986487a77bcb026e5efc3325f1742908200.png" alt="" className='w-[100px] ps-10' />
              </div>
            </div>
            <div className='grid grid-cols-2 card2'>
              <div>
                <div className='text-2xl font-bold text-gray-500'>800+</div>
                <div className='text-gray-500 text-sm'>cities</div>
              </div>
              <div>
                <img src="https://b.zmtcdn.com/data/o2_assets/e7533c4081d6140da37b9f430cb7b8051743006192.png" alt="" className='w-[80px] ps-10' />
              </div>
            </div>
            <div className='grid grid-cols-2 card1'>
              <div>
                <div className='text-2xl font-bold text-gray-500'>3 billion+</div>
                <div className='text-gray-500 text-sm'>orders delivered</div>
              </div>
              <div>
                <img src="https://b.zmtcdn.com/data/o2_assets/713443cc5944ce4284d7e49e75e2aacf1742466222.png" alt="" className='w-[100px] ps-10' />
              </div>
            </div>
          </div>
        </div> */}
      <div className="stats-box">

      <div className="stat-item">
        <div>
          <h2 className="stat-number">3,00,000+</h2>
          <div className="stat-text">restaurants</div>
        </div>
        <img src="https://b.zmtcdn.com/data/o2_assets/d19ec60986487a77bcb026e5efc3325f1742908200.png" alt="" className='w-[100px]' />
      </div>

      <div className="stat-item">
        <div>
          <h2 className="stat-number">800+</h2>
          <div className="stat-text">cities</div>
        </div>
        <img src="https://b.zmtcdn.com/data/o2_assets/e7533c4081d6140da37b9f430cb7b8051743006192.png" alt="" className='w-[180px] ps-30' />
      </div>

      <div className="stat-item">
        <div>
          <h2 className="stat-number">3 billion+</h2>
          <div className="stat-text">orders delivered</div>
        </div>
        <img src="https://b.zmtcdn.com/data/o2_assets/713443cc5944ce4284d7e49e75e2aacf1742466222.png" alt=""  className='w-[100px]'/>
      </div>

      </div>

          <div className='bg_color mt-20 py-30'>
            <div className='text-center font-bold text-5xl text-[#ef4f5f]'>What’s waiting for you</div>
            <div className='text-center font-bold text-5xl text-[#ef4f5f] pt-3'>on the app?</div>
            <div className='text-center pt-10 font-light text-gray-800 text-xl'>Our app is packed with features that</div>
            <div className='text-center font-light text-gray-800 text-xl'>enable you to experience food</div>
            <div className='text-center font-light text-gray-800 text-xl'>delivery like never before</div>
            <div className='grid grid-cols-3 mt-5 mx-50'>
              <div className='grid grid-cols-2'>
                <div>
                  <div className='box-design mt-10 ml-5'>
                    <img src="https://b.zmtcdn.com/data/o2_assets/d0f1639403f80f8f2c19e0d538222e661742455804.png" alt="" className='pt-5'/>
                    <div className='text-center text-sm'>Healthy</div>
                  </div>
                  <div className='box-design mt-5 ml-5'>
                    <img src="https://b.zmtcdn.com/data/o2_assets/5e7aab0f183b36fc12c29279f0cb55181742462245.png" alt="" className='pt-5'/>
                    <div className='text-center text-sm'>Plan a Party</div>
                  </div>
                </div>
                <div>
                  <div className='box-design'>
                    <img src="https://b.zmtcdn.com/data/o2_assets/82f145180cd6f920a8a8617dda366a0a1742455963.png" alt="" className='pt-5' />
                    <div className='text-center text-sm'>Veg Mode</div>
                  </div>
                  <div className='box-design mt-5'>
                    <img src="https://b.zmtcdn.com/data/o2_assets/867f86a10503998e437963bb37c451591742455764.png" alt="" className='pt-5' />
                    <div className='text-center text-sm'>Gift Cards</div>
                  </div>
                </div>
              </div>
              <div className=''>
                <img src="https://b.zmtcdn.com/data/o2_assets/3f7e2757e62fd22592b879bd56b666011742294630.png" alt="" className='absolute w-[300px]'/>
                <div>
                  <img src="https://b.zmtcdn.com/data/o2_assets/cc1caf220c91be38dd94cce12b416fcd1746550226.png" alt="" className='relative p-5 mt-20 ml-24 box-design' />
                  
                </div>
              </div>
              <div className='grid grid-cols-2'>
                <div>
                  <div className='box-design mt-10 ml-5'>
                    <img src="https://b.zmtcdn.com/data/o2_assets/6e27c9acde6045c272a28e6eb275727e1742455789.png" alt="" className='pt-5' />
                    <div className='text-center text-sm'>Gourmet</div>
                  </div>
                  <div className='box-design mt-5 ml-5'>
                    <img src="https://b.zmtcdn.com/data/o2_assets/06d090307e02772693ac06123b53459b1742455939.png" alt="" className='pt-5' />
                    <div className='text-center text-sm'>Food on Train</div>
                  </div>
                </div>
                <div>
                  <div className='box-design'>
                    <img src="https://b.zmtcdn.com/data/o2_assets/813952c961fd13588cb71867d84ea7dc1742455815.png" alt="" className='pt-5'/>
                    <div className='text-center text-sm'>Offers</div>
                  </div>
                  <div className='box-design mt-5'>
                    <img src="https://b.zmtcdn.com/data/o2_assets/5e973dd10c387878009c66d625ae541a1746550690.png" alt="" className='pt-5'/>
                    <div className='text-center text-sm'>Collections</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
{/* 
          <div className="gold-section">
            <div className='gold-section-up'>
            </div>
            
            <div className='gold-section-down'>
            </div>
          </div> */}
          <div class="gold-section">
          <div class="content">
              <div className='text-4xl font-bold italic'>Zomato</div>
              <div className='font-bold text-[#eec781] text-8xl py-5'>GOLD</div>
              <div className='text-[#eec781] text-2xl'>India's Top Savings</div>
              <div className='text-[#eec781] text-2xl'>Program for Food Lovers</div>
              <div className='text-3xl py-10 font-bold'>GOLD BENEFITS </div>
              <div className='grid grid-cols-2 mx-80 me-5'>
                <div>
                  <div></div>
                  <div>
                    <div className='text-2xl text-left'>Free Delivery</div>
                    <div className='text-[#eec781] text-left text-xl'>At all restaurants within 7 km</div>
                  </div>
                </div>
                <div>
                  <div></div>
                  <div>
                    <div className='text-2xl text-left'>Up to 30% extra off</div>
                    <div className='text-[#eec781] text-xl text-left'>At 20,000+ partner restaurants</div>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div>
          <div className='mt-30'>
            <img src="https://b.zmtcdn.com/data/o2_assets/45f24a780ec544a02267ccd0da16ce231767592736.png" alt="" className='w-[200px] mx-145' />
          </div>
          <div className=''>
            
            <div className=''>
              <div className='text-center mt-5 text-[#7c7c8f] font-bold text-3xl'>POWERING INDIA'S</div>
              <div className='text-center mb-20 text-[#7c7c8f] font-bold text-3xl'>CHANGING LIFESTYLES</div>
            </div>
            <div className='flex mx-20'>
              <div className='bg-[#ffd2d7] rounded-2xl p-10 pb-15 box-border1 mx-3'>
                <img src="https://b.zmtcdn.com/data/o2_assets/d1eee2be61cf47e2332cb7c49475c0981739777714.png" alt="" className='rounded-2xl' />
                <div className='text-2xl font-bold text-center py-5'>zomato</div>
                <div className='text-gray-700 font-semibold text-l text-center'>Get the app now to</div>
                <div className='text-gray-700 font-semibold text-l text-center'>start ordering your</div>
                <div className='text-gray-700 font-semibold text-l text-center'>favourite dishes!</div>
                <div className='text-center font-semibold font-light pt-10'>Check it out</div>
              </div>
              <div className='bg-[#fff3c8] rounded-2xl p-10 pb-15 box-border2 mx-3'>
                <img src="https://b.zmtcdn.com/data/o2_assets/071cb96db84f20eea3a39804e113bdee1739777655.png" alt="" className='rounded-2xl' />
                <div className='text-2xl font-bold text-center py-5'>blinkit</div>
                <div className='text-gray-700 font-semibold text-l text-center'>Choose from 30,000+</div>
                <div className='text-gray-700 font-semibold text-l text-center'>products & get them</div>
                <div className='text-gray-700 font-semibold text-l text-center'>deliverd at your</div>
                <div className='text-gray-700 font-semibold text-l text-center'>doorstep</div>
                <div className='text-center font-semibold font-light pt-5'>Check it out</div>
              </div>
              <div className='bg-[#e3d5ff] rounded-2xl p-10 pb-15 box-border3 mx-3'>
                <img src="https://b.zmtcdn.com/data/o2_assets/b750e7c0113f10cc6b3cec658c7229d71770799109.png" alt="" className='rounded-2xl' />
                <div className='text-2xl font-bold text-center py-5'>district</div>
                <div className='text-gray-700 font-semibold text-l text-center'>The best of events,</div>
                <div className='text-gray-700 font-semibold text-l text-center'>movies, dining, and </div>
                <div className='text-gray-700 font-semibold text-l text-center'>and everything you love!</div>
                <div className='text-center font-semibold font-light pt-13'>Check it out</div>
              </div>
              <div className='bg-[#ffd2d7] rounded-2xl p-10 pb-15 box-border1 mx-3'>
                <img src="https://b.zmtcdn.com/data/o2_assets/9207cd0fc68c4ac55cfd3bfa00c02a351739777699.png" alt="" className='rounded-2xl' />
                <div className='text-2xl font-bold text-center py-5'>hyperpure</div>
                <div className='text-gray-700 font-semibold text-l text-center'>Offering Complete</div>
                <div className='text-gray-700 font-semibold text-l text-center'>supply chain solution</div>
                <div className='text-gray-700 font-semibold text-l text-center'>for your restaurant</div>
                <div className='text-center font-semibold font-light pt-13'>Check it out</div>
              </div>
            </div>
          </div>
         
        </div>

        <div className='grid grid-cols-2 bg-[#fff2f4] box-design1 rounded-3xl mx-20 px-10 py-20 my-20 box-border1'>
          <div className='py-10 ps-20'>
            <div className='text-4xl font-semibold pt-10'>Download the app now!</div>
            <div className='text-[#596378] text-2xl font-semibold mt-5'>Experience seamless online ordering</div>
            <div className='text-[#596378] text-2xl font-semibold mb-10'>only on the Zomato app</div>
            <div className='grid grid-cols-2'>
              <img src="https://b.zmtcdn.com/data/o2_assets/aad864bd17860b27634fe621001c32db1739350431.png" alt="" className='w-[200px]' />
              <img src="https://b.zmtcdn.com/data/o2_assets/df6464de32f4a09262cee301f65aaa661739351256.png" alt="" className='w-[200px]' />
            </div>
          </div>
          <div className='ps-20'>
            <img src="https://b.zmtcdn.com/data/o2_assets/3f7e2757e62fd22592b879bd56b666011742294630.png" alt="" className='absolute w-[350px]' />
            <div className='relative top-30 left-20 text-xl font-semibold text-gray-500'>Scan the QR code to</div>
            <div className='relative top-31 left-22 text-xl font-semibold text-gray-500'>download the app</div>
            <div className='relative w-[150px] top-35 left-25'>
              <img src="https://b.zmtcdn.com/data/o2_assets/98cc4eba0a6f59e728e5223a70fd39551742471514.png" alt="" />
            </div>
          </div>
        </div>
        <footer>
          <div className='bg-black px-60 py-20'>
            <div className='text-white text-4xl italic font-bold'>zomato</div>
            <div className=' grid grid-cols-5'>
              <div>
                <ul className='text-white pt-10 font-semibold'>
                  Eternal
                  <li className='text-[#5c5c64] pt-5'>Zomato</li>
                  <li className='text-[#5c5c64]'>Blinkit</li>
                  <li className='text-[#5c5c64]'>District</li>
                  <li className='text-[#5c5c64]'>Hyperpure</li>
                  <li className='text-[#5c5c64]'>Feeding India</li>
                  <li className='text-[#5c5c64]'>Investor Relations</li>
                </ul>
              </div>
              <div className=''>
                <ul className='text-white pt-10 font-semibold'>
                  For Restaurants
                  <li className='text-[#5c5c64] pt-5'>Partner With Us</li>
                  <li className='text-[#5c5c64]'>Apps For You</li>
                  <li className='text-[#5c5c64]'>Restaurant Consulting</li>
                </ul>
              </div>
              <div>
                <ul className='text-white pt-10 font-semibold'>
                  For Delivery Partners
                  <li className='text-[#5c5c64] pt-5'>Partner With Us</li>
                  <li className='text-[#5c5c64]'>Apps For You</li>
                </ul>
              </div>
              <div>
                <ul className='text-white pt-10 font-semibold'>
                  Learn More
                  <li className='text-[#5c5c64]  pt-5'>Privacy</li>
                  <li className='text-[#5c5c64]'>Security</li>
                  <li className='text-[#5c5c64]'>Terms of Service</li>
                  <li className='text-[#5c5c64]'>Help & Support</li>
                  <li className='text-[#5c5c64]'>Report a Fraud</li>
                  <li className='text-[#5c5c64]'>Blog</li>
                </ul>
              </div>
              <div>
                <div className='text-white pt-10 font-semibold'>Social Links</div>
                <div className='flex'></div>
                <div><img src="https://b.zmtcdn.com/data/o2_assets/df6464de32f4a09262cee301f65aaa661739351256.png" alt="" className='py-5' /></div>
                <div><img src="https://b.zmtcdn.com/data/o2_assets/aad864bd17860b27634fe621001c32db1739350431.png" alt="" /></div>
              </div>
            </div>
            <div><hr className='mt-10 pb-10 text-white'/></div>
            <div className='text-white font-sm'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners
            2008-2026 © Zomato™ Ltd. All rights reserved.</div>
          </div>
        </footer>
    </>
  )
}

export default Home
