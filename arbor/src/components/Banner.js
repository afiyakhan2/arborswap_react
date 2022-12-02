

/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import image from'../img/banner_shoes.png';
import image1 from'../img/banner1_watch.png';
import image2 from'../img/banner_shoes.png';
import image3 from'../img/banner_camera.png';
import icon from'../img/shop_icon.png';
import flashicon from'../img/flash_icon.png';
import flashicon2 from'../img/flash_icon2.png';


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
            <div className='banner_main_second_upper_img'><h1 className='flash_heading'><img src={flashicon}className="flash_icon" />Flash picks</h1></div>
            <div className='banner_main_second_upper_wear'><span>Men Wear</span></div>
            <div className='banner_main_second_upper_brand'><span>NIKE Air 270</span></div>
        </div>
        <div className='banner_main_second_lower'>
            <div className="banner_main_second_lower_price">
              <h5 className='heading'><b>$555.50</b></h5> <strike>$550.20 </strike>
            </div>
            <div className='banner_main_second_lower_shop'>
                   <img src={icon}className="icon" />
                    <a href="/"className="btn"> Shop Now</a>
            </div>
        </div>
      <div className='banner_main_second_img'>
      <img src={image}className="w-full transition duration-300 ease-linear align-middle" />
      </div>
    </div>


    <div className="banner_main_third">   

      <div className='banner_main_third_banner1'>
      <div className="banner_main_third_banner2_upper">
        <div className='banner_main_third_banner2_upper_img'><h1 className='flash_heading2'><img src={flashicon2}className="flash_icon2" />Flash picks</h1></div>
        <div className='banner_main_third_banner2_upper_wear'><span className='wear'>Men Wear</span></div>
            <div className='banner_main_third_banner2_upper_brand'><span className='brand'>Hublot Tourbillon</span></div>
        </div>
        <div className="banner_main_third_banner2_lower">
        <div className="banner_main_third_banner2_lower_price">
              <h5 className='heading'><b>$110,100</b></h5> <strike>$110,500</strike>
        </div>
        <div className='banner_main_third_banner2_lower_price_shop'>
                   <img src={icon}className="icon" />
                    <a href="/"className="btn"> Shop Now</a>
        </div>
        </div>
        <div className='banner_main_third_banner2_img'>
      <img src={image1}className="w-full transition duration-300 ease-linear align-middle" />
      </div>
      </div>

      <div className='banner_main_third_banner2'>
        <div className="banner_main_third_banner2_upper">
        <div className='banner_main_third_banner2_upper_img'><h1 className='flash_heading2'><img src={flashicon2}className="flash_icon2" />Flash picks</h1></div>
        <div className='banner_main_third_banner2_upper_wear'><span className='wear'>Men Wear</span></div>
            <div className='banner_main_third_banner2_upper_brand'><span className='brand'>NIKE Air 270</span></div>
        </div>
        <div className="banner_main_third_banner2_lower">
        <div className="banner_main_third_banner2_lower_price">
              <h5 className='heading'><b>$555.50</b></h5> <strike>$550.20 </strike>
        </div>
        <div className='banner_main_third_banner2_lower_price_shop'>
                   <img src={icon}className="icon" />
                    <a href="/"className="btn"> Shop Now</a>
        </div>
        </div>
        <div className='banner_main_third_banner2_img'>
      <img src={image2}className="w-full transition duration-300 ease-linear align-middle" />
      </div>
      </div>

      <div className='banner_main_third_banner3'>
      <div className="banner_main_third_banner2_upper">
        <div className='banner_main_third_banner2_upper_img'><h1 className='flash_heading2'><img src={flashicon2}className="flash_icon2" />Flash picks</h1></div>
        <div className='banner_main_third_banner2_upper_wear'><span className='wear'>Men Wear</span></div>
            <div className='banner_main_third_banner2_upper_brand'><span className='brand'>DJI Mavic 3E</span></div>
        </div>
        <div className="banner_main_third_banner2_lower">
        <div className="banner_main_third_banner2_lower_price">
              <h5 className='heading'><b>$3,810</b></h5> <strike>$3,920</strike>
        </div>
        <div className='banner_main_third_banner2_lower_price_shop'>
            <img src={icon}className="icon"/>
            <a href="/"className="btn"> Shop Now</a>
        </div>
        </div>
        <div className='banner_main_third_banner2_img'>
      <img src={image3}className="w-full transition duration-300 ease-linear align-middle" />
      </div>
      </div>

    </div>
  </div>
  </div>
  </div>
  

</section>

    </>
  )
}

