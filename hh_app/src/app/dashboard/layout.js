import React from 'react'
import HeaderDashboard from '../components/dashboard/admin/HeaderDashboard'

const LayoutDashBoard = () => {
    return (
        <div>
            <div className="flex">  
    {/* Phần Header bên trái */} 
     
    <div className="w-64 bg-emerald-400 h-screen">  
        <HeaderDashboard />  
    </div>  

    {/* Phần Layout bên phải */}  
    <div className="flex-1 bg-gray-100 h-screen p-4">  
        {/* Nội dung của layout */}  
       
        {/* Thêm các phần tử khác vào đây */}  
    </div>  
   </div>  
            
           

        </div>
    )
}

export default LayoutDashBoard