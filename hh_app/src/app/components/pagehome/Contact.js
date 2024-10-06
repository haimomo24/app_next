import React from 'react'
import Link from 'next/link';

const Contact = () => {
  return (
    <>
        <div className="mt-[30px]">
  <h2 className="text-4xl text-orange-500 font-bold text-center mb-6">
    Nhãn Hàng Của Chúng Tôi
  </h2>
  <div className="container mx-auto">
    <div className="flex flex-wrap justify-center">
      {/* Cột đầu tiên */}
      <div className="w-full sm:w-1/2 md:w-1/4 p-4">
        <div className="cart-contact bg-white shadow-lg p-6 rounded-lg">
        <Link href="/allproduct">
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_3oNME3dOzDakJ-vgAQa2eS5ifAmL2zHi6g&s"
            alt=""
            className="w-full h-[80px] object-cover rounded-lg"
          />
        </Link>
        
        </div>
      </div>
      {/* Cột thứ hai */}
      <div className="w-full sm:w-1/2 md:w-1/4 p-4">
        <div className="cart-contact bg-white shadow-lg p-6 rounded-lg">
        <Link href="/allproduct">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1a/VICTOR_logo.JPG"
            alt=""
            className="w-full h-[80px] object-cover rounded-lg"
          />
        </Link>
          
        </div>
      </div>
      {/* Cột thứ ba */}
      <div className="w-full sm:w-1/2 md:w-1/4 p-4">
        <div className="cart-contact bg-white shadow-lg p-6 rounded-lg">
        <Link href="/allproduct">
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTic4l8gPIz30kK8wDr-wyCiiLEpTToiCBXQ&s"
            alt=""
            className="w-full h-[80px] object-cover rounded-lg"
          />
        </Link>
       
        </div>
      </div>
      {/* Cột thứ tư */}
      <div className="w-full sm:w-1/2 md:w-1/4 p-4">
        <div className="cart-contact bg-white shadow-lg p-6 rounded-lg">
        <Link href="/allproduct">
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIX99LalKmgSY72jafKDlPPLBy4vMbV6gJig&s"
            alt=""
            className="w-full h-[80px] object-cover rounded-lg"
          />
        </Link>
          
        </div>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default Contact