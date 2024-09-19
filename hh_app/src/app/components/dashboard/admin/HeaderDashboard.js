import Link from 'next/link'
import React from 'react'

const HeaderDashboard = () => {
  return (
    <div>
        <nav className="bg-emerald-400 h-full w-64">  
    <div className="flex flex-col h-full px-2 sm:px-6 lg:px-8">  
        <div className="flex items-center h-16">  
            <div className="flex-shrink-0 text-white">  
                Trang quản trị    
            </div>  
        </div>  
        <div className="flex-1 mt-4">  
            <div className="flex flex-col space-y-2">  
                <Link href="/dashboard/homedb" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">  
                    Trang Chủ  
                </Link>  
                <Link href="/dashboard/productdb" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">  
                    Danh mục sản phẩm  
                </Link>  
                <Link href="/dashboard/userdb" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">  
                    Tài khoản 
                </Link>  
                <Link href="" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">  
                    Liên Hệ  
                </Link>  
            </div>  
        </div>  
    </div>  
</nav>  
 </div>
  )
}

export default HeaderDashboard