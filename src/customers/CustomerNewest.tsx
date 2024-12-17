import React, { useState } from 'react'
import { FaChevronDown, FaSearch } from 'react-icons/fa'
import items from './CustomerData'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

interface Props {
  // define your props here
}

const ComponentName: React.FC<Props> = () => {
  const defaultItems = items

  const [search, setSearch] = useState('')
  const [listItems, setListItems] = useState(
    defaultItems
      .sort((a, b) => {
        const dateA: any = new Date(a.customerSince)
        const dateB: any = new Date(b.customerSince)

        return dateB - dateA
      })
      .slice(0, 3),
  )

  return (
    <div className="p-5 h-full min-h-screen border-l-2 border-black ">
      <h1 className="text-2xl font-semibold">Most Recent Customers!</h1>
      <div className="pt-5 pb-5">
        <input
          type="text"
          placeholder="Search By Name"
          className="border-2 border-black rounded"
        />
        <button className="pl-2">
          <FaSearch />
        </button>
      </div>

      {listItems.map((item) => (
        <div className="pb-5">
          <Disclosure
            as="div"
            className="p-6 border-2 border-black rounded-md"
            defaultOpen={false}
          >
            <DisclosureButton className="group flex w-full items-center justify-between">
              {item.firstName + ' ' + item.lastName}
              <FaChevronDown className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-black/50">
              <div className="flex justify-between">
                <div>Age: {item.age}</div>
                <ul>
                  <li>Customer Since: {item.customerSince}</li>
                  <li>Last Item Purchased: {item.lastPurchase}</li>
                </ul>
              </div>
            </DisclosurePanel>
          </Disclosure>
        </div>
      ))}
    </div>
  )
}

export default ComponentName
