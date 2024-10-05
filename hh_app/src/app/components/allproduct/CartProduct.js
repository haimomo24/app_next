import { XMarkIcon } from '@heroicons/react/24/outline';

const CartProduct = ({ product, quantity, onClose, onCheckout }) => {
  return (
    <>
     <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl w-1/3">
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between">
            <h2 className="text-lg font-medium text-gray-900">Giỏ hàng</h2>
            <div className="ml-3 flex h-7 items-center">
              <button
                type="button"
                onClick={onClose}
                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Đóng panel</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                <li key={product.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      alt={product.name}
                      src={product.images}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <span>{product.name}</span>
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{product.price} VND</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Số lượng {quantity}</p>
                      <div className="flex">
                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Tổng cộng</p>
            <p>{(product.price * quantity).toFixed(2)} VND</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">Chi phí vận chuyển và thuế được tính khi thanh toán.</p>
          <div className="mt-6">
            <button
              onClick={onCheckout}
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Thanh toán
            </button>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              hoặc{' '}
              <button
                type="button"
                onClick={onClose}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Tiếp tục mua sắm
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CartProduct