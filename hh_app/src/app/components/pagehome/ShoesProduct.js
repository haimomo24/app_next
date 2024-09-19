'use client'


import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'

const ShoesProduct = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // State for pagination
    const productsPerPage = 6; // Show 6 products per page

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch('/api/product');
    
            // Check if the response is successful
            if (!res.ok) {
                console.error('Error fetching products:', res.status, res.statusText);
                return;
            }
    
            const data = await res.json();
            
            // Filter the products by category "vot"
            const filteredProducts = data.filter(product => product.category === 'giay');
            
            setProducts(filteredProducts);
        };
    
        fetchProduct();
    }, []);

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
   <div className="container mx-auto  p-4">
                <h1 className="text-4xl text-orange-500 font-bold text-center mb-6">Giày cầu lông  </h1>
                <div className="flex flex-col md:flex-row">
                    {/* Sidebar */}
                    <div className="md:w-1/3 h-100 mb-4 md:mb-0 border ">
                        <div className=" h-full  p-6 rounded-lg rounded-lg">
                        <img src="https://thanhloisport.com/wp-content/uploads/2022/11/giay-cau-long-chinh-hang-01.jpg.webp" 
                            alt="Product 2" 
                            className="w-[100%] h-[80%] object-cover rounded"
                             />
                            
                            <p className="mt-2">Badminton rackets</p>
                            <button className="mt-4 bg-[#010101] text-orange-500 font-bold py-2 px-4 rounded">
                                XEM NGAY
                            </button>
                        </div>
                    </div>

                    {/* Products */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-[10px] md:w-2/3">
                        {currentProducts.map((product) => (
                            <div className="border rounded-lg h-full p-4 bg-white shadow-md transition transform hover:scale-105" key={product.id}>
                                <img src={product.images}
                                    alt={product.name}
                                    className="w-full h-60 object-cover rounded"
                                />
                                <h3 className="font-bold mt-2">{product.name}</h3>
                                <p className="text-red-500">{product.price}.VND </p>
                                <p className="text-green-500">{product.status}</p>
                            </div>
                        ))}
                    </div>

                       
                    </div>
                     {/* Pagination Controls */}
                <div className="flex justify-end mt-8 w-full">
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
            
   </>
  )
}

export default ShoesProduct