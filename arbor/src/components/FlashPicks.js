import React from 'react';
import image from'../img/shoes_1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function FlashPicks() {
  return (
    <>
    <div className="flashPicks_main ">
    <div className=" grid lg:grid-cols-2 gap-3 container my-20 px-6 mx-auto ">    
    <div className="flashPicks">
        <div className="flashPicks_box">
            <h1>Flash picks</h1>
        </div>  
               
    </div>       
    <div className='flashPicks_btn container px-6 mx-auto '> 
    <div className="floashPicks_main_time">
            <span className="floashPicks_time">22:49:53</span>
            
        </div>                
        <a href="" className=''>View All <FontAwesomeIcon className='ml-1' icon={faArrowRight} /></a>
        
    </div>
    </div>
    

    </div>   
    

  <div className="grid lg:grid-cols-5 gap-3 container my-20 px-6 mx-auto">
                <div className="">
                    <div className="uppertext"><span>-31%</span></div>
                    <img src={image} className="w-full transition duration-300 ease-linear align-middle" />
                    <div className="m-5 fitureCardContent">
                      <a href="" className="cardDesc">Men's Nike Air Max 270 React Black/Cool Grey-C.....</a>
                     <div className="priceText">
                       <h5><b>$175.58</b></h5><strike>$175.58 </strike>
                     </div>                     
                     
                     <div className="itemText">
                       <h5><b>2,254</b></h5><span>items left</span>                       
                     </div>
                     <div className="itemtext_line"></div>
                   
                </div>
                </div> 

                <div className="">
                     <div className="uppertext"><span>-31%</span></div>
                    <img src={image} className="w-full transition duration-300 ease-linear align-middle" />
                    <div className="m-5 fitureCardContent">
                      <a href="" className="cardDesc">Men's Nike Air Max 270 React Black/Cool Grey-C.....</a>
                     <div className="priceText">
                       <h5><b>$175.58</b></h5><strike>$175.58 </strike>
                     </div>
                     <div className="itemText">
                       <h5><b>2,254</b></h5><span>items left</span>                       
                     </div>
                     <div className="itemtext_line"></div>
                </div>
                </div> 

                <div className=""  >
                    <div className="uppertext"><span>-31%</span></div>
                    <img src={image} className="w-full transition duration-300 ease-linear align-middle" />
                    <div className="m-5 fitureCardContent">
                      <a href="" className="cardDesc">Men's Nike Air Max 270 React Black/Cool Grey-C.....</a>
                     <div className="priceText">
                       <h5><b>$175.58</b></h5><strike>$175.58 </strike>
                     </div>
                     <div className="itemText">
                       <h5><b>2,254</b></h5><span>items left</span>                       
                     </div>
                     <div className="itemtext_line"></div>
                </div>
                </div> 

                <div className=""  >
                    <div className="uppertext"><span>-31%</span></div>
                    <img src={image} className="w-full transition duration-300 ease-linear align-middle" />
                    <div className="m-5 fitureCardContent">
                      <a href="" className="cardDesc">Men's Nike Air Max 270 React Black/Cool Grey-C.....</a>
                     <div className="priceText">
                       <h5><b>$175.58</b></h5><strike>$175.58 </strike>
                     </div>
                     <div className="itemText">
                       <h5><b>2,254</b></h5><span>items left</span>                       
                     </div>
                     <div className="itemtext_line"></div>
                </div>
                </div> 

                <div className=""  >
                    <div className="uppertext"><span>-31%</span></div>
                    <img src={image} className="w-full transition duration-300 ease-linear align-middle" />                   
                    <div className="m-5 fitureCardContent">
                      <a href="" className="cardDesc">Men's Nike Air Max 270 React Black/Cool Grey-C.....</a>
                     <div className="priceText">
                       <h5><b>$175.58</b></h5> <strike>$175.58 </strike>
                     </div>
                     <div className="itemText">
                       <h5><b>2,254</b></h5><span>items left</span>                       
                     </div>
                     <div className="itemtext_line"></div>
                  </div>
                </div> 
                </div>

               
</>
  )
}
