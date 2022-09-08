import React from "react"

// Styled component
import { AppLayoutContainer } from "./app-layout.styled"

// Types
interface LayoutProps {
  children: React.ReactNode
}

// Layouts
import { Header } from "layouts/Header"
import { Footer } from "layouts/Footer"

//Component

import { ScrollTop } from "components/Button"

// -----------------------------------------------------------

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AppLayoutContainer>
      <Header />
      {children}
      <Footer />
      <ScrollTop />
    </AppLayoutContainer>
  )
}

export default AppLayout
