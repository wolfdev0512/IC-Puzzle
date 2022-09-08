import { FC, useState, useEffect } from "react"

interface Props {
  index: number
  show: boolean
  setShow: (show: boolean) => void
  flag: boolean
  active: boolean
  color: any
  handleChangeColor: (color: string) => void
  screenMode: boolean
}

import { AiOutlineUp } from "react-icons/ai"

import {
  Layout,
  IconLayout,
  HexcodeContainer,
  Hexcode,
  ColorSelecter
} from "./ColorPicker.styled"
import { ColorSlider } from "components/ColorSlider"

const ColorPicker: FC<Props> = ({
  index,
  handleChangeColor,
  active,
  flag,
  show,
  setShow,
  screenMode,
  color
}) => {
  useEffect(() => {
    setHexColor("")
  }, [active])

  const [inputColor, setInputColor] = useState(color)
  const [hexColor, setHexColor] = useState("")

  const handleChangeInput = (e: any) => {
    setHexColor(e.target.value)
    handleChangeColor(hexColor)
  }

  useEffect(() => {
    if (active) {
      handleChangeColor(hexColor)
      setInputColor(hexColor)
    }
  }, [hexColor])

  return (
    <Layout flag={show}>
      <IconLayout flag={show} onClick={() => setShow(!show)}>
        <AiOutlineUp size={15} color={flag ? "white" : "black"} />
      </IconLayout>

      {show && (
        <>
          <HexcodeContainer flag={flag}>
            <Hexcode
              disabled={!active}
              flag={flag}
              placeholder={
                color !== 0 ? color : hexColor === "" ? "HexCode" : hexColor
              }
              onChange={(e: any) => handleChangeInput(e)}
            />
          </HexcodeContainer>
          <ColorSelecter
            bgColor="black"
            onClick={() => {
              setHexColor("#000000")
            }}
          />
          <ColorSelecter
            bgColor="white"
            onClick={() => {
              console.log("sdfwe")
              setHexColor("#ffffff")
            }}
          />
          <ColorSlider
            screenMode={screenMode}
            index={index}
            setHexColor={setHexColor}
            active={active}
          />
        </>
      )}
    </Layout>
  )
}

export default ColorPicker
