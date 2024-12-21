import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import React from 'react'
import AddProductContent from './AddProductContent'

interface Props {
  newItem: boolean
  setNewItem: React.Dispatch<React.SetStateAction<boolean>>
  stockItems: any
  setStockItems: any
  setName: any
  setAmount: any
  setPrice: any
  setDailySold: any
  setNetSold: any
  setLastOrderDate: any
  handleAdd: any
}

const ComponentName: React.FC<Props> = ({
  newItem,
  setNewItem,
  stockItems,
  setStockItems,
  setName,
  setAmount,
  setPrice,
  setDailySold,
  setNetSold,
  setLastOrderDate,
  handleAdd,
}) => {
  return (
    <>
      <Dialog
        open={newItem}
        onClose={() => setNewItem(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <div className="w-3/12"></div>
          <DialogPanel className="max-w-xl space-y-4 border-2 border-black bg-white p-12">
            <AddProductContent
              setName={setName}
              setAmount={setAmount}
              setPrice={setPrice}
              setDailySold={setDailySold}
              setNetSold={setNetSold}
              setLastOrderDate={setLastOrderDate}
            />
            <div className="flex gap-4">
              <button
                onClick={() => {
                  handleAdd()
                  setNewItem(false)
                }}
                className="font-semibold"
              >
                Add
              </button>
              <button onClick={() => setNewItem(false)}>Cancel</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default ComponentName
