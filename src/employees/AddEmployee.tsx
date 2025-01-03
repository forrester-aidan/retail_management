import { Dialog, DialogPanel } from '@headlessui/react'
import React from 'react'
import AddEmployeeContent from './AddEmployeeContent'

interface Props {
  newEmployee: boolean
  setNewEmployee: any
  setFirstName: any
  setLastName: any
  setAge: any
  setJob: any
  setPermissions: any
  handleAdd: any
}

const ComponentName: React.FC<Props> = ({
  newEmployee,
  setNewEmployee,
  setFirstName,
  setLastName,
  setAge,
  setJob,
  setPermissions,
  handleAdd,
}) => {
  return (
    <>
      <Dialog
        open={newEmployee}
        onClose={() => setNewEmployee(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 border-2 border-red-500">
          <div className="w-3/12"></div>
          <div className="flex flex-col">
            <div className="p-10"></div>
            <DialogPanel className="max-w-xl space-y-4 border-2 border-black bg-white p-12">
              <AddEmployeeContent
                setFirstName={setFirstName}
                setLastName={setLastName}
                setAge={setAge}
                setJob={setJob}
                setPermissions={setPermissions}
              />
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    handleAdd()
                    setNewEmployee(false)
                  }}
                  className="font-semibold"
                >
                  Add
                </button>
                <button onClick={() => setNewEmployee(false)}>Cancel</button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default ComponentName
