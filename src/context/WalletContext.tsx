import React, { useContext, useState, useEffect } from "react"

// Types
interface LayoutProps {
  children: React.ReactNode
}

type Context = {
  principleId: string
  setContextPrincipleID: (_value: string) => void
}

//initialContext

const initialContext: Context = {
  principleId: "",
  setContextPrincipleID: (string): void => {
    throw new Error("setContext function must be overridden")
  }
}

//create context

const WalletContext = React.createContext<Context>(initialContext)

export const useWallet = () => {
  return useContext(WalletContext)
}

export const WalletProvider: React.FC<LayoutProps> = ({ children }) => {
  const [principleId, setPrincipleId] = useState("")

  useEffect(() => {
    setPrincipleId(localStorage.getItem("principleId") || "")
  }, [])

  const setContextPrincipleID = (_value: string) => {
    localStorage.setItem("principleId", _value)
    setPrincipleId(_value)
  }

  return (
    <WalletContext.Provider value={{ principleId, setContextPrincipleID }}>
      {children}
    </WalletContext.Provider>
  )
}
