"use client";

import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const HomeDashBoard = () => {
   // Dữ liệu cho biểu đồ cột
   const barData = {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
    datasets: [
      {
        label: 'Doanh thu',
        data: [1200, 1900, 3000, 500, 2100, 1500],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Tùy chọn cho biểu đồ cột
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  // Dữ liệu cho biểu đồ hình tròn
  const pieData = {
    labels: ['Doanh thu A', 'Doanh thu B', 'Doanh thu C'],
    datasets: [
      {
        label: 'Doanh thu phân loại',
        data: [300, 50, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Tùy chọn cho biểu đồ hình tròn
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  return (
    <>
      <div className="max-w-[85rem] mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
       

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Biểu đồ cột */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Biểu đồ Doanh thu</h2>
            <Bar data={barData} options={barOptions} />
          </div>

          {/* Biểu đồ hình tròn */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Biểu đồ Phân loại Doanh thu</h2>
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>
      </div>

    </>
  )
}

export default HomeDashBoard