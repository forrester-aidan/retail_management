import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp, FaChevronDown, FaTrash } from 'react-icons/fa'

interface Props {
  employeesList: any
  handlePermissions: (
    firstName: string,
    lastName: string,
    change: string,
  ) => void
}

const EmployeeModals: React.FC<Props> = ({
  employeesList,
  handlePermissions,
}) => {
  return (
    <>
      {employeesList.map((employee: any) => (
        <div className="pb-5">
          <Disclosure
            as="div"
            className="p-6 border-2 border-black rounded-md"
            defaultOpen={false}
          >
            <div className="flex gap-5 items-center">
              <DisclosureButton className="group flex w-full items-center justify-between">
                <div className="flex-1 flex justify-start">
                  {employee.firstName + ' ' + employee.lastName}
                </div>
                <div className="flex-1 flex gap-2">
                  <div>Permissions:</div>
                  <div
                    className={
                      employee.permissions === 'Admin'
                        ? 'text-green-700'
                        : 'text-yellow-700'
                    }
                  >
                    {employee.permissions}
                  </div>
                </div>
                <FaChevronDown className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <div
                className="p-1 hover:cursor-pointer"
                onClick={() => {
                  handlePermissions(
                    employee.firstName,
                    employee.lastName,
                    'Admin',
                  )
                }}
              >
                <FaArrowUp className="text-xl text-green-700 hover:text-green-900" />
              </div>
              <div
                className="p-1 hover:cursor-pointer"
                onClick={() => {
                  handlePermissions(
                    employee.firstName,
                    employee.lastName,
                    'Basic',
                  )
                }}
              >
                <FaArrowDown className="text-xl text-yellow-700 hover:text-yellow-900" />
              </div>
              <FaTrash className="text-xl text-red-300 hover:text-red-900 hover:cursor-pointer" />
            </div>

            <DisclosurePanel className="mt-2 text-sm/5 text-black/50">
              <div className="flex justify-between">
                <ul>
                  <li>Age: {employee.age}</li>
                  <li>Job: {employee.job}</li>
                </ul>
              </div>
            </DisclosurePanel>
          </Disclosure>
        </div>
      ))}
    </>
  )
}

export default EmployeeModals
