import React from 'react'

interface Props {
  // define your props here
}

const InventoryDefault: React.FC<Props> = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold">Welcome to the Inventory Page!</h1>
      <h1 className="text-md font-semibold pt-10">
        Click on a tab to the left to search for products in our database,
        create/edit these products, and make orders to ship more products to our
        establishment!
      </h1>
    </div>
  )
}

export default InventoryDefault
