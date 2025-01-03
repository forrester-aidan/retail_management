import React from 'react'

interface Props {
  // define your props here
}

const EmployeeDefault: React.FC<Props> = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold">Welcome to the Employee Page!</h1>
      <h1 className="text-md font-semibold pt-10">
        Click on a tab to the left to manage the state of employees, view their
        recent activity, and update the employee schedule to see who works when!
      </h1>
    </div>
  )
}

export default EmployeeDefault
