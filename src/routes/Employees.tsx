import React, { useState } from 'react'
import Nav from '../Nav'
import Sidebar from '../nav/Sidebar'
import EmployeeDefault from '../employees/EmployeeDefault'
import EmployeeManage from '../employees/EmployeeManage'
import EmployeeActivity from '../employees/EmployeeActivity'
import EmployeeSchedule from '../employees/EmployeeSchedule'

interface Props {
  // define your props here
}

const Employees: React.FC<Props> = () => {
  const sideBarItems = ['Manage', 'Activity', 'Schedule']
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
            {navigatedPage === 'Default' && <EmployeeDefault />}
            {navigatedPage === 'Manage' && <EmployeeManage />}
            {navigatedPage === 'Activity' && <EmployeeActivity />}
            {navigatedPage === 'Schedule' && <EmployeeSchedule />}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Employees
