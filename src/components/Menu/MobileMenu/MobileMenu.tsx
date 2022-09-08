import React, { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"

// Framer motion
import { useCycle } from "framer-motion"

//components

import { MenuToggle } from "./MenuToggle"
import Text from "components/Text"

// Assets

// import Logo from "assets/png/MainLogo.png"

//Styled Components

import {
  MotionNav,
  Container,
  Menu,
  ImageContainer,
  Header,
  ItemList,
  MenuItem,
  ButtonGroup,
  CreateButton
} from "./MobileMenu.styled"

//Components

import { Row } from "components/Layout"
import { WalletConnect } from "components/Button"

// Bookmark Data

import { PageBookmarkData } from "utils/Data/Bookmark"

//Type
import { BookmarkType } from "types/utils/Bookmark"

// -----------------------------------------------------------

const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  const router = useRouter()

  const { asPath, pathname } = useRouter()

  const [bookmark, setBookmarks] = useState<BookmarkType>({
    pageList: [""],
    bookmarkList: [""],
    path: ""
  })

  useEffect(() => {
    PageBookmarkData.forEach(bookmarkItem => {
      if (bookmarkItem.path === pathname) {
        setBookmarks(bookmarkItem)
      }
    })
  }, [pathname])

  const setBookmark = (value: string) => {
    if (value == "/Home") {
      router.push("/")
      toggleOpen()
    } else {
      router.push(value)
      toggleOpen()
    }
  }

  const height = bookmark.bookmarkList.length + bookmark.pageList.length
  return (
    <Container>
      <MotionNav initial={false} animate={isOpen ? "open" : "closed"}>
        <MenuToggle toggle={() => toggleOpen()} />
        <Menu open={isOpen} num={height}>
          <Header>
            <Row alignItems="center" gap={10}>
              <ImageContainer
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  router.push("/")
                }}
              >
                <img src={"/image/MainLogo.png"} alt="No Image" />
              </ImageContainer>
              <Text
                fSize={30}
                lHeight={30}
                fWeight={800}
                fColor="#000000"
                responsive={{ 1024: { fSize: 20, fWeight: 700 } }}
              >
                ICPuzzle
              </Text>
            </Row>
          </Header>
          <ItemList>
            {bookmark.bookmarkList.map((item, key) => {
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
            {bookmark.pageList.map((item, key) => {
              return (
                <MenuItem
                  whileHover={{ scale: 1.1 }}
                  key={key}
                  onClick={() => {
                    setBookmark("/" + item.replace(/\s/g, ""))
                  }}
                >
                  {item}
                </MenuItem>
              )
            })}
          </ItemList>
          <ButtonGroup>
            <WalletConnect type={2}></WalletConnect>
            <CreateButton>Create</CreateButton>
          </ButtonGroup>
        </Menu>
      </MotionNav>
    </Container>
  )
}
export default MobileMenu
