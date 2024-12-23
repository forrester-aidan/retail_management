import { Dialog, DialogPanel } from '@headlessui/react'
import React from 'react'

interface Props {
  setName: any
  setQuantity: any
  setStatus: any
  newOrder: boolean
  setNewOrder: any
  handleAdd: () => void
}

const AddOrder: React.FC<Props> = ({
  setName,
  setQuantity,
  setStatus,
  newOrder,
  setNewOrder,
  handleAdd,
}) => {
  return (
    <>
      <Dialog
        open={newOrder}
        onClose={() => setNewOrder(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <div className="w-3/12"></div>
          <DialogPanel className="max-w-xl space-y-4 border-2 border-black bg-white p-12">
            <div className="flex gap-4">
              <div className="flex flex-col gap-5">
                <p>Name</p>
                <input
                  type="text"
                  placeholder="Insert Name Here"
                  className="w-96 border-2 border-black rounded-lg"
                  onChange={(e) => setName(e.target.value)}
                />
                <p>Amount Ordered</p>
                <input
                  type="text"
                  placeholder="Insert Name Here"
                  className="w-96 border-2 border-black rounded-lg"
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <p>Status</p>
                <input
                  type="text"
                  placeholder="Insert Name Here"
                  className="w-96 border-2 border-black rounded-lg"
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
              <button
                onClick={() => {
                  handleAdd()
                  setNewOrder(false)
                }}
                className="font-semibold"
              >
                Add
              </button>
              <button onClick={() => setNewOrder(false)}>Cancel</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default AddOrder
