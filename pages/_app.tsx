import type { AppProps } from "next/app"
import { useRouter, Router } from "next/router"
import React, { useEffect, useState } from "react"

//Style
import "styles/globals.css"

//Layout
import AppLayout from "layouts/app-layout/app-layout"

//Loading
import { Loading } from "components/Loading"

//Swiper
import "swiper/css/bundle"

//Data
import { NoLayoutData } from "utils/Data/NoLayout"

//AOS
import AOS from "aos"
import "aos/dist/aos.css"

//Context
import { WalletProvider } from "context/WalletContext"
import { ImageProvider } from "context/ImageContext"

//Notification
import { ReactNotifications } from "react-notifications-component"
import "react-notifications-component/dist/theme.css"

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const [showLayout, setShowLayout] = useState(false)
  const [showLoading, setShowLoading] = useState(true)
  let timer: NodeJS.Timeout

  useEffect(() => {
    AOS.init({ duration: 1500 })
  }, [])

  useEffect(() => {
    timer = setTimeout(() => {
      setShowLoading(false)
    }, 4000)
    setShowLayout(false)
    if (NoLayoutData.includes(pathname)) {
      setShowLayout(true)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [pathname])

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setShowLoading(true)
    })
    Router.events.on("routeChangeComplete", () => {
      setShowLoading(true)
    })
    Router.events.on("routeChangeError", () => {
      setShowLoading(false)
    })
  })

  return showLoading ? (
    <Loading />
  ) : showLayout ? (
    <ImageProvider>
      <WalletProvider>
        <ReactNotifications />
        <Component {...pageProps} />
      </WalletProvider>
    </ImageProvider>
  ) : (
    <ImageProvider>
      <WalletProvider>
        <ReactNotifications />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </WalletProvider>
    </ImageProvider>
  )
}

export default MyApp
