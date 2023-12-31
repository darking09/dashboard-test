'use client'
import { useState, useEffect } from 'react'
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
  Spinner
} from "@nextui-org/react";

const classNames = {
  wrapper: [
    "p-0"
  ],
  thead: [
    "group/thead",
    "[&>tr]:first:shadow-none",
  ],
  th: "font-poppins font-normal items-stretch text-sm text-style p-0",
  td: [
    "font-poppins font-medium items-stretch text-s text-purple_dark p-0 py-1",
  ],
  tr: [
    "hover:shadow-xl rounded-xl",
    "group-hover/thead:shadow-none"
  ]
}

export default function BillingPage() {
  const [list, setList] = useState({
    data: [],
    isLoading: false,
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleTimer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(handleTimer)
  }, [isLoading])

  return (
    <section className="pt-11 px-16 font-poppins font-normal items-stretch">
      <h1 className="pt-3 text-3xl font-bold text-purple_dark">
        Billing
      </h1>
      <div className="grid grid-cols-5 gap-2">
        <div className="pt-14 flex flex-col gap-6 col-span-3 antialiased tracking-tighter">
          <div className="gap-1">
            <h2 className="text-sm font-bold text-purple_dark">Order History</h2>
            <p className="text-sm text-style">Manage billing information and view receipts</p>
          </div>
          <Table
            isCompact
            isHeaderSticky
            selectionMode="single"
            aria-label="Example static collection table"
            classNames={classNames}
            shadow='none'
            bottomContent={
              (
                <div className="flex w-full justify-start">
                  <Button isDisabled={isLoading} variant="flat" className="text-xs text-new_orange font-poppins underline justify-start p-0 tracking-tighter antialiased" onPress={() => setIsLoading(true)}>
                    {isLoading && <Spinner color="white" size="sm" />}
                    Load more
                  </Button>
                </div>
              )
            }
          >
            <TableHeader>
              <TableColumn>Date</TableColumn>
              <TableColumn>Type</TableColumn>
              <TableColumn>Receipt</TableColumn>
            </TableHeader>
            <TableBody
              isLoading={isLoading}
              >
              <TableRow key="1">
                <TableCell>Oct. 21, 2021</TableCell>
                <TableCell>Pro Annual</TableCell>
                <TableCell>
                  <Button className="border-[#CBCBD9] text-purple_dark font-poppins font-medium tracking-tighter antialiased border-1" variant="bordered" size="sm" radius="sm">Download</Button>
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>Aug. 21, 2021</TableCell>
                <TableCell>Pro Portfolio</TableCell>
                <TableCell>
                  <Button className="border-[#CBCBD9] text-purple_dark font-poppins font-medium tracking-tighter antialiased border-1" variant="bordered" size="sm" radius="sm">Download</Button>
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>Jul. 21, 2021</TableCell>
                <TableCell>Sponsored Post</TableCell>
                <TableCell>
                  <Button className="border-[#CBCBD9] text-purple_dark font-poppins font-medium tracking-tighter antialiased border-1" variant="bordered" size="sm" radius="sm">Download</Button>
                </TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>Jun. 21, 2021</TableCell>
                <TableCell>Sponsored Post</TableCell>
                <TableCell>
                  <Button className="border-[#CBCBD9] text-purple_dark font-poppins font-medium tracking-tighter antialiased border-1" variant="bordered" size="sm" radius="sm">Download</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="col-span-2 pt-14 ml-4 justify-self-end">
          <div className="bg-new_orange text-white rounded-xl h-52 w-52">
            <div className="px-6 py-8 flex flex-col gap-5 h-full">
              <h3 className='text-xs antialiased justify-self-start tracking-tighter'>Your plan</h3>
              <div className='justify-self-center'>
                <h2 className='font-bold text-xl'>Pro Annual</h2>
                <span className='text-xs antialiased tracking-tighter'>Renews on  Nov. 2021</span>
              </div>
              <div className='w-full h-full flex'>
                <Button className="border-1 border-white text-white font-poppins font-medium antialiased w-full self-end" variant="bordered" size="sm" radius="sm">
                  Cancel subscription
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
