import React, { useEffect, useState } from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'
import orders from './OrderData'
import OrderModals from './OrderModals'
import AddOrder from './AddOrder'

interface Props {
  // define your props here
}

const InventoryOrders: React.FC<Props> = () => {
  const [listUpdates, setListUpdates] = useState(false)
  const [orderItems, setOrderItems] = useState(orders)
  const [newOrder, setNewOrder] = useState(false)
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [status, setStatus] = useState('Waiting for Approval')
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (listUpdates) {
      const currentStorage = localStorage.getItem('orders')
      setOrderItems(currentStorage ? JSON.parse(currentStorage) : orders)
      setListUpdates(false)
    }
  }, [listUpdates])

  const handleAdd = () => {
    const order = {
      name: name,
      quantity: quantity,
      status: status,
    }

    orderItems.push(order)

    const storedItems = localStorage.getItem('orders')
    let newArray = storedItems ? JSON.parse(storedItems) : []
    newArray.push(order)
    localStorage.setItem('orders', JSON.stringify(newArray))
    
    setListUpdates(true)
  }

  const handleApproval = (order: any) => {
    const orderIndex = orderItems.findIndex(
      (orderItem) => orderItem.name === order.name,
    )

    orderItems[orderIndex].status = 'Approved!'

    const storedItems = localStorage.getItem('orders')
    let newArray = storedItems ? JSON.parse(storedItems) : []
    newArray = orderItems
    localStorage.setItem('orders', JSON.stringify(newArray))
    setListUpdates(true)
  }

  const handleDelete = (order: any) => {
    const orderIndex = orderItems.findIndex(
      (orderItem) => orderItem.name === order.name,
    )

    orderItems.splice(orderIndex, 1)

    const storedItems = localStorage.getItem('orders')
    let newArray = storedItems ? JSON.parse(storedItems) : []
    newArray = orderItems
    localStorage.setItem('orders', JSON.stringify(newArray))
    setListUpdates(true)
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold">Pending Orders</h1>

      <div className="pt-5 pb-5 flex justify-between items-center">
        <div>
          <input
            type="text"
            placeholder="Search By Name"
            className="border-2 border-black rounded"
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
          <button className="pl-2">
            <FaSearch />
          </button>
        </div>
        <div>
          <button
            className="p-2 rounded-lg border-2 border-black hover:bg-gray-200 hover:text-green-600"
            onClick={() => setNewOrder(true)}
          >
            <FaPlus className="text-2xl" />
          </button>
        </div>
      </div>

      <OrderModals
        orders={orderItems.filter((order) =>
          order.name.toLowerCase().includes(search.toLowerCase()),
        )}
        handleApproval={handleApproval}
        handleDelete={handleDelete}
      />
      {newOrder && (
        <AddOrder
          setName={setName}
          setQuantity={setQuantity}
          setStatus={setStatus}
          newOrder={newOrder}
          setNewOrder={setNewOrder}
          handleAdd={handleAdd}
        />
      )}
    </div>
  )
}

export default InventoryOrders
