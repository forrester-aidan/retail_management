import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

interface Props {
  // define your props here
}

const Nav: React.FC<Props> = () => {
  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState<string[]>(['Names', 'Values', 'Hello'])

  const handleCustomers = () => {
    navigate('/customers', { state: { sidebarItems: sidebar } })
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
        <div className="hidden md:flex space-x-20 ">
          <button className="text-lg hover:underline" onClick={handleCustomers}>
            Customers
          </button>
          <button className="text-lg hover:underline">Inventory</button>
          <button className="text-lg hover:underline">Projections</button>
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
