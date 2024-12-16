import React, { useState } from 'react'
import Nav from '../Nav'
import Sidebar from '../nav/Sidebar'
import CustomerNames from '../customers/CustomerNames'
import CustomerNewest from '../customers/CustomerNewest'
import CustomerDemographic from '../customers/CustomerDemographic'

interface Props {
  // define your props here
}

const Customers: React.FC<Props> = () => {
  const sideBarItems = ['Search', 'Newest', 'Demographic']
  const [navigatedPage, setNavigatedPage] = useState('')

  console.log(navigatedPage)

  return (
    <div>
      <Nav />

      <main className="w-auto">
        <div className="flex w-full ">
          <Sidebar
            sideBarItems={sideBarItems}
            setNavigatedPage={setNavigatedPage}
          />
          <div className="flex-1">
            {navigatedPage === 'Search' && <CustomerNames />}
            {navigatedPage === 'Newest' && <CustomerNewest />}
            {navigatedPage === 'Demographic' && <CustomerDemographic />}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Customers
