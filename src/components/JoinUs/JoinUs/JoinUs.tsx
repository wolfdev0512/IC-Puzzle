import React from "react"
import { useRouter } from "next/router"

// styled component
import { Layout, GoApp } from "./JoinUs.styled"

// component
import Text from "components/Text"

// context
import { useWallet } from "context/WalletContext"

//Notification
import { Store } from "react-notifications-component"

// -----------------------------------------------------------

const JoinUS: React.FC = () => {
  const router = useRouter()

  const { principleId } = useWallet()

  return (
    <Layout data-aos="fade-up">
      <Text
        fColor="white"
        fWeight={800}
        fSize={40}
        tAlign="center"
        responsive={{
          375: { fSize: 36 }
        }}
      >
        Join us right now
      </Text>
      <Text
        fColor="white"
        fWeight={600}
        fSize={19}
        padding="40px 0px 40px 0px "
        tAlign="center"
      >
        Become a creator or find ready-made art to your liking!
      </Text>
      <GoApp
        onClick={() => {
          if (principleId === "") {
            Store.addNotification({
              title: "Warning",
              message: "You have to connect wallet",
              type: "danger",
              insert: "top",
              container: "top-right",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                duration: 5000,
                onScreen: true
              }
            })
          } else {
            router.push("/workingarea")
          }
        }}
      >
        Go to APP
      </GoApp>
    </Layout>
  )
}

export default JoinUS
