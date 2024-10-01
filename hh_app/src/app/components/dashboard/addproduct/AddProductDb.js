'use client'


import React, { useState } from 'react'


const AddProductDb = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    title: '',
    images: '',
    description: '',
    category: '',
    status: ''
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('New Product:', result);

        // Hiện thông báo thành công  
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false); // Ẩn thông báo sau 3 giây  
        }, 3000);

        // Reset form after submission  
        setFormData({ name: '', images: '', price: '', description: '', category: '', title: '', status: '' });
      } else {
        alert('Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('An error occurred');
    }
  };
  return (
    <div >
      <h2 className="title font-manrope font-bold text-2xl leading-10 mb-8 text-black">
        Thêm sản phẩm
      </h2>
      {/* Thông báo thành công */}
      {showSuccessMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded shadow-md">
            <p className="text-center text-lg-orange-500 text-lg">Thêm sản phẩm thành công!</p>
            
          </div>
         

        </div>
      )}
      <form onSubmit={handleSubmit} className="max-w-sm h-[1000px]  mx-auto" >
        <div className="mb-5">

          <input
            value={formData.name}
            onChange={handleChange}
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="tên sản phẩm "
            required=""
          />
        </div>
        <div className="mb-5">

          <input
            value={formData.images}
            onChange={handleChange}
            type="text"
            id="images"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Đường dẫn ảnh  "
            required=""
          />
        </div>
        <div className="mb-5">

          <input
            type="text"
            value={formData.price}
            onChange={handleChange}
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="giá  "
            required=""
          />
        </div>
        <div className="mb-5">

          <input
            type="text"
            value={formData.category}
            onChange={handleChange}
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="loại sản phẩm   "
            required=""
          />
        </div>
        <div className="mb-5">

          <input
            type="text"
            value={formData.description}
            onChange={handleChange}
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Mô Tả sản Phẩm  "
            required=""
          />
        </div>
        <div className="mb-5">

          <input
            type="text"
            value={formData.title}
            onChange={handleChange}
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Giới thiệu sản phẩm   "
            required=""
          />
        </div>
        <div className="mb-5">

          <input
            type="text"
            value={formData.status}
            onChange={handleChange}
            id="status"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="tình trạng sản phẩm    "
            required=""
          />
        </div>


        <button
          type="submit"
          className="text-white bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

    </div>
  )
}

export default AddProductDb