'use client'

import { faCaretLeft, faCaretRight, faPenSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const ProductDb = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // State cho phân trang
  const [editingProduct, setEditingProduct] = useState(null); // State cho sản phẩm đang chỉnh sửa
  const productsPerPage = 3; // Hiển thị 3 sản phẩm mỗi trang

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch('/api/product');

      // Kiểm tra nếu phản hồi thành công
      if (!res.ok) {
        console.error('Lỗi khi lấy danh sách sản phẩm:', res.status, res.statusText);
        return;
      }

      const data = await res.json();
      setProducts(data); // Đảm bảo dữ liệu trả về là danh sách sản phẩm
    };

    fetchProduct();
  }, []);

  // Hàm để xóa sản phẩm
  const deleteProduct = async (id) => {
    const confirmed = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
    if (!confirmed) return;

    try {
      const res = await fetch(`/api/product`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }), // Gửi ID sản phẩm cần xóa
      });

      if (res.ok) {
        // Loại bỏ sản phẩm đã xóa khỏi danh sách hiển thị
        setProducts(products.filter(product => product.id !== id));
      } else {
        console.error('Lỗi khi xóa sản phẩm:', res.status, res.statusText);
      }
    } catch (error) {
      console.error('Không thể xóa sản phẩm:', error);
    }
  };

  // Hàm để kích hoạt chế độ sửa sản phẩm
  const editProduct = (product) => {
    setEditingProduct(product);
  };

  // Hàm để xử lý cập nhật sản phẩm
  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/product`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingProduct), // Gửi dữ liệu sản phẩm đã chỉnh sửa
      });

      if (res.ok) {
        // Cập nhật danh sách sản phẩm sau khi chỉnh sửa thành công
        setProducts(products.map(p => p.id === editingProduct.id ? editingProduct : p));
        setEditingProduct(null); // Đóng form chỉnh sửa
      } else {
        console.error('Lỗi khi cập nhật sản phẩm:', res.status, res.statusText);
      }
    } catch (error) {
      console.error('Không thể cập nhật sản phẩm:', error);
    }
  };

  // Phân trang: lấy sản phẩm cho trang hiện tại
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Chuyển sang trang tiếp theo
  const nextPage = () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  // Quay lại trang trước
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

             {/* Hiển thị biểu mẫu sửa sản phẩm nếu có sản phẩm đang được chỉnh sửa */}
             {editingProduct && (
              <form onSubmit={handleEditSubmit} className="mt-6 p-4 border-2 border-gray-200 rounded-lg">
                <h3 className="font-bold text-xl mb-4">Chỉnh sửa sản phẩm</h3>
                <label>Tên sản phẩm:</label>
                <input
                  type="text"
                  value={editingProduct.name}
                  onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  className="border p-2 w-full mb-4"
                />
                <label>Giá sản phẩm:</label>
                <input
                  type="number"
                  value={editingProduct.price}
                  onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                  className="border p-2 w-full mb-4"
                />
                   <label>Mô tả sản phẩm :</label>
                <input
                  type="text"
                  value={editingProduct.description}
                  onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                  className="border p-2 w-full mb-4"
                />
                {/* Thêm các trường tương tự cho mô tả, hình ảnh, v.v. */}
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                  Cập nhật sản phẩm
                </button>
              </form>
            )}

            {/* Hiển thị danh sách sản phẩm */}
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
                    <div className='flex'>
                      {/* Nút xóa */}
                      <button onClick={() => deleteProduct(product.id)} className="text-red-500">
                        <FontAwesomeIcon icon={faTrash} className="text-orange-500 flex justify-center h-5 w-5" />
                      </button>
                      {/* Nút sửa */}
                      <button onClick={() => editProduct(product)} className="text-blue-500 ml-2.5">
                        <FontAwesomeIcon icon={faPenSquare} className="text-blue-500 flex justify-center h-5 w-5" />
                      </button>
                    </div>
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
  )
}

export default ProductDb;
