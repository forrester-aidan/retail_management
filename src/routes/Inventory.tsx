import React, { useState } from 'react'
import Nav from '../Nav'
import Sidebar from '../nav/Sidebar'
import CustomerDefault from '../customers/CustomerDefault'
import CustomerNames from '../customers/CustomerNames'
import CustomerNewest from '../customers/CustomerNewest'

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
          <div className="flex-1">
            {navigatedPage === 'Default' && <CustomerDefault />}
            {navigatedPage === 'Product Details' && <CustomerNames />}
            {navigatedPage === 'Order' && <CustomerNewest />}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Inventory
