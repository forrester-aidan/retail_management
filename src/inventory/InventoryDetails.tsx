import React, { useEffect, useState } from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'
import stock from './InventoryData'
import InventoryModals from './InventoryModals'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'

interface Props {
  // define your props here
}

const InventoryDetails: React.FC<Props> = () => {
  const [search, setSearch] = useState('')
  const [stockItems, setStockItems] = useState(stock)
  const [newItem, setNewItem] = useState(false)
  const [editItem, setEditItem] = useState(false)
  const [currentEditItem, setCurrentEditItem] = useState({
    name: 'Editing...',
    amount: -1,
    price: -1,
    dailySold: -1,
    netSold: -1,
    lastOrderDate: 'Editing...',
  })
  const [editIndex, setEditIndex] = useState(0)
  const [name, setName] = useState('')
  const [amount, setAmount] = useState(0)
  const [price, setPrice] = useState(0)
  const [dailySold, setDailySold] = useState(0)
  const [netSold, setNetSold] = useState(0)
  const [lastOrderDate, setLastOrderDate] = useState('')

  useEffect(() => {
    const currentStorage = localStorage.getItem('product-details')
    setStockItems(currentStorage ? JSON.parse(currentStorage) : stock)
  }, [stockItems])

  const handleAdd = () => {
    const item = {
      name: name,
      amount: amount,
      price: price,
      dailySold: dailySold,
      netSold: netSold,
      lastOrderDate: lastOrderDate,
    }

    stockItems.push(item)

    const storedItems = localStorage.getItem('product-details')
    let newArray = storedItems ? JSON.parse(storedItems) : []
    newArray.push(item)
    localStorage.setItem('product-details', JSON.stringify(newArray))
  }

  const handleEdit = (editIndex: any) => {
    stockItems[editIndex] = currentEditItem

    const storedItems = localStorage.getItem('product-details')
    let newArray = storedItems ? JSON.parse(storedItems) : []
    newArray = stockItems
    localStorage.setItem('product-details', JSON.stringify(newArray))
  }

  const handleDelete = (item: any) => {
    const removalIndex = stockItems.findIndex(
      (stockItem) => stockItem.name === item.name,
    )

    stockItems.splice(removalIndex, 1)

    const storedItems = localStorage.getItem('product-details')
    let newArray = storedItems ? JSON.parse(storedItems) : []
    newArray = stockItems
    localStorage.setItem('product-details', JSON.stringify(newArray))
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold">Product Details</h1>

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
            onClick={() => setNewItem(true)}
          >
            <FaPlus className="text-2xl" />
          </button>
        </div>
      </div>

      <InventoryModals
        items={stockItems.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        )}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        setCurrentEditItem={setCurrentEditItem}
        setEditItem={setEditItem}
        setEditIndex={setEditIndex}
      />
      <div className="flex items-center justify-center">
        <AddProduct
          newItem={newItem}
          setNewItem={setNewItem}
          stockItems={stockItems}
          setStockItems={setStockItems}
          setName={setName}
          setAmount={setAmount}
          setPrice={setPrice}
          setDailySold={setDailySold}
          setNetSold={setNetSold}
          setLastOrderDate={setLastOrderDate}
          handleAdd={handleAdd}
        />
      </div>
      <div className="flex items-center justify-center">
        <EditProduct
          editItem={editItem}
          setEditItem={setEditItem}
          currentEditItem={currentEditItem}
          editIndex={editIndex}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  )
}

export default InventoryDetails
