import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import React from 'react'
import { FaChevronDown, FaTrash } from 'react-icons/fa'

interface Props {
  items: any
  handleDelete: any
  search: string
}

const ComponentName: React.FC<Props> = ({ items, handleDelete, search }) => {
  return (
    <>
      {items.map((item: any) => (
        <div className="pb-5">
          <Disclosure
            as="div"
            className="p-6 border-2 border-black rounded-md"
            defaultOpen={false}
          >
            <div className="flex gap-5 items-center">
              <DisclosureButton className="group flex w-full items-center justify-between">
                {item.name}
                <FaChevronDown className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <FaTrash
                className="text-xl text-red-300 hover:text-red-900 hover:cursor-pointer"
                onClick={() => {
                  handleDelete(item)
                }}
              />
            </div>

            <DisclosurePanel className="mt-2 text-sm/5 text-black/50">
              <div className="flex justify-between">
                <ul>
                  <li>Price: ${item.price}</li>
                  <li>Daily Sales: {item.dailySold}</li>
                  <li>Net Sold: {item.netSold}</li>
                </ul>
                <ul>
                  <li>Amount in Stock: {item.amount}</li>
                  <li>Last Order Date: {item.lastOrderDate}</li>
                </ul>
              </div>
            </DisclosurePanel>
          </Disclosure>
        </div>
      ))}
    </>
  )
}

export default ComponentName
