import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa'
import items from './CustomerData'
import axios from 'axios'

interface Props {
  // define your props here
}

const CustomerNames: React.FC<Props> = () => {
  const defaultItems = items

  const [search, setSearch] = useState('')
  const [listItems, setListItems] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get('http://localhost:5000/api/customers')
      .then((response) => {
        setListItems(response.data)
      })
      .catch((err) => {
        setError('Error fetching data')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="p-5 h-full min-h-screen border-l-2 border-black ">
      <h1 className="text-2xl font-semibold pb-10">View Recent Customers</h1>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      <ul>
        {listItems.map((customer) => (
          <div className="pb-5">
            <Disclosure
              as="div"
              className="p-6 border-2 border-black rounded-md"
              defaultOpen={false}
            >
              <DisclosureButton className="group flex w-full items-center justify-between">
                <div className="flex w-full">
                  <div className="flex-1 flex gap-2">
                    <div className="font-semibold">Customer ID:</div>
                    <div>{customer['Customer ID']}</div>
                  </div>
                  <div className="flex-1 flex gap-2">
                    <div className="font-semibold">Transaction ID:</div>
                    <div>{customer['Transaction ID']}</div>
                  </div>
                  <div className="flex-1 flex gap-2">
                    <div className="font-semibold">Date: </div>
                    <div>{customer['Date']}</div>
                  </div>
                  <div className="flex-1 flex gap-2">
                    <div className="font-semibold">Total Amount: </div>
                    <div
                      className={
                        customer['Total Amount'] > 200
                          ? 'font-bold text-green-700'
                          : 'font-semibold text-yellow-700'
                      }
                    >
                      {customer['Total Amount']}
                    </div>
                  </div>
                </div>

                <FaChevronDown className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm/5 text-black/50">
                <div className="flex justify-between">
                  <ul>
                    <li>Age: {customer['Age']}</li>
                    <li>Gender: {customer['Gender']}</li>
                  </ul>
                  <ul>
                    <li>Transaction ID: {customer['Transaction ID']}</li>
                    <li>Price / Unit: {customer['Price per Unit']}</li>
                  </ul>
                </div>
              </DisclosurePanel>
            </Disclosure>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default CustomerNames
