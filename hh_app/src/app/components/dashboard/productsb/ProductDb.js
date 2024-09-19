'use client'

import { faCaretLeft, faCaretRight, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const ProductDb = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // State for pagination
  const productsPerPage = 3; // Show 3 products per page

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch('/api/product');

      // Check if the response is successful
      if (!res.ok) {
        console.error('Error fetching products:', res.status, res.statusText);
        return;
      }

      const data = await res.json();
      setProducts(data); // Ensure the returned data is a list of products
    };

    fetchProduct();
  }, []);

  // Function to delete a product
  const deleteProduct = async (id) => {
    const confirmed = confirm("Are you sure you want to delete this product?");
    if (!confirmed) return;

    try {
      const res = await fetch(`/api/product`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }), // Send the product ID to delete
      });

      if (res.ok) {
        // Remove the deleted product from the frontend
        setProducts(products.filter(product => product.id !== id));
      } else {
        console.error('Error deleting product:', res.status, res.statusText);
      }
    } catch (error) {
      console.error('Failed to delete the product:', error);
    }
  };

  // Get the products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to go to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };
  return (
    <>
    <div className='mt-[-50px] ml-[100px]'>
        <section className="py-24 relative">
          <div className="w-full max-w-7xl">
            <div className='flex justify-between items-center'>
              <h2 className="title font-manrope font-bold text-2xl leading-10 mb-8 text-black">
                Quản lý sản phẩm
              </h2>
              <button type="button" className="text-white bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                <Link href="/dashboard/addproduct">
                <FontAwesomeIcon icon={faPlus} className=" flex justify-center h-5 w-5" />
                </Link>
              </button>
            </div>

            {/* Display 3 products per page */}
            {currentProducts.map((product) => (
              <div key={product.id} className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 gap-y-4">
                <div className="col-span-12 lg:col-span-2 img box">
                  <img
                    src={product.images}
                    alt="product image"
                    className="max-lg:w-full lg:w-[180px] rounded-lg object-cover"
                  />
                </div>
                <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                  <div className="flex items-center justify-between w-full mb-4">
                    <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                      {product.name}
                    </h5>
                    {/* Delete Button */}
                    <button onClick={() => deleteProduct(product.id)} className="text-red-500">
                    <FontAwesomeIcon icon={faTrash} className="text-orange-500 flex justify-center h-5 w-5" />
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

            {/* Pagination Controls */}
            <div className="flex justify-end w-full">
              <button 
                className={`bg-gray-200 py-2 px-4 rounded mx-2 ${currentPage === 1 ? 'cursor-not-allowed' : ''}`} 
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                <FontAwesomeIcon icon={faCaretLeft} className="text-orange-500 flex justify-center h-5 w-5" />
              </button>

              <button 
                className={`bg-gray-200 py-2 px-4 rounded mx-2 ${currentPage === Math.ceil(products.length / productsPerPage) ? 'cursor-not-allowed' : ''}`} 
                onClick={nextPage}
                disabled={currentPage === Math.ceil(products.length / productsPerPage)}
              >
                <FontAwesomeIcon icon={faCaretRight} className="text-orange-500 flex justify-center h-5 w-5" />
              </button>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default ProductDb

