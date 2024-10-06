'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import CartProduct from './CartProduct';
import CartShopping from './CartShopping';
import Comment from './Comment';

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showDetails, setShowDetails] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [orderDate, setOrderDate] = useState('');

  useEffect(() => {
    if (!slug) {
      setError('Không tìm thấy sản phẩm (thiếu slug).');
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/product/${slug}`);

        if (!res.ok) {
          throw new Error(`Không thể tải chi tiết sản phẩm: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        if (!data || Object.keys(data).length === 0) {
          throw new Error('Không tìm thấy sản phẩm.');
        }

        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return <p>Đang tải...</p>;
  }

  if (error) {
    return <p>Lỗi: {error}</p>;
  }

  if (!product) {
    return <p>Không tìm thấy sản phẩm. <a href="/products">Quay lại danh sách sản phẩm</a></p>;
  }

  const handleAddToCart = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    // Xử lý đặt hàng ở đây (gửi thông tin đến server hoặc bất kỳ thao tác nào bạn cần)
    console.log({ address, phone, email, orderDate });
    // Reset form
    setShowCheckout(false);
    setAddress('');
    setPhone('');
    setEmail('');
    setOrderDate('');
  };

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white mt-[30px]">
      <div className={`container px-5 py-24 mx-auto ${showDetails ? 'opacity-50' : ''}`}>
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full flex justify-center">
            <img
              alt={product.name}
              className="h-auto max-h-[600px] w-auto object-contain rounded-lg  "
              src={product.images}
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.brand || 'BRAND NAME'}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              {product.name || 'No product name available'}
              <span className="text-green-500 text-sm ml-2">{product.status}</span>
            </h1>
            <p className="leading-relaxed mb-4">
              {product.description || 'Không có mô tả'}
            </p>
            <div className="flex items-center mb-4">
              <span className="mr-4 text-lg">Số lượng:</span>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                min="1"
                className="border rounded-lg w-16 p-2 text-center"
              />
            </div>
            <div className="flex mt-[20%] mb-4">
              <span className="title-font font-medium text-2xl text-gray-900">
                {product.price} VND
              </span>
            </div>
            <button
              onClick={handleAddToCart}
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
        <div className="bg-gray-100 p-6 mt-[30px]">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-orange-500 border-b-2 border-orange-500 pb-2">Mô tả sản phẩm </h2>
            <div className="mt-4">
              <h3 className="text-lg font-bold">1. Giới thiệu </h3>
              <p className="mt-2 text-gray-700">
                {product.description}
              </p>
              <div className="flex justify-center">
                <img src={product.images} alt="Lining Turbo Charging Marshal" className="mt-4 w-auto h-auto object-contain rounded-lg" />
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold">2. Thông số kỹ thuật </h3>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li> {product.title}  </li>
                <li>Trọng lượng: 75g</li>
              </ul>
            </div>
          </div>
        </div>

     <Comment/>
      </div>

      {/* Phần giỏ hàng */}
      {showDetails && (
        <CartProduct
          product={product}
          quantity={quantity}
          onClose={handleCloseDetails}
          onCheckout={handleCheckout}
        />
      )}

      {/* Form thanh toán */}
      {showCheckout && (
        <CartShopping
          address={address}
          phone={phone}
          email={email}
          orderDate={orderDate}
          setAddress={setAddress}
          setPhone={setPhone}
          setEmail={setEmail}
          setOrderDate={setOrderDate}
          onSubmit={handleSubmitOrder}
        />
      )}
    </section>
  );
};

export default ProductDetail;
