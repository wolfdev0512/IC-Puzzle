import React, { useState } from "react"
import Image from "next/image"

//Context
import { useWallet } from "context/WalletContext"

//Assets

import ICImage from "assets/png/IC.png"

//Styled component

import {
  WalletLayout,
  WalletButton,
  ImageContainer,
  Backdiv,
  MobileLayout,
  ItemLayout,
  MobileImageContainer
} from "./WallectConnect.styled"

//Components
import { Menu } from "components/Menu"

import { StoicIdentity } from "ic-stoic-identity"

const WalletConnect: React.FC<{ type: number }> = ({ type }) => {
  const [show, setShow] = useState(false)

  const { principleId, setContextPrincipleID } = useWallet()

  const login = () => {
    if (principleId == "") {
      if (typeof window !== "undefined") {
        StoicIdentity.load().then(async (identity: any) => {
          if (identity !== false) {
          } else {
            identity = await StoicIdentity.connect()
          }
          setContextPrincipleID(identity.getPrincipal().toText())
          StoicIdentity.disconnect()
        })
      }
    }
  }

  const showMenu = () => {
    if (principleId == "") {
      login()
    } else {
      console.log("first")
      setShow(!false)
    }
  }

  const closeMenu = () => {
    setShow(false)
  }

  return (
    <div>
      {type == 1 && typeof window !== "undefined" ? (
        <>
          <WalletLayout>
            <WalletButton flag={principleId} onClick={() => showMenu()}>
              {principleId != "" ? (
                principleId.substr(0, 15) + "..."
              ) : (
                <ImageContainer>
                  <Image src={ICImage} layout="fill" alt="No Image"></Image>
                </ImageContainer>
              )}
            </WalletButton>
            <Backdiv />
            <Menu flag={show} setFlag={closeMenu} />
          </WalletLayout>
        </>
      ) : (
        ""
      )}
      {type == 2 && typeof window !== "undefined" ? (
        <MobileLayout onClick={() => login()}>
          {principleId != "" ? (
            principleId.substr(0, 15) + "..."
          ) : (
            <>
              <MobileImageContainer>
                <Image src={ICImage} layout="fill" alt="No Image"></Image>
              </MobileImageContainer>
              Wallet Connect
            </>
          )}
        </MobileLayout>
      ) : (
        ""
      )}
      {type == 3 && typeof window !== "undefined" ? (
        <ItemLayout onClick={() => login()}>
          {principleId != "" ? principleId.substr(0, 9) + "..." : "Log In"}
        </ItemLayout>
      ) : (
        ""
      )}
    </div>
  )
}

export default WalletConnect
