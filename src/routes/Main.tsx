import React from 'react'
import Nav from '../Nav'

interface Props {}

const Main: React.FC<Props> = () => {
  return (
    <div className="App">
      <Nav />

      <div>
        <h2 className="text-2xl flex justify-center items-center font-semibold pt-5">
          Select a tab to browse management data
        </h2>
      </div>
    </div>
  )
}

export default Main
