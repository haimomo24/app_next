'use client';

import { useParams } from 'next/navigation'; // Import hook mới
import { useEffect, useState } from 'react'; // Import đúng từ react

const ProductDetail = () => {
  const { slug } = useParams(); // Lấy 'slug' từ URL params
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (slug) {
      const fetchProduct = async () => {
        try {
          const res = await fetch(`/api/product/${slug}`);
          if (!res.ok) {
            throw new Error('Failed to fetch product details');
          }
          const data = await res.json();
          setProduct(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p>No product found</p>;
  }

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white mt-[30px]">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product.name}
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={product.images || '/default-image.jpg'} // Thêm ảnh mặc định nếu không có URL
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.brand || 'BRAND NAME'} // Kiểm tra tồn tại của brand
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name || 'No product name available'}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    fill={index < product.rating ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="text-gray-600 ml-3">{product.reviews || 0} Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed mt-[20%]">
              {product.description || 'No description available'}
            </p>
            <div className="flex mt-[20%]">
              <span className="title-font font-medium text-2xl text-gray-900">
                {product.price ? `${product.price} VND` : 'Price not available'}
              </span>
              <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                Mua
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
