'use client'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const BaloProduct = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // State for pagination
    const [searchQuery, setSearchQuery] = useState(''); // State for search query
    const [priceRange, setPriceRange] = useState([300000, 5000000]); // State for price range (0 to 5,000,000 VND)
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const productsPerPage = 6; // Show 6 products per page

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch('/api/product');
                if (!res.ok) {
                    throw new Error(`Error fetching products: ${res.statusText}`);
                }
                const data = await res.json();

                // Filter the products by category "balo"
                const filteredProducts = data.filter(product => product.category === 'balo');
                setProducts(filteredProducts);
            } catch (error) {
                setError(error.message);
                console.error(error.message);
            } finally {
                setIsLoading(false); // Stop loading when fetch is complete
            }
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
        setPriceRange([300000, e.target.value]);
        setCurrentPage(1); // Reset to first page when adjusting price
    };

    // Filter products by search query and price range
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Pagination logic
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

    // If loading, show a loading indicator
    if (isLoading) {
        return <div className="text-center text-orange-500 font-bold">Loading products...</div>;
    }

    // If error occurs, show error message
    if (error) {
        return <div className="text-center text-red-500 font-bold">Error: {error}</div>;
    }

    return (
        <>
        <div className="container mx-auto p-4">
                    <h1 className="text-4xl text-orange-500 font-bold text-center mb-6">Balo Cầu Lông</h1>
                    <div className="flex flex-col md:flex-row">
                        {/* Sidebar */}
                        <div className="md:w-1/3 h-auto mb-4 md:mb-0 border">
                            <div className="h-full p-6 rounded-lg">
                               
                                <img
                                    src="https://static.fbshop.vn/wp-content/uploads/2023/12/bao-yonex.jpg"
                                    alt="Banner"
                                    className="w-full h-[90%] object-cover rounded"
                                />
                                 <Link href="/allproduct">
                            <button type="button" class=" mt-[10%] focus:outline-none text-white  bg-orange-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                                Xem Thêm 
                            </button>
                            </Link>
                            </div>
                        </div>

                        {/* Products */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-4 md:w-2/3">
                            {currentProducts.length > 0 ? (

                                currentProducts.map((product) => (
                                    <Link href="/allproduct">
                                             <div className="border rounded-lg h-full p-4 bg-white shadow-md transition transform hover:scale-105" key={product.id}>
                                        <img
                                            src={product.images}
                                            alt={product.name}
                                            className="w-full h-60 object-cover rounded"
                                        />
                                        <h3 className="font-bold mt-2">{product.name}</h3>
                                        <p className="text-red-500">{product.price} VND</p>
                                        <p className="text-green-500">{product.status}</p>
                                    </div>
                                    </Link>
                                   
                                ))
                            ) : (
                                <p className="text-center text-gray-500 col-span-full">Không có sản phẩm nào.</p>
                            )}
                        </div>
                    </div>

                    {/* Pagination Controls */}
                    {filteredProducts.length > productsPerPage && (
                        <div className="flex justify-end mt-8 w-full">
                            <button
                                className={`bg-gray-200 py-2 px-4 rounded mx-2 ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
                                onClick={prevPage}
                                disabled={currentPage === 1}
                            >
                                <FontAwesomeIcon icon={faCaretLeft} className="text-orange-500 h-5 w-5" />
                            </button>

                            <button
                                className={`bg-gray-200 py-2 px-4 rounded mx-2 ${currentPage === Math.ceil(filteredProducts.length / productsPerPage) ? 'cursor-not-allowed' : ''}`}
                                onClick={nextPage}
                                disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
                            >
                                <FontAwesomeIcon icon={faCaretRight} className="text-orange-500 h-5 w-5" />
                            </button>
                        </div>
                    )}
                </div>
        </>
    )
}

export default BaloProduct;
