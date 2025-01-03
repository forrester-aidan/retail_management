import React, { useEffect, useState } from 'react'
import employees from './EmployeeData'
import { FaPlus, FaSearch } from 'react-icons/fa'
import EmployeeModals from './EmployeeModals'
import AddEmployee from './AddEmployee'

interface Props {
  // define your props here
}

const EmployeeManage: React.FC<Props> = () => {
  const [search, setSearch] = useState('')
  const [listUpdates, setListUpdates] = useState(false)
  const [employeesList, setEmployeesList] = useState(employees)
  const [newEmployee, setNewEmployee] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [job, setJob] = useState('')
  const [permissions, setPermissions] = useState('')

  useEffect(() => {
    if (listUpdates) {
      const currentStorage = localStorage.getItem('employees')
      setEmployeesList(currentStorage ? JSON.parse(currentStorage) : employees)
      setListUpdates(false)
    }
  }, [listUpdates])

  const handleAdd = () => {
    const item = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      job: job,
      permissions: permissions,
    }

    employeesList.push(item)

    const storedItems = localStorage.getItem('employees')
    let newArray = storedItems ? JSON.parse(storedItems) : []
    newArray.push(item)
    localStorage.setItem('employees', JSON.stringify(newArray))
  }

  const handlePermissions = (
    firstName: string,
    lastName: string,
    change: string,
  ) => {
    const permissionIndex = employeesList.findIndex(
      (employee) =>
        employee.firstName === firstName && employee.lastName === lastName,
    )

    employeesList[permissionIndex].permissions = change

    const storedItems = localStorage.getItem('employees')
    let newArray = storedItems ? JSON.parse(storedItems) : []
    newArray = employeesList
    localStorage.setItem('employees', JSON.stringify(newArray))

    setListUpdates(true)
  }

  return (
    <div className="p-5 h-full min-h-screen border-l-2 border-black ">
      <h1 className="text-2xl font-semibold">Search for Customer</h1>
      <div className="pt-5 pb-5 flex justify-between">
        <div>
          <input
            type="text"
            placeholder="Search By Name"
            className="border-2 border-black rounded"
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
          <button className="pl-2">
            <FaSearch />
          </button>
        </div>
        <div>
          <button
            className="p-2 rounded-lg border-2 border-black hover:bg-gray-200 hover:text-green-600"
            onClick={() => setNewEmployee(true)}
          >
            <FaPlus className="text-2xl" />
          </button>
        </div>
      </div>

      <EmployeeModals
        employeesList={employeesList.filter(
          (item) =>
            item.firstName.toLowerCase().includes(search.toLowerCase()) ||
            item.lastName.toLowerCase().includes(search.toLowerCase()),
        )}
        handlePermissions={handlePermissions}
      />
      <div>
        <AddEmployee
          newEmployee={newEmployee}
          setNewEmployee={setNewEmployee}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setAge={setAge}
          setJob={setJob}
          setPermissions={setPermissions}
          handleAdd={handleAdd}
        />
      </div>
    </div>
  )
}

export default EmployeeManage
