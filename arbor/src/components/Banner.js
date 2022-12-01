

/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import image from'../img/banner_shoes.png';



export default function Banner() {
  

  return (
<>
<section>
<div className="banner_container_main">
<div className="container px-6 mx-auto">
<div className="banner_container">
    
    <div className="banner_main_first">
     <div className="banner_heading">
      <h1>The Crypto </h1>
      <h1>way of E-Commerce.</h1>
     </div>
     <div className="banner_text">
      <h1>Buy, Trade, Redeem NFTs for Physical or</h1>
      <h1>Virtual product from anywhere.</h1>
     </div>
     <div className="banner_main_first_button">
            <div className='banner_main_first_button1'>
               <a href="/"className="  ">Start Shopping</a>
            </div>
            <div className='banner_main_first_button2'>
            <a href="/"className="">How It Work</a>

            </div>
                  
                </div>
              </div>
    
    <div className="banner_main_second">
        <div className='banner_main_second_upper'>
        
        <div className='banner_main_second_upper_img'><h1>Flash picks</h1></div>
            <div className='banner_main_second_upper_wear'><span>Men Wear</span></div>
            <div className='banner_main_second_upper_brand'><span>NIKE Air 270</span></div>
        </div>
        <div className='banner_main_second_lower'>
            <div className="banner_main_second_lower_price">
              <h5 className='heading'><b>$555.50</b></h5> <strike>$550.20 </strike>
            </div>
            <div className='banner_main_second_lower_shop'>
                    <a href="/"className="btn"> Shop Now</a>
            </div>
        </div>
      <div className='banner_main_second_img'>
      <img src={image}className="w-full transition duration-300 ease-linear align-middle" />
      </div>
    </div>


    <div className="banner_main_third">     
    <div className='banner1'>First</div>
    <div className='banner2'>Second</div>
    <div className='banner3'>Third</div>
    </div>
    </div>
  </div>
  </div>
  

</section>

    </>
  )
}

