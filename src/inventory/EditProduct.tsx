import { Dialog, DialogPanel } from '@headlessui/react'
import React from 'react'
import AddProductContent from './AddProductContent'
import EditProductContent from './EditProductContent'

interface Props {
  editItem: boolean
  setEditItem: any
  currentEditItem: any
  handleEdit: any
  editIndex: any
}

const EditProduct: React.FC<Props> = ({
  editItem,
  setEditItem,
  currentEditItem,
  handleEdit,
  editIndex,
}) => {
  return (
    <>
      <Dialog
        open={editItem}
        onClose={() => setEditItem(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <div className="w-3/12"></div>
          <DialogPanel className="max-w-xl space-y-4 border-2 border-black bg-white p-12">
            <div className="flex gap-4">
              <EditProductContent currentEditItem={currentEditItem} />
              <button
                onClick={() => {
                  setEditItem(false)
                  handleEdit(editIndex)
                }}
                className="font-semibold"
              >
                Update
              </button>
              <button onClick={() => setEditItem(false)}>Cancel</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default EditProduct
