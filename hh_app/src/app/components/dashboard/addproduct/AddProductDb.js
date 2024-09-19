import React from 'react'

const AddProductDb = () => {
  return (
    <div >
      <h2 className="title font-manrope font-bold text-2xl leading-10 mb-8 text-black">
                Thêm sản phẩm 
              </h2>
      <form className="max-w-sm h-[1000px]  mx-auto">
  <div className="mb-5">
   
    <input
      type="text"
      id="name"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="tên sản phẩm "
      required=""
    />
  </div>
  <div className="mb-5">
   
    <input
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
     id="price"
     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="giá  "
     required=""
   />
 </div>
 <div className="mb-5">
   
   <input
     type="text"
     id="category"
     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="loại sản phẩm   "
     required=""
   />
 </div>
 <div className="mb-5">
   
   <input
     type="text"
     id="description"
     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Mô Tả sản Phẩm  "
     required=""
   />
 </div>
 <div className="mb-5">
   
   <input
     type="text"
     id="title"
     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Giới thiệu sản phẩm   "
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