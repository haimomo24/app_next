import React from 'react'
import HeaderDashboard from '../components/dashboard/admin/HeaderDashboard'


const LayoutDashBoard = ({children}) => {
    return (
        <div>
            <div className="flex">  
    {/* Phần Header bên trái */} 
     
    
        <HeaderDashboard />  
      

    {/* Phần Layout bên phải */}  
    <div className="flex-1 bg-gray-100 h-full p-4">  
        {/* Nội dung của layout */}  
       {children}
        {/* Thêm các phần tử khác vào đây */} 
        
    </div>  
   </div>  
            
           

        </div>
    )
}

export default LayoutDashBoard