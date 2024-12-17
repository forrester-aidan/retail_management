import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa'
import items from './CustomerData'

interface Props {
  // define your props here
}

const CustomerNames: React.FC<Props> = () => {
  const defaultItems = items

  const [search, setSearch] = useState('')
  const [listItems, setListItems] = useState(defaultItems)

  const handleSearch = (value: any) => {
    const filteredItems =
      value === ''
        ? defaultItems
        : listItems.filter((item) =>
            item.firstName.toLowerCase().includes(search.toLowerCase()),
          )
    setListItems(filteredItems)
  }

  return (
    <div className="p-5 h-full min-h-screen border-l-2 border-black ">
      <h1 className="text-2xl font-semibold">Search for Customer</h1>
      <div className="pt-5 pb-5">
        <input
          type="text"
          placeholder="Search By Name"
          className="border-2 border-black rounded"
          onChange={(e) => {
            setSearch(e.target.value)
            handleSearch(e.target.value)
          }}
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

export default CustomerNames
