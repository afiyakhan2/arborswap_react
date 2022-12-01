import React from 'react';
import adidasLogo from'../img/adidas_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'

function TopSelling() {
  return (

    <div className="container-fluid  px-6 mx-auto top_selling_container ">
        <div className="container my-20 px-6 mx-auto">
    <div>
        <h1 className='top_heading'>Top Selling Vendors</h1>
    </div>
        {/* <!-- Section: Design Block --> */}
        <section className="mb-32 text-gray-800">
            <style>
            {/* .zoom:hover img {
                transform: scale(1.1);
            } */}
            </style>

           

            <div className="grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-5 gap-3">

                <div className="zoom shadow-sm rounded-lg relative overflow-hidden bg-no-repeat bg-cover top_selling_card "  >
                    <img src={adidasLogo} className="w-full transition duration-300 ease-linear align-middle" />
                    <div className="top_selling_card_text">
                       <p className='top_selling_card_title'>Addidas</p>
                       <p className='top_selling_card_desc'>Listed Items</p>
                       <p className='top_selling_card_price'>1,847</p>
                    </div>
                </div> 

                <div className="zoom shadow-sm rounded-lg relative overflow-hidden bg-no-repeat bg-cover top_selling_card "  >
                    <img src={adidasLogo} className="w-full transition duration-300 ease-linear align-middle" />
                    <div className="top_selling_card_text">
                       <p className='top_selling_card_title'>Addidas</p>
                       <p className='top_selling_card_desc'>Listed Items</p>
                       <p className='top_selling_card_price'>1,847</p>
                    </div>
                </div> 

                <div className="zoom shadow-sm rounded-lg relative overflow-hidden bg-no-repeat bg-cover top_selling_card "  >
                    <img src={adidasLogo} className="w-full transition duration-300 ease-linear align-middle" />
                    <div className="top_selling_card_text">
                       <p className='top_selling_card_title'>Addidas</p>
                       <p className='top_selling_card_desc'>Listed Items</p>
                       <p className='top_selling_card_price'>1,847</p>
                    </div>
                </div> 

                <div className="zoom shadow-sm rounded-lg relative overflow-hidden bg-no-repeat bg-cover top_selling_card "  >
                    <img src={adidasLogo} className="w-full transition duration-300 ease-linear align-middle" />
                    <div className="top_selling_card_text">
                       <p className='top_selling_card_title'>Addidas</p>
                       <p className='top_selling_card_desc'>Listed Items</p>
                       <p className='top_selling_card_price'>1,847</p>
                    </div>
                </div> 

                <div className="zoom shadow-sm rounded-lg relative overflow-hidden bg-no-repeat bg-cover top_selling_card "  >
                    <img src={adidasLogo} className="w-full transition duration-300 ease-linear align-middle" />
                    <div className="top_selling_card_text">
                       <p className='top_selling_card_title'>Addidas</p>
                       <p className='top_selling_card_desc'>Listed Items</p>
                       <p className='top_selling_card_price'>1,847</p>
                    </div>
                </div> 

                <div className="zoom shadow-sm rounded-lg relative overflow-hidden bg-no-repeat bg-cover top_selling_card "  >
                    <img src={adidasLogo} className="w-full transition duration-300 ease-linear align-middle" />
                    <div className="top_selling_card_text">
                       <p className='top_selling_card_title'>Addidas</p>
                       <p className='top_selling_card_desc'>Listed Items</p>
                       <p className='top_selling_card_price'>1,847</p>
                    </div>
                </div> 


                <div className="zoom shadow-sm rounded-lg relative overflow-hidden bg-no-repeat bg-cover top_selling_card "  >
                    <img src={adidasLogo} className="w-full transition duration-300 ease-linear align-middle" />
                    <div className="top_selling_card_text">
                       <p className='top_selling_card_title'>Addidas</p>
                       <p className='top_selling_card_desc'>Listed Items</p>
                       <p className='top_selling_card_price'>1,847</p>
                    </div>
                </div> 

                <div className="zoom shadow-sm rounded-lg relative overflow-hidden bg-no-repeat bg-cover top_selling_card "  >
                    <img src={adidasLogo} className="w-full transition duration-300 ease-linear align-middle" />
                    <div className="top_selling_card_text">
                       <p className='top_selling_card_title'>Addidas</p>
                       <p className='top_selling_card_desc'>Listed Items</p>
                       <p className='top_selling_card_price'>1,847</p>
                    </div>
                </div> 

                <div className="zoom shadow-sm rounded-lg relative overflow-hidden bg-no-repeat bg-cover top_selling_card "  >
                    <img src={adidasLogo} className="w-full transition duration-300 ease-linear align-middle" />
                    <div className="top_selling_card_text">
                       <p className='top_selling_card_title'>Addidas</p>
                       <p className='top_selling_card_desc'>Listed Items</p>
                       <p className='top_selling_card_price'>1,847</p>
                    </div>
                </div> 

                <div className="zoom shadow-sm rounded-lg relative overflow-hidden bg-no-repeat bg-cover top_selling_card "  >
                    <img src={adidasLogo} className="w-full transition duration-300 ease-linear align-middle" />
                    <div className="top_selling_card_text">
                       <p className='top_selling_card_title'>Addidas</p>
                       <p className='top_selling_card_desc'>Listed Items</p>
                       <p className='top_selling_card_price'>1,847</p>
                    </div>
                </div> 

            </div>

        </section>
  {/* <!-- Section: Design Block --> */}

  <div className="footer_news_letter">
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
 
       <div className="news_letter_sec_1">
          <h5 >Subscribe to Newsletter</h5>

          <form action="">

            <input
              type="text"
              className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
              id="exampleFormControlInput1"
              placeholder="Email address"/>

            {/* <button type="submit" className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
              Subscribe
            </button> */}

      </form>

       </div>
       
       <div className="news_letter_sec_2">
           <h5></h5>
           <div className="icon_div">
           
           </div>
       </div>

    </div>
  </div>
</div>
</div>
  
  )
}

export default TopSelling
