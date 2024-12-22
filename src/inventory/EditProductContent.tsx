import React from 'react'

interface Props {
  currentEditItem: any
}

const ComponentName: React.FC<Props> = ({ currentEditItem }) => {
  return (
    <div>
      <p>Name</p>
      <input
        type="text"
        placeholder={currentEditItem.name}
        className="w-96 border-2 border-black rounded-lg"
        onChange={(e) => {
          currentEditItem.name = e.target.value
        }}
      />
      <p>Amount In Stock</p>
      <input
        type="text"
        placeholder={currentEditItem.amount}
        className="w-96 border-2 border-black rounded-lg"
        onChange={(e) => {
          currentEditItem.amount = e.target.value
        }}
      />
      <p>Price</p>
      <input
        type="text"
        placeholder={currentEditItem.price}
        className="w-96 border-2 border-black rounded-lg"
        onChange={(e) => {
          currentEditItem.price = e.target.value
        }}
      />
      <p>Daily Units Sold</p>
      <input
        type="text"
        placeholder={currentEditItem.dailySold}
        className="w-96 border-2 border-black rounded-lg"
        onChange={(e) => {
          currentEditItem.dailySold = e.target.value
        }}
      />
      <p>Net Units Sold</p>
      <input
        type="text"
        placeholder={currentEditItem.netSold}
        className="w-96 border-2 border-black rounded-lg"
        onChange={(e) => {
          currentEditItem.netSold = e.target.value
        }}
      />
      <p>Last Order Date</p>
      <input
        type="text"
        placeholder={currentEditItem.lastOrderDate}
        className="w-96 border-2 border-black rounded-lg"
        onChange={(e) => {
          currentEditItem.lastOrderDate = e.target.value
        }}
      />
    </div>
  )
}

export default ComponentName
