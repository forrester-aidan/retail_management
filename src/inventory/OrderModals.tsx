import { Disclosure } from '@headlessui/react'
import React from 'react'
import { FaCheck, FaTrash } from 'react-icons/fa'

interface Props {
  orders: any
  handleApproval: any
  handleDelete: any
}

const OrderModals: React.FC<Props> = ({
  orders,
  handleApproval,
  handleDelete,
}) => {
  return (
    <>
      {orders.map((order: any) => (
        <div className="pb-5">
          <Disclosure
            as="div"
            className="p-6 border-2 border-black rounded-md"
            defaultOpen={false}
          >
            <div className="flex gap-16 items-center">
              <div className="flex-1">{order.name}</div>
              <div className="w-64">Quantity: {order.quantity}</div>
              <div className="flex gap-2 w-72">
                Status:{' '}
                <p
                  className={
                    order.status === 'Approved!'
                      ? 'text-green-700'
                      : 'text-yellow-500'
                  }
                >
                  {order.status}
                </p>
              </div>
              <div className="p-1 hover:cursor-pointer flex gap-5">
                <div className="p-1">
                  <FaCheck
                    className="text-xl text-green-700 hover:text-green-900"
                    onClick={() => handleApproval(order)}
                  />
                </div>
                <FaTrash
                  className="text-xl text-red-300 hover:text-red-900 hover:cursor-pointer"
                  onClick={() => handleDelete(order)}
                />
              </div>
            </div>
          </Disclosure>
        </div>
      ))}
    </>
  )
}

export default OrderModals
