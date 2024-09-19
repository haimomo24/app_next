'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const ProductDb = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch('/api/product');

      // Kiểm tra xem phản hồi có thành công không
      if (!res.ok) {
        console.error('Error fetching products:', res.status, res.statusText);
        return; // hoặc xử lý thông báo lỗi
      }

      const data = await res.json();
      setProducts(data);  // Đảm bảo rằng dữ liệu trả về là mảng sản phẩm
    };

    fetchProduct();
  }, []);
  return (
    <div>
      
       <section className="py-24 relative">
  <div className="w-full max-w-7xl ">
    <div className='flex justify-between items-center'>
      <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8  text-black">
     Quản lý sản phẩm 
    </h2>
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      <Link href="/dashboard/addproduct">+</Link>
    </button>
    </div>
    {products.map((product) => (
    <div className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 ">
    
      <div className="col-span-12 lg:col-span-2 img box">
        <img
         src={product.images}
          alt="speaker image"
          className="max-lg:w-full lg:w-[180px] rounded-lg object-cover"
        />
      </div>
      <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
        <div className="flex items-center justify-between w-full mb-4">
          <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
          {product.name}
          </h5>
          <button className="rounded-full group flex items-center justify-center focus-within:outline-red-500">
            <svg
              width={34}
              height={34}
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                cx={17}
                cy={17}
                r={17}
                fill=""
              />
              <path
                className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                stroke="#EF4444"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <p className="font-normal text-base leading-7 text-gray-500 mb-6">
          {product.description}
          
        </p>
        <div className="flex justify-between items-center">
        
          <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">
          {product.price}.VND
          </h6>
        </div>
      </div>
    </div>
   
   
  ))}  
  </div>

</section>


    </div>
  )
}

export default ProductDb

//  <ul>
// {products.map((product) => (
//   <li key={product.id}>
//     <h2>{product.title}</h2>
//     <img src={product.images} alt={product.name} />
//     <p>{product.description}</p>
//     <p>Category: {product.category}</p>
//   </li>
// ))}
// </ul>