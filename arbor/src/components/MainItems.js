import React from 'react';
import img1 from'../img/1.png';
import img2 from'../img/2.png';
import img3 from'../img/3.png';
import img4 from'../img/4.png';
import img5 from'../img/5.png';
import img6 from'../img/6.png';
import img7 from'../img/7.png';




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Items() {
  return (
    // <!-- Container for demo purpose -->


<div className="container my-24 px-6 mx-auto ">
<section className="mb-32 text-gray-800">

<div className="grid lg:grid-cols-4 gap-3 main_item">
    <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover main_item_box" >
      <div className='ml-5 mt-5'>
        <p className='card_heading_text'>Gaming Gears</p> 
      </div>
      <div className='card_img'>
      <img src={img4} className="w-full transition duration-300 ease-linear align-middle" />
      </div>

      <div className='ml-5 mb-5'>
        <a href="" className='card_heading_btn'>Explore <FontAwesomeIcon className='ml-1' icon={faArrowRight} /></a>
      </div>

    </div>

    <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover" >
      <div className='ml-5 mt-5'>
        <p className='card_heading_text'>Electronics</p> 
      </div>
      <div className='card_img'>
      <img src={img3} className="w-full transition duration-300 ease-linear align-middle" />
      </div>

      <div className='ml-5 mb-5 .main_item_footer'>
        <a href="" className='card_heading_btn'>Explore <FontAwesomeIcon className='ml-1' icon={faArrowRight} /></a>
      </div>

    </div> 

    <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover" >
      <div className='ml-5 mt-5'>
        <p className='card_heading_text'>Smart Homes</p> 
      </div>
      <div className='card_img'>
      <img src={img2} className="w-full transition duration-300 ease-linear align-middle" />
      </div>

      <div className='ml-5 mb-5'>
        <a href="" className='card_heading_btn'>Explore <FontAwesomeIcon className='ml-1' icon={faArrowRight} /></a>
      </div>

    </div> 

    <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover" >
      <div className='ml-5 mt-5'>
        <p className='card_heading_text'>Art & Crafts</p> 
      </div>
      <div className='card_img'>
      <img src={img1} className="w-full transition duration-300 ease-linear align-middle" />
      </div>

      <div className='ml-5 mb-5'>
        <a href="" className='card_heading_btn'>Explore <FontAwesomeIcon className='ml-1' icon={faArrowRight} /></a>
      </div>

    </div>  

    <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover" >
      <div className='ml-5 mt-5'>
        <p className='card_heading_text'>Arts Under $500</p> 
      </div>
      <div className='card_img'>
      <img src={img4} className="w-full transition duration-300 ease-linear align-middle" />
      </div>

      <div className='ml-5 mb-5'>
        <a href="" className='card_heading_btn'>Explore <FontAwesomeIcon className='ml-1' icon={faArrowRight} /></a>
      </div>

    </div> 

    <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover" >
      <div className='ml-5 mt-5'>
        <p className='card_heading_text'>Fitness Gears</p> 
      </div>
      <div className='card_img'>
      <img src={img6} className="w-full transition duration-300 ease-linear align-middle" />
      </div>

      <div className='ml-5 mb-5'>
        <a href="" className='card_heading_btn'>Explore <FontAwesomeIcon className='ml-1' icon={faArrowRight} /></a>
      </div>

    </div> 

    <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover" >
      <div className='ml-5 mt-5'>
        <p className='card_heading_text'>Fashion</p> 
      </div>
      <div className='card_img'>
      <img src={img4} className="w-full transition duration-300 ease-linear align-middle" />
      </div>

      <div className='ml-5 mb-5'>
        <a href="" className='card_heading_btn'>Explore <FontAwesomeIcon className='ml-1' icon={faArrowRight} /></a>
      </div>

    </div> 

    <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover" >
      <div className='ml-5 mt-5'>
        <p className='card_heading_text'>Watches</p> 
      </div>
      <div className='card_img'>
      <img src={img5} className="w-full transition duration-300 ease-linear align-middle" />
      </div>

      <div className='ml-5 mb-5'>
        <a href="" className='card_heading_btn'>Explore <FontAwesomeIcon className='ml-1' icon={faArrowRight} /></a>
      </div>

    </div> 


</div>


</section>
</div>

 
  )
}




