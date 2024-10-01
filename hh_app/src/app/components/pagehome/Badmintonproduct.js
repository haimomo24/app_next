'use client'

import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Badmintonproduct = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // State for pagination
    const [searchQuery, setSearchQuery] = useState(''); // State for search query
    const [priceRange, setPriceRange] = useState([300000, 5000000]); // State for price range (0 to 10,000,000 VND)
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
            const filteredProducts = data.filter(product => product.category === 'vot');

            setProducts(filteredProducts);
        };

        fetchProduct();
    }, []);

    // Handle search input change
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to first page when searching
    };

    // Handle price range change
    const handlePriceRangeChange = (e) => {
        setPriceRange([0, e.target.value]);
        setCurrentPage(1); // Reset to first page when adjusting price
    };

    // tìm kiếm sản phẩm theo giá  và theo tên  
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Get the products for the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Function to go to the next page
    const nextPage = () => {
        if (currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
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
            <div className="container mx-auto p-4">
                <h1 className="text-4xl text-orange-500 font-bold text-center mb-6">Vợt cầu Lông</h1>
                <div className="flex flex-col md:flex-row">
                    {/* Sidebar */}
                    <div className="md:w-1/3 h-auto mb-4 md:mb-0 border">
                        <div className="h-full p-6 rounded-lg">
                            <p className="mt-2 text-orange-500 ">Tìm kiếm sản phẩm </p>
                            <div className="flex items-center bg-gray-100 p-2 mt-[20px] rounded-full max-md:hidden">

                                <input
                                    type="text"
                                    placeholder="seach"
                                    className="outline-none bg-transparent ml-2 caret-blue-500 placehoder:font-light placehoder:text-gray-600 text-[15px]"
                                    value={searchQuery}
                                    onChange={handleSearch}
                                />
                            </div>
                            {/* Price Range Slider */}
                            <div className="mb-6 mt-[20px]">
                                <label className="block mb-2 text-orange-500  "> Giá (300.000 - 5,000,000 VND):</label>
                                <input
                                    type="range"
                                    min="300000"
                                    max="5000000"
                                    value={priceRange[1]}
                                    className="w-full "
                                    onChange={handlePriceRangeChange}
                                />
                                <p className="text-right text-gray-600">Giá tối đa: {priceRange[1]} VND</p>
                            </div>

                            <div className="flex flex-col md:flex-row"></div>
                            <img src="https://thethao365.com.vn/Data/upload/images/Product/Caulong/vot-cau-long-lining-chuyen-cong1.jpg"
                                alt="Product 2"
                                className=" w-[100%] h-[58%] object-cover rounded"
                            />



                        </div>
                    </div>

                    {/* Products */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-[10px] md:w-2/3">
                        {currentProducts.map((product) => (
                            <Link href="/">
                            <div className="border rounded-lg h-full p-4 bg-white shadow-md transition transform hover:scale-105" key={product.id}>
                                <img src={product.images}
                                    alt={product.name}
                                    className="w-full h-80 object-cover rounded"
                                />
                                <h3 className="font-bold mt-2">{product.name}</h3>
                                <p className="text-red-500">{product.price}.VND </p>
                                <p className="text-green-500">{product.status}</p>
                            </div>
                            </Link>
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

export default Badmintonproduct