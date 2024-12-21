import React, { useState } from 'react'

interface Props {
  setName: any
  setAmount: any
  setPrice: any
  setDailySold: any
  setNetSold: any
  setLastOrderDate: any
}

const ComponentName: React.FC<Props> = ({
  setName,
  setAmount,
  setPrice,
  setDailySold,
  setNetSold,
  setLastOrderDate,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <p>Name</p>
      <input
        type="text"
        placeholder="Insert Name Here"
        className="w-96 border-2 border-black rounded-lg"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Amount In Stock</p>
      <input
        type="text"
        placeholder="Insert Name Here"
        className="w-96 border-2 border-black rounded-lg"
        onChange={(e) => setAmount(e.target.value)}
      />
      <p>Price</p>
      <input
        type="text"
        placeholder="Insert Name Here"
        className="w-96 border-2 border-black rounded-lg"
        onChange={(e) => setPrice(e.target.value)}
      />
      <p>Daily Units Sold</p>
      <input
        type="text"
        placeholder="Insert Name Here"
        className="w-96 border-2 border-black rounded-lg"
        onChange={(e) => setDailySold(e.target.value)}
      />
      <p>Net Units Sold</p>
      <input
        type="text"
        placeholder="Insert Name Here"
        className="w-96 border-2 border-black rounded-lg"
        onChange={(e) => setNetSold(e.target.value)}
      />
      <p>Last Order Date</p>
      <input
        type="text"
        placeholder="Insert Name Here"
        className="w-96 border-2 border-black rounded-lg"
        onChange={(e) => setLastOrderDate(e.target.value)}
      />
    </div>
  )
}

export default ComponentName
