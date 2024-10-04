'use client'

import React, { useState } from 'react';

const articles = [
  {
    id: 1,
    title: "Tổng hợp danh sách sân Pickleball",
    description: "Bạn là người thích chơi Pickleball? Bạn đang sinh sống và làm việc ở quận Tân Bình, nhưng không biết ở Tân Bình này có sân Pickleball nào chất lượng gần nhất",
    image: "https://cdn.shopvnb.com/img/400x240/uploads/images/tin_tuc/san-pickleball-hang-khong-phia-nam-5-1720489188.webp"
  },
  {
    id: 2,
    title: "Các sân Pickleball Nghệ An đáng chơi",
    description: "Bạn là người yêu thích và muốn chơi Pickleball? Bạn đang sinh sống và làm việc tại Nghệ An muốn tìm cho mình sân Pickleball Nghệ Anl",
    image: "https://cdn.shopvnb.com/img/400x240/uploads/images/tin_tuc/san-pickleball-handico-5-1721355189.webp"
  },
  {
    id: 3,
    title: "Khám phá sân Pickleball 5.0 Đại lộ Lê Nin",
    description: "Sân Pickleball 5.0 Đại lộ Lê Nin được xây dựng với không gian thoáng đãng, cơ sở vật chất đầy đủ và là một trong những sân chơi Pickleball chất lượng",
    image: "https://cdn.shopvnb.com/img/400x240/uploads/images/san-pickleball-5-0-dai-lo-le-nin-2.jpg"
  },
  {
    id: 4,
    title: "Tổng hợp danh sách sân Pickleball quận 12 uy tín",
    description: "Bạn là một người đam mê Pickleball và đang sinh sống, làm việc tại khu vực quận 12 nhưng chưa tìm được một sân Pickleball tốt, gần nhà để thuận tiện cho việc di chuyển",
    image: "https://cdn.shopvnb.com/img/400x240/uploads/images/bai_viet/san-pickleball-diamond-cat-2-1723075795.webp"
  },
  {
    id: 5,
    title: "Khám phá sân Pickleball 5.0 Đại lộ Lê Nin",
    description: "Sân Pickleball 5.0 Đại lộ Lê Nin được xây dựng với không gian thoáng đãng, cơ sở vật chất đầy đủ và là một trong những sân chơi Pickleball chất lượng",
    image: "https://cdn.shopvnb.com/img/400x240/uploads/images/san-pickleball-5-0-dai-lo-le-nin-2.jpg"
  },
  {
    id: 6,
    title: "Khám phá sân Pickleball 5.0 Đại lộ Lê Nin",
    description: "Sân Pickleball 5.0 Đại lộ Lê Nin được xây dựng với không gian thoáng đãng, cơ sở vật chất đầy đủ và là một trong những sân chơi Pickleball chất lượng",
    image: "https://cdn.shopvnb.com/img/400x240/uploads/images/san-pickleball-5-0-dai-lo-le-nin-2.jpg"
  },
  {
    id: 7,
    title: "Khám phá sân Pickleball 5.0 Đại lộ Lê Nin",
    description: "Sân Pickleball 5.0 Đại lộ Lê Nin được xây dựng với không gian thoáng đãng, cơ sở vật chất đầy đủ và là một trong những sân chơi Pickleball chất lượng",
    image: "https://cdn.shopvnb.com/img/400x240/uploads/images/san-pickleball-5-0-dai-lo-le-nin-2.jpg"
  },
  {
    id: 8,
    title: "Khám phá sân Pickleball 5.0 Đại lộ Lê Nin",
    description: "Sân Pickleball 5.0 Đại lộ Lê Nin được xây dựng với không gian thoáng đãng, cơ sở vật chất đầy đủ và là một trong những sân chơi Pickleball chất lượng",
    image: "https://cdn.shopvnb.com/img/400x240/uploads/images/san-pickleball-5-0-dai-lo-le-nin-2.jpg"
  },
  {
    id: 9,
    title: "Khám phá sân Pickleball 5.0 Đại lộ Lê Nin",
    description: "Sân Pickleball 5.0 Đại lộ Lê Nin được xây dựng với không gian thoáng đãng, cơ sở vật chất đầy đủ và là một trong những sân chơi Pickleball chất lượng",
    image: "https://cdn.shopvnb.com/img/400x240/uploads/images/san-pickleball-5-0-dai-lo-le-nin-2.jpg"
  },
  {
    id: 10,
    title: "Khám phá sân Pickleball 5.0 Đại lộ Lê Nin",
    description: "Sân Pickleball 5.0 Đại lộ Lê Nin được xây dựng với không gian thoáng đãng, cơ sở vật chất đầy đủ và là một trong những sân chơi Pickleball chất lượng",
    image: "https://cdn.shopvnb.com/img/400x240/uploads/images/san-pickleball-5-0-dai-lo-le-nin-2.jpg"
  },
  {
    id: 11,
    title: "Khám phá sân Pickleball 5.0 Đại lộ Lê Nin",
    description: "Sân Pickleball 5.0 Đại lộ Lê Nin được xây dựng với không gian thoáng đãng, cơ sở vật chất đầy đủ và là một trong những sân chơi Pickleball chất lượng",
    image: "https://cdn.shopvnb.com/img/400x240/uploads/images/san-pickleball-5-0-dai-lo-le-nin-2.jpg"
  },
];

const NewPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Tính toán bài viết để hiển thị
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Xử lý chuyển trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <>
      <h1 className="text-4xl text-orange-500 font-bold text-center mt-[20px] mb-6">Tin tức</h1>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
          {currentArticles.map((article) => (
            <a
              key={article.id}
              className="group block rounded-xl overflow-hidden focus:outline-none"
              href="#"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                  <img
                    className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                    src={article.image}
                    alt="Blog Image"
                  />
                </div>
                <div className="grow">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-neutral-400">
                    {article.description}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                    Read more
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        {/* End Grid */}

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewPage;
