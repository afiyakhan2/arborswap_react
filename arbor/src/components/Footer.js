import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import footerLogo from'../img/footer_logo.PNG';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Footer() {
  return (

    <>
{/* ----- Start Footer Section ----- */}

<section>
 
  <div className="footer ">
    <div className="container my-20 px-6 mx-auto">
    <div className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-1">
      <div class="">
         <div className="footer_nav footer_sec_1" >
            <div className="footer_logo">
              <img src={footerLogo} className="w-full transition duration-300 ease-linear align-middle" />
            </div>
            <div className="footer_logo_desc">
               <p>Buy, Trade, Redeem NFTs for Physical or
                  Virtual product from anywhere.</p>
            </div>
         </div>
      </div>
      <div className="">
      <div className="footer_nav footer_sec_2">
        <h5 className='footer_heading'>Products</h5>
          <a href="">Marketplace</a>
          <a href="">Launchpad</a>
          <a href="">Exchange</a>
          <a href="">Lottery</a>
         </div>
      </div>
      <div className="">
      <div className="footer_nav footer_sec_3">
      <h5 className='footer_heading'>Resources</h5>
          <a href="">Become a Vendor</a>
          <a href="">How it works</a>
          <a href="">User Guides</a>
          <a href="">FAQs</a>
         </div>
      </div>
      <div className="">
      <div className="footer_nav footer_sec_4">
      <h5 className='footer_heading'>Others</h5>
          <a href="">Terms of Service</a>
          <a href="">Privacy Policy</a>
         </div>
      </div>
      <div className="">
      <div className="footer_nav footer_sec_5">
      <h5 className='footer_heading'>Contact</h5>
          <a href="">Hello@Arborswap.com</a>
         </div>
      </div>
    </div>

    <div className="copyright_section">
      <p className='text-center'>  ©2022 Copyright:</p>
    </div>
  </div>
  </div>
</section>

{/* ------ End footer Section  ----- */}


</>
     
  )
}
