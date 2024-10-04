import React from 'react'

const ConTacPage = () => {
  return (
  <>
  <div className="bg-gray-100 font-sans leading-normal tracking-normal">
  {/* Contact Section */}
  <div className="container mx-auto p-6">
    <div className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Liên Hệ
      </h2>
      {/* Contact Info */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:space-x-8 mb-8">
        {/* Phone Number */}
        <div className="text-center mb-8 lg:mb-0">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Số điện thoại
          </h3>
          <p className="text-2xl text-blue-500 font-bold">0969591208</p>
        </div>
        {/* Email */}
        <div className="text-center mb-8 lg:mb-0">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Email Address
          </h3>
          <p className="text-blue-500 font-bold text-lg">haimoba@gmail.com</p>
        </div>
      </div>
      {/* Map Section */}
      <div className="map-container h-96">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509389!2d144.9559283153159!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3f9a1ad%3A0xb1d31b210b33a7c!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1611789353001!5m2!1sen!2sau"
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
      {/* Address */}
      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Địa Chỉ 
        </h3>
        <p className="text-gray-600">123 Giải Phóng, Hai Bà Trưng, Hà Nội</p>
      </div>
    </div>
  </div>
</div>

  </>
  )
}

export default ConTacPage