import React, { useContext, useState } from "react"

// Types
interface LayoutProps {
  children: React.ReactNode
}

type Context = {
  uploadImage: any
  setContextImage: (_value: any) => void
}

//initialContext

const initialContext: Context = {
  uploadImage: "",
  setContextImage: (any): void => {
    throw new Error("setContext function must be overridden")
  }
}

//create context

const ImageContext = React.createContext<Context>(initialContext)

export const useUploadImage = () => {
  return useContext(ImageContext)
}

export const ImageProvider: React.FC<LayoutProps> = ({ children }) => {
  const [uploadImage, setUploadImage] = useState("")

  const setContextImage = (_value: any) => {
    setUploadImage(_value)
  }

  return (
    <ImageContext.Provider value={{ uploadImage, setContextImage }}>
      {children}
    </ImageContext.Provider>
  )
}
