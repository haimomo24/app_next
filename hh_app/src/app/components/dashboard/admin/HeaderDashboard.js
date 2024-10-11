import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBox, faListAlt, faCog } from '@fortawesome/free-solid-svg-icons'

const HeaderDashboard = () => {
  return (
    <div className="bg-white w-[250px] h-screen border-r border-gray-200">
      <nav className="flex flex-col h-full">  
        <div className="flex items-center h-16 px-4 border-b border-gray-300">
          <span className="text-emerald-500 text-lg font-bold">Trang quản trị </span>
        </div>

        <div className="mt-4 flex-1">
          <div className="flex flex-col space-y-1">
            <Link href="/dashboard/homedb">
              <div className="mt-6 flex items-center text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md cursor-pointer">
                <FontAwesomeIcon icon={faHouse} className="text-emerald-500 h-5 w-5 mr-3" />
                <span className="text-sm font-medium">Trang Chủ</span>
              </div>
            </Link>
            <hr className="my-4" />
            <Link href="/dashboard/productdb">
              <div className="mt-6 flex items-center text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md cursor-pointer">
                <FontAwesomeIcon icon={faBox} className="text-emerald-500 h-5 w-5 mr-3" />
                <span className="text-sm font-medium">Danh mục sản phẩm</span>
              </div>
            </Link>
            <hr className="my-4" />
            <Link href="/dashboard/userdb">
              <div className="mt-6 flex items-center text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md cursor-pointer">
                <FontAwesomeIcon icon={faListAlt} className="text-emerald-500 h-5 w-5 mr-3" />
                <span className="text-sm font-medium">Danh sách đơn hàng</span>
              </div>
            </Link>
            <hr className="my-4" />
            <Link href="/">
              <div className="mt-6 flex items-center text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md cursor-pointer">
                <FontAwesomeIcon icon={faCog} className="text-emerald-500 h-5 w-5 mr-3" />
                <span className="text-sm font-medium">Quay lại trang bán hàng  </span>
              </div>
            </Link>
          </div>
        </div>
      </nav>  
    </div>
  )
}

export default HeaderDashboard
