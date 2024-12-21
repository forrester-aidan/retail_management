import React, { useState } from 'react'
import Nav from '../Nav'
import Sidebar from '../nav/Sidebar'
import InventoryDetails from '../inventory/InventoryDetails'
import InventoryDefault from '../inventory/InventoryDefault'
import InventoryOrders from '../inventory/InventoryOrders'

interface Props {
  // define your props here
}

const Inventory: React.FC<Props> = () => {
  const sideBarItems = ['Product Details', 'Order']
  const [navigatedPage, setNavigatedPage] = useState('Default')

  return (
    <div>
      <Nav />

      <main className="w-auto">
        <div className="flex w-full">
          <Sidebar
            sideBarItems={sideBarItems}
            setNavigatedPage={setNavigatedPage}
          />
          <div className="flex-1 border-l-2 border-black h-full min-h-screen">
            {navigatedPage === 'Default' && <InventoryDefault />}
            {navigatedPage === 'Product Details' && <InventoryDetails />}
            {navigatedPage === 'Order' && <InventoryOrders />}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Inventory
