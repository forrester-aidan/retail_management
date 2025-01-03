import React, { useState } from 'react'
import Nav from '../Nav'
import Sidebar from '../nav/Sidebar'
import CustomerNames from '../customers/CustomerNames'
import CustomerNewest from '../customers/CustomerNewest'
import CustomerDefault from '../customers/CustomerDefault'

interface Props {
  // define your props here
}

const Customers: React.FC<Props> = () => {
  const sideBarItems = ['View Transactions', 'Newest']
  const [navigatedPage, setNavigatedPage] = useState('Default')

  console.log(navigatedPage)

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
            {navigatedPage === 'View Transactions' && <CustomerNames />}
            {navigatedPage === 'Newest' && <CustomerNewest />}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Customers
