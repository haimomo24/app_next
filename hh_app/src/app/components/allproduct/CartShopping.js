import React from 'react'

const CartShopping = ({ address, phone, email, orderDate, setAddress, setPhone, setEmail, setOrderDate, onSubmit }) => {
  return (
   <>
   <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Thông tin đặt hàng</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="address">Địa chỉ</label>
            <input 
              type="text" 
              id="address" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)}
              className="border rounded-lg w-full p-2"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="phone">Số điện thoại</label>
            <input 
              type="tel" 
              id="phone" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)}
              className="border rounded-lg w-full p-2"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg w-full p-2"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="orderDate">Ngày đặt hàng</label>
            <input 
              type="date" 
              id="orderDate" 
              value={orderDate} 
              onChange={(e) => setOrderDate(e.target.value)}
              className="border rounded-lg w-full p-2"
              required 
            />
          </div>
          <div className="flex justify-end">
            <button 
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
            >
              Đặt hàng
            </button>
          </div>
        </form>
      </div>
    </div>
   </>
  )
}

export default CartShopping