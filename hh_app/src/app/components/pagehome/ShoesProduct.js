import React from 'react'

const ShoesProduct = () => {
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
                        {/* Product Card 1 */}
                        <div className="border rounded-lg  p-4 bg-white shadow-md transition transform hover:scale-105">
                            <img src="https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-lining-yat003-3-chinh-hang_1713836711.webp"
                                alt="Product 1"
                                className="w-full h-40 object-cover rounded"
                            />
                            <h3 className="font-bold mt-2">Giày Cầu Lông Yonex Aerus Z Women 2024</h3>
                            <p className="text-red-500">2.599.000đ <span className="line-through text-gray-500">2.800.000đ</span></p>
                            <p className="text-green-500">Còn hàng</p>
                        </div>

                        {/* Product Card 2 */}
                        <div className="border rounded-lg p-4 bg-white shadow-md transition transform hover:scale-105">
                            <img src="https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-yonex-nanoflare-700-game-silver-sky-blue-chinh-hang_1725409054.webp" 
                            alt="Product 2" 
                            className="w-full h-40 object-cover rounded"
                             />
                            <h3 className="font-bold mt-2">Vợt Yonex Nanoflare 700 Game</h3>
                            <p className="text-red-500">2.599.000đ <span className="line-through text-gray-500">2.800.000đ</span></p>
                            <p className="text-green-500">Còn hàng</p>
                        </div>

                        {/* Thêm các sản phẩm khác tương tự */}
                        {/* Product Card 3 */}
                        <div className="border rounded-lg p-4 bg-white shadow-md transition transform hover:scale-105">
                            <img src="https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victor-ryuga-metallic-china-open-2024-noi-dia-trung_1726449913.webp" 
                            alt="Product 3" 
                            className="w-full h-40 object-cover rounded" 
                            />
                            <h3 className="font-bold mt-2">Vợt Victor Brave Sword 12</h3>
                            <p className="text-green-500">Còn hàng</p>
                        </div>

                        {/* Product Card 4 */}
                        <div className="border rounded-lg p-4 bg-white shadow-md transition transform hover:scale-105">
                            <img src="https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victor-ryuga-metallic-china-open-2024-noi-dia-trung_1726449913.webp" 
                            alt="Product 4" 
                            className="w-full h-40 object-cover rounded" 
                            />
                            <h3 className="font-bold mt-2">Vợt Victor Brave Sword 12</h3>
                            <p className="text-green-500">Còn hàng</p>
                        </div>
                        {/* Product Card 2 */}
                        <div className="border rounded-lg p-4 bg-white shadow-md transition transform hover:scale-105">
                            <img src="https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-yonex-nanoflare-700-game-silver-sky-blue-chinh-hang_1725409054.webp" 
                            alt="Product 2" 
                            className="w-full h-40 object-cover rounded"
                             />
                            <h3 className="font-bold mt-2">Vợt Yonex Nanoflare 700 Game</h3>
                            <p className="text-red-500">2.599.000đ <span className="line-through text-gray-500">2.800.000đ</span></p>
                            <p className="text-green-500">Còn hàng</p>
                        </div>
                        {/* Product Card 2 */}
                        <div className="border rounded-lg p-4 bg-white shadow-md transition transform hover:scale-105">
                            <img src="https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-yonex-nanoflare-700-game-silver-sky-blue-chinh-hang_1725409054.webp" 
                            alt="Product 2" 
                            className="w-full h-40 object-cover rounded"
                             />
                            <h3 className="font-bold mt-2">Vợt Yonex Nanoflare 700 Game</h3>
                            <p className="text-red-500">2.599.000đ <span className="line-through text-gray-500">2.800.000đ</span></p>
                            <p className="text-green-500">Còn hàng</p>
                        </div>
                    </div>
                </div>
            </div>
   </>
  )
}

export default ShoesProduct