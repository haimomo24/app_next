'use client'

import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const All_Product = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [priceRange, setPriceRange] = useState([300000, 5000000]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const productsPerPage = 9;

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch('/api/product');

            if (!res.ok) {
                console.error('Error fetching products:', res.status, res.statusText);
                return;
            }

            const data = await res.json();
            setProducts(data);
        };

        fetchProduct();
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handlePriceRangeChange = (e) => {
        setPriceRange([0, e.target.value]);
        setCurrentPage(1);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategories(prevSelected => {
            if (prevSelected.includes(category)) {
                return prevSelected.filter(item => item !== category);
            } else {
                return [...prevSelected, category];
            }
        });
        setCurrentPage(1);
    };

    const categoryMappings = {
        'vot': 'Vợt cầu lông',
        'giay': 'Giày cầu lông',
        'balo': 'Balo cầu lông',
        'quanao': 'Quần áo cầu lông',
        'cuoc': 'Cước đan cầu lông',
        'phukien': 'Phụ kiện cầu lông'
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        product.price >= priceRange[0] && product.price <= priceRange[1] &&
        (selectedCategories.length === 0 || selectedCategories.includes(product.category))
    );

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage); // Tổng số trang
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="container mx-auto p-4">
               
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 h-auto mb-4 md:mb-0 ">
                        <div className="h-full p-6 rounded-lg">
                            <p className="mt-[20%] text-orange-500">Tìm kiếm sản phẩm</p>
                            <div className="flex items-center bg-gray-100 p-2 mt-[20px] rounded-full max-md:hidden">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm..."
                                    className="outline-none bg-transparent ml-2 caret-blue-500 placehoder:font-light placehoder:text-gray-600 text-[15px]"
                                    value={searchQuery}
                                    onChange={handleSearch}
                                />
                            </div>
                            <hr className="my-4" />
                            <div className="mb-6 mt-[20%]">
                                <label className="block mb-2 text-orange-500">Giá (300.000 - 5,000,000 VND):</label>
                                <input
                                    type="range"
                                    min="300000"
                                    max="5000000"
                                    value={priceRange[1]}
                                    className="w-full"
                                    onChange={handlePriceRangeChange}
                                />
                                <p className="text-right text-gray-600">Giá tối đa: {priceRange[1]} VND</p>
                            </div>

                            <hr className="my-4" />
                            <div className="p-4 bg-white rounded-lg mt-[20%]">
                                <h2 className="text-xl font-bold text-orange-500">Danh mục sản phẩm</h2>
                                <div className="mt-2">
                                    {Object.keys(categoryMappings).map(category => (
                                        <label className="flex items-center" key={category}>
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-5 w-5 text-orange-500"
                                                onChange={() => handleCategoryChange(category)}
                                                checked={selectedCategories.includes(category)}
                                            />
                                            <span className="ml-2">{categoryMappings[category]}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-[10px] md:w-2/3">
                        {currentProducts.map((product) => (
                            <Link href={`/allproduct/productslisting/${product.id}`} key={product.id}>
                                <div className="border rounded-lg h-full p-4 bg-white shadow-md transition transform hover:scale-105">
                                    <img src={product.images}
                                        alt={product.name}
                                        className="w-full h-80 object-cover rounded"
                                    />
                                    <h3 className="font-bold mt-2">{product.name}</h3>
                                    <p className="text-red-500">{product.price}.VND</p>
                                    <p className="text-green-500">{product.status}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center items-center mt-8 w-full">
                    <button
                        className={`bg-gray-200 py-2 px-4 rounded mx-2 ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
                        onClick={prevPage}
                        disabled={currentPage === 1}
                    >
                        <FontAwesomeIcon icon={faCaretLeft} className="text-orange-500 flex justify-center h-5 w-5" />
                    </button>

                    {/* Hiển thị số trang */}
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`bg-gray-200 py-2 px-4 rounded mx-1 ${currentPage === index + 1 ? 'bg-orange-500 text-white' : ''}`}
                            onClick={() => goToPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        className={`bg-gray-200 py-2 px-4 rounded mx-2 ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                    >
                        <FontAwesomeIcon icon={faCaretRight} className="text-orange-500 flex justify-center h-5 w-5" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default All_Product;
