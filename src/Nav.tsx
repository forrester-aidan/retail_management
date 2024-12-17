import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  // define your props here
}

const Nav: React.FC<Props> = () => {
  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState<string[]>(['Names', 'Values', 'Hello'])

  const handleCustomers = () => {
    setSidebar(['Names', 'Values', 'Hello'])
    navigate('/customers', { state: { sidebarItems: sidebar } })
  }

  const handleInventory = () => {
    setSidebar(['Names', 'Values', 'Hello'])
    navigate('/inventory', { state: { sidebarItems: sidebar } })
  }

  const handleEmployees = () => {
    setSidebar(['Names', 'Values', 'Hello'])
    navigate('/employees', { state: { sidebarItems: sidebar } })
  }

  const handleLogin = () => {
    setSidebar(['None'])
    navigate('/login', { state: { sidebarItems: sidebar } })
  }

  return (
    <header className="bg-gray-900 text-white">
      <nav className="max-w-screen-xl mx-auto px-4 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1
            className="text-4xl font-bold hover:cursor-pointer"
            onClick={() => navigate('/')}
          >
            Retail Management
          </h1>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-12 ">
          <button className="text-lg hover:underline" onClick={handleCustomers}>
            Customers
          </button>
          <button className="text-lg hover:underline" onClick={handleInventory}>
            Inventory
          </button>
          <button className="text-lg hover:underline" onClick={handleEmployees}>
            Employees
          </button>
          <button className="text-lg hover:underline" onClick={handleLogin}>
            Login
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button>Menu</button>
        </div>
      </nav>
    </header>
  )
}

export default Nav
