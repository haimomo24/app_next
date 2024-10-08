'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // Import Link từ next/link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faPlus, faTrash, faPenSquare, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'; // Import icon cần thiết

const UserDbPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingProduct, setEditingProduct] = useState(null); // State cho sản phẩm đang sửa
  const productsPerPage = 3; // Số sản phẩm hiển thị mỗi trang

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/cart');  // Đường dẫn đến API vừa tạo

        if (!response.ok) {
          throw new Error(`Lỗi: ${response.statusText}`);
        }

        const data = await response.json();
        setProducts(data);  // Lưu danh sách sản phẩm vào state
      } catch (err) {
        setError(err.message);  // Lưu lỗi vào state nếu có
      } finally {
        setLoading(false);  // Đặt loading thành false sau khi hoàn tất
      }
    };

    fetchProducts();
  }, []);  // Chạy effect khi component mount

  const deleteProduct = async (productId) => {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
      try {
        const response = await fetch('/api/cart', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: productId }),  // Gửi ID sản phẩm cần xóa
        });

        if (!response.ok) {
          throw new Error('Không thể xóa sản phẩm');
        }

        // Cập nhật lại danh sách sản phẩm sau khi xóa
        setProducts(products.filter(product => product.id !== productId));
        alert('Sản phẩm đã được xóa thành công');
      } catch (error) {
        console.error('Lỗi khi xóa sản phẩm:', error);
        alert(error.message);
      }
    }
  };

  const currentProducts = products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  const nextPage = () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product); // Đặt sản phẩm đang sửa
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/cart', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingProduct), // Gửi thông tin sản phẩm sửa
      });

      if (!response.ok) {
        throw new Error('Không thể cập nhật sản phẩm');
      }

      // Cập nhật danh sách sản phẩm sau khi sửa
      setProducts(products.map((product) =>
        product.id === editingProduct.id ? editingProduct : product
      ));

      alert('Sản phẩm đã được cập nhật thành công');
      setEditingProduct(null);  // Đặt lại editingProduct để ẩn form
    } catch (error) {
      console.error('Lỗi khi cập nhật sản phẩm:', error);
      alert(error.message);
    }
  };

  if (loading) {
    return <div>Đang tải sản phẩm...</div>;  // Hiển thị khi đang tải
  }

  if (error) {
    return <div>Lỗi: {error}</div>;  // Hiển thị nếu có lỗi
  }

  return (
    <>
      <div className='mt-[-50px] ml-[100px]'>
        <section className="py-24 relative">
          <div className="w-full max-w-7xl">
            <div className='flex justify-between items-center'>
              <h2 className="title font-manrope font-bold text-2xl leading-10 mb-8 text-black">
                Quản lý đơn hàng
              </h2>
              
            </div>

            {/* Hiển thị sản phẩm */}
            {/* Hiển thị sản phẩm */}
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
                    {/* Nút sửa và xóa sản phẩm */}
                    <div className="flex space-x-2"> {/* Thêm class để tạo khoảng cách giữa hai nút */}
                      <button onClick={() => deleteProduct(product.id)} className="text-red-500">
                        <FontAwesomeIcon icon={faTrash} className="text-orange-500 flex justify-center h-5 w-5" />
                      </button>
                      <button onClick={() => handleEditProduct(product)} className="text-blue-500">
                        <FontAwesomeIcon icon={faPenSquare} className="text-orange-500 flex justify-center h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="font-normal text-base leading-7 text-gray-500 mb-2">
                    <strong>Địa chỉ:</strong> {product.diachi} {/* Hiển thị địa chỉ */}
                  </p>
                  <p className="font-normal text-base leading-7 text-gray-500 mb-6">
                    <strong>Số điện thoại:</strong> {product.sodienthoai} {/* Hiển thị số điện thoại */}
                  </p>
                  <p className="font-normal text-base leading-7 text-gray-500 mb-6">
                   Số lượng {product.soluong}
                  </p>
                  <div className="flex justify-between items-center">
                    <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">
                      {product.price} VND
                    </h6>
                  </div>
                </div>
              </div>
            ))}

            {/* Form sửa sản phẩm */}
            {editingProduct && (
              <form onSubmit={handleUpdateProduct} className="mb-8">
                <h3 className="font-manrope font-bold text-xl leading-8 mb-4">Sửa sản phẩm</h3>
                <input
                  type="text"
                  value={editingProduct.name}
                  onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  placeholder="Tên sản phẩm"
                  className="border p-2 mb-2 w-full"
                  required
                />
                <input
                  type="number"
                  value={editingProduct.price}
                  onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                  placeholder="Giá"
                  className="border p-2 mb-2 w-full"
                  required
                />
                <input
                  type="text"
                  value={editingProduct.images}
                  onChange={(e) => setEditingProduct({ ...editingProduct, images: e.target.value })}
                  placeholder="Hình ảnh URL"
                  className="border p-2 mb-2 w-full"
                  required
                />
                
                <input
                  type="text"
                  value={editingProduct.diachi}
                  onChange={(e) => setEditingProduct({ ...editingProduct, diachi: e.target.value })}
                  placeholder="Địa chỉ"
                  className="border p-2 mb-2 w-full"
                  required
                />
                <input
                  type="text"
                  value={editingProduct.sodienthoai}
                  onChange={(e) => setEditingProduct({ ...editingProduct, sodienthoai: e.target.value })}
                  placeholder="Số điện thoại"
                  className="border p-2 mb-2 w-full"
                  required
                />
                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
                  Cập nhật sản phẩm
                </button>
                <button type="button" onClick={() => setEditingProduct(null)} className="bg-gray-300 text-black py-2 px-4 rounded ml-2">
                  Hủy
                </button>
              </form>
            )}

            {/* Điều khiển phân trang */}
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
  );
}

export default UserDbPage;
