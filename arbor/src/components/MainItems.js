import React from 'react';
import image from'../img/item_1.png';
import img1 from'../img/item_2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'

export default function Items() {
  return (
    // <!-- Container for demo purpose -->

<div className="container my-24 px-6 mx-auto">

        {/* <!-- Section: Design Block --> */}
        <section className="mb-32 text-gray-800">
            <style>
            {/* .zoom:hover img {
                transform: scale(1.1);
            } */}
            </style>

           

            <div className="grid lg:grid-cols-5 gap-3">
                <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"  >
                    <img src={image} className="w-full transition duration-300 ease-linear align-middle" />
                    <a href="/">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                         
                    </div>
                    <div className="hover-overlay">
                        <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" ></div>
                    </div>
                    </a>
                    
                </div> 

                <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"  >
                    <img src={image} className="w-full transition duration-300 ease-linear align-middle" />
                    <a href="/">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                         
                    </div>
                    <div className="hover-overlay">
                        <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" ></div>
                    </div>
                    </a>

                    
                </div> 

                <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"  >
                    <img src={image} className="w-full transition duration-300 ease-linear align-middle" />
                    <a href="/">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                         
                    </div>
                    <div className="hover-overlay">
                        <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" ></div>
                    </div>
                    </a>

                   
                </div> 

                <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"  >
                    <img src={image} className="w-full transition duration-300 ease-linear align-middle" />
                    <a href="/">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                         
                    </div>
                    <div className="hover-overlay">
                        <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" ></div>
                    </div>
                    </a>

                     
                </div> 

                <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"  >
                    <img src={image} className="w-full transition duration-300 ease-linear align-middle" />
                    <a href="/">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                         
                    </div>
                    <div className="hover-overlay">
                        <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" ></div>
                    </div>
                    </a>

                    
                </div> 


                <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"  >
                    <img src={img1}className="w-full transition duration-300 ease-linear align-middle" />
                    <a href="/">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                         
                    </div>
                    <div className="hover-overlay">
                        <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" ></div>
                    </div>
                    </a>

                    
                </div> 

                <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"  >
                    <img src={img1} className="w-full transition duration-300 ease-linear align-middle" />
                    <a href="/">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                         
                    </div>
                    <div className="hover-overlay">
                        <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" ></div>
                    </div>
                    </a>

                    
                </div> 

                <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"  >
                    <img src={img1} className="w-full transition duration-300 ease-linear align-middle" />
                    <a href="/">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                         
                    </div>
                    <div className="hover-overlay">
                        <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" ></div>
                    </div>
                    </a>

                     
                </div> 

                <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"  >
                    <img src={img1} className="w-full transition duration-300 ease-linear align-middle" />
                    <a href="/">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                        
                    </div>
                    <div className="hover-overlay">
                        <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" ></div>
                    </div>
                    </a>

                   
                </div> 

                <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"  >
                    <img src={img1} className="w-full transition duration-300 ease-linear align-middle" />
                    <a href="/">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                        
                    </div>
                    <div className="hover-overlay">
                        <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" ></div>
                    </div>
                    </a>

                    
                    <div>

                    </div>
                </div> 
            </div>


            
  
        
    

        </section>
  {/* <!-- Section: Design Block --> */}

</div>
 
  )
}




