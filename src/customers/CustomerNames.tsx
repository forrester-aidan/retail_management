import React from 'react'
import { FaSearch } from 'react-icons/fa'

interface Props {
  // define your props here
}

const ComponentName: React.FC<Props> = () => {
  return (
    <div className="flex items-center p-5">
      <input
        type="text"
        placeholder="Search By Name"
        className="border-2 border-black rounded"
      />
      <button className="pl-2">
        <FaSearch />
      </button>
    </div>
  )
}

export default ComponentName
