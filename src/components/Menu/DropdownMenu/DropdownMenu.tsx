import React from "react"
import { useRouter } from "next/router"

// Styled component
import { Layout, MenuItem } from "./DropdownMenu.styled"

//Types
import { BookmarkType } from "types/utils/Bookmark"

// -----------------------------------------------------------

const DropdownMenu: React.FC<{ data: BookmarkType; flag: boolean }> = ({
  data,
  flag
}) => {
  const router = useRouter()

  const setBookmark = (value: string) => {
    if (value == "/Home") {
      router.push("/")
    } else {
      router.push(value)
    }
  }

  return (
    <Layout flag={flag}>
      {data.bookmarkList.map((item, key) => {
        return (
          <MenuItem
            whileHover={{ scale: 1.1 }}
            key={key}
            onClick={() => {
              setBookmark("#" + item.replace(/\s/g, ""))
            }}
          >
            {item}
          </MenuItem>
        )
      })}
      {data.pageList.map((item, key) => {
        return (
          <MenuItem
            whileHover={{ scale: 1.2 }}
            key={key}
            onClick={() => {
              setBookmark("/" + item.replace(/\s/g, ""))
            }}
          >
            {item}
          </MenuItem>
        )
      })}
    </Layout>
  )
}

export default DropdownMenu
