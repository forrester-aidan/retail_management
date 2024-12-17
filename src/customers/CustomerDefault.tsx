import React from 'react'
import { FaSearch } from 'react-icons/fa'

interface Props {
  // define your props here
}

const ComponentName: React.FC<Props> = () => {
  return (
    <div className="p-5 h-full min-h-screen border-l-2 border-black ">
      <h1 className="text-2xl font-semibold">Welcome to the Customers Page!</h1>
      <h1 className="text-md font-semibold pt-10">
        Click on a tab to the left to search for customers or view the most
        recent customers that visited the establishment!
      </h1>
    </div>
  )
}

export default ComponentName
