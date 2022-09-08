import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"

//Styled Component
import { Layout, IconLayout } from "./Select.styled"

//Types

import { BookmarkType } from "types/utils/Bookmark"

//Assets

import Dropdown from "assets/png/dropdown.png"

//Components

import { DropdownMenu } from "components/Menu"

//-------------------------------------------------------------

const Select: React.FC<{ data: BookmarkType[] }> = ({ data }) => {
  const { pathname } = useRouter()
  const [bookmark, setBookmarks] = useState<BookmarkType>({
    pageList: [""],
    bookmarkList: [""],
    path: ""
  })

  const [selected, setSelected] = useState(false)

  const [label, setLabel] = useState("")

  useEffect(() => {
    data.forEach(bookmarkItem => {
      if (bookmarkItem.path === pathname) {
        setBookmarks(bookmarkItem)
        setLabel(bookmarkItem.bookmarkList[0])
      }
    })
  }, [pathname])

  return (
    <Layout
      onClick={() => {
        setSelected(!selected)
      }}
    >
      {label}
      <IconLayout>
        <Image src={Dropdown} layout="fill" alt="No Image"></Image>
      </IconLayout>
      <DropdownMenu data={bookmark} flag={selected}></DropdownMenu>
    </Layout>
  )
}

export default Select
