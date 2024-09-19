import { faArrowAltCircleLeft, faArrowRightArrowLeft, faBrain, faCake, faCreditCard, faReceipt, faThumbsUp, faTruckFast, faVials } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Other = () => {
  return (
   <>
  <div className="flex flex-col md:flex-row justify-center space-x-4 p-4">
  <div className="border border-orange-500 rounded-lg p-4 text-center flex flex-col justify-between  w-full md:w-60">
    <div className="text-orange-500 flex justify-center">
    <FontAwesomeIcon icon={faTruckFast} className="text-orange-500 h-10 w-10" />
    </div>
    <h3 className="font-bold text-orange-500">Vận chuyển TOÀN QUỐC</h3>
    <p>Thanh toán khi nhận hàng</p>
  </div>
  <div className="border border-orange-500 rounded-lg p-4 text-center flex flex-col justify-between  w-full md:w-60">
    <div className="text-orange-500 flex justify-center">
    <FontAwesomeIcon icon={faThumbsUp} className="text-orange-500 h-10 w-10" />
    </div>
    <h3 className="font-bold text-orange-500">Bảo đảm chất lượng</h3>
    <p>Đảm bảo đảm chất lượng.</p>
  </div>
  <div className="border border-orange-500 rounded-lg p-4 text-center flex flex-col justify-between  w-full md:w-60">
    <div className="text-orange-500 flex justify-center">
    <FontAwesomeIcon icon={faCreditCard} className="text-orange-500 h-10 w-10" />
    </div>
    <h3 className="font-bold text-orange-500">Tiến hành THANH TOÁN</h3>
    <p>Với nhiều PHƯƠNG THỨC</p>
  </div>
  <div className="border border-orange-500 rounded-lg p-4 text-center flex flex-col justify-between  w-full md:w-60">
    <div className="text-orange-500 flex justify-center">
    <FontAwesomeIcon icon={faArrowRightArrowLeft} className="text-orange-500 h-10 w-10" />
    </div>
    <h3 className="font-bold text-orange-500">Đổi sản phẩm mới</h3>
    <p>nếu sản phẩm lỗi</p>
  </div>
</div>

   
   </>
  )
}

export default Other