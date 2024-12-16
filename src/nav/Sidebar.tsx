import React from 'react'

interface Props {
  sideBarItems: string[]
  setNavigatedPage: any
}

const Sidebar: React.FC<Props> = ({ sideBarItems, setNavigatedPage }) => {
  return (
    <div className="h-screen border-r-2 border-black flex flex-col pt-10 w-3/12">
      {sideBarItems.map((item) => (
        <div className="flex-1 flex justify-center">
          <p
            className="text-2xl hover:underline hover:cursor-pointer"
            onClick={() => setNavigatedPage(item)}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Sidebar
