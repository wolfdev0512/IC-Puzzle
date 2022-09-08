import { ColorInput, Layout } from "./ColorSlider.styled"
import rgbHex from "rgb-hex"
import { useEffect, useRef, useState } from "react"

let list = [
  [
    { offset: 0, color: "#ffbe82" },
    { offset: 0.5, color: "#f60" },
    { offset: 1, color: "#a33f00" }
  ],

  [
    { offset: 0, color: "#fff8cc" },
    { offset: 0.5, color: "#ffea00" },
    { offset: 1, color: "#a39b00" }
  ],

  [
    { offset: 0, color: "#ebffcc" },
    { offset: 0.5, color: "#59ff00" },
    { offset: 1, color: "#1b6100" }
  ],

  [
    { offset: 0, color: "#bae9ff" },
    { offset: 0.5, color: "#16ccfa" },
    { offset: 1, color: "#000" }
  ],

  [
    { offset: 0, color: "#ffe380" },
    { offset: 0.5, color: "#bf830b" },
    { offset: 1, color: "#ed5a58" }
  ],

  [
    { offset: 0, color: "#beeef1" },
    { offset: 1, color: "#c3bff2" }
  ],

  [
    { offset: 0, color: "#beeef1" },
    { offset: 0.27, color: "#4f81fa" },
    { offset: 0.3, color: "#488afa" },
    { offset: 0.38, color: "#3e97fa" },
    { offset: 0.45, color: "#3a9cfa" },
    { offset: 0.64, color: "#25b7fa" },
    { offset: 1, color: "#dc56c6" }
  ],

  [
    { offset: 0, color: "#6466fa" },
    { offset: 0.02, color: "#6589f8" },
    { offset: 0.03, color: "#66a4f6" },
    { offset: 0.05, color: "#67baf5" },
    { offset: 0.07, color: "#67cbf4" },
    { offset: 0.09, color: "#68d6f4" },
    { offset: 0.13, color: "#68ddf3" },
    { offset: 0.23, color: "#68dff3" },
    { offset: 0.28, color: "#8ed4f6" },
    { offset: 0.33, color: "#b4c8f9" },
    { offset: 0.39, color: "#d2bffb" },
    { offset: 0.44, color: "#e8b9fd" },
    { offset: 0.5, color: "#f5b5fe" },
    { offset: 0.55, color: "#f9b4fe" },
    { offset: 0.6, color: "#f9b0d7" },
    { offset: 0.69, color: "#fba89c" },
    { offset: 0.7, color: "#fba793" },
    { offset: 0.72, color: "#fba689" },
    { offset: 0.73, color: "#fba580" },
    { offset: 0.75, color: "#fba476" },
    { offset: 0.78, color: "#fba162" },
    { offset: 0.8, color: "#fa9a68" },
    { offset: 0.82, color: "#f8936e" },
    { offset: 0.84, color: "#f89170" },
    { offset: 0.86, color: "#f5807e" },
    { offset: 1, color: "#ef5f9a" }
  ],
  [
    { offset: 0, color: "#6466fa" },
    { offset: 0.01, color: "#646efa" },
    { offset: 0.06, color: "#6697f7" },
    { offset: 0.1, color: "#67b6f5" },
    { offset: 0.15, color: "#67cdf4" },
    { offset: 0.19, color: "#68daf3" },
    { offset: 0.23, color: "#68dff3" },
    { offset: 0.28, color: "#8ed4f6" },
    { offset: 0.33, color: "#b4c8f9" },
    { offset: 0.39, color: "#d2bffb" },
    { offset: 0.44, color: "#e8b9fd" },
    { offset: 0.5, color: "#f5b5fe" },
    { offset: 0.55, color: "#f9b4fe" },
    { offset: 1, color: "#796dff" }
  ],

  [
    { offset: 0, color: "#eeb8dc" },
    { offset: 0.02, color: "#efbedf" },
    { offset: 0.15, color: "#f7e1ef" },
    { offset: 0.25, color: "#fbf6f9" },
    { offset: 0.32, color: "#fdfefd" },
    { offset: 0.4, color: "#aef0f7" },
    { offset: 0.47, color: "#6ae3f2" },
    { offset: 0.52, color: "#40dcef" },
    { offset: 0.55, color: "#30d9ee" },
    { offset: 0.6, color: "#5ed5ee" },
    { offset: 0.67, color: "#8bd1ed" },
    { offset: 0.74, color: "#b0cded" },
    { offset: 0.81, color: "#cdcaec" },
    { offset: 0.87, color: "#e1c9ec" },
    { offset: 0.94, color: "#eec7ec" },
    { offset: 1, color: "#f2c7ec" }
  ],
  [
    { offset: 0, color: "#9caaff" },
    { offset: 0.5, color: "#002aff" },
    { offset: 1, color: "#00081f" }
  ],
  [
    { offset: 0, color: "#ffaded" },
    { offset: 0.36, color: "#ff00c8" },
    { offset: 0.43, color: "#fa00c4" },
    { offset: 0.52, color: "#ed01ba" },
    { offset: 0.6, color: "#d603a9" },
    { offset: 0.69, color: "#b70490" },
    { offset: 0.78, color: "#8e0771" },
    { offset: 0.87, color: "#5d0a4b" },
    { offset: 0.97, color: "#240e1e" },
    { offset: 1, color: "#0d0f0d" }
  ],
  [
    { offset: 0, color: "#ffe8e8" },
    { offset: 0, color: "#ffe6e6" },
    { offset: 0.08, color: "#ffa2a1" },
    { offset: 0.15, color: "#ff6a68" },
    { offset: 0.21, color: "#ff3e3b" },
    { offset: 0.27, color: "#ff1e1b" },
    { offset: 0.31, color: "#ff0b07" },
    { offset: 0.35, color: "#ff0400" },
    { offset: 1, color: "#000" }
  ]
]

const ColorSlider: React.FC<{
  index: number
  setHexColor: (hex: string) => void
  active: boolean
  screenMode: boolean
}> = ({ index, setHexColor, active, screenMode }) => {
  var hexToRgb = require("hex-to-rgb")
  const [sliderWidth, setSliderWidth] = useState(0)
  useEffect(() => {
    if (!screenMode) {
      setSliderWidth(450)
    } else {
      setSliderWidth(window.innerWidth - 650)
    }
  }, [screenMode])

  const getColor = (value: number) => {
    let colorRange: any[] = []
    for (let i: number = 0; i < list[index].length; i++) {
      if (list[index][i].offset * 100 >= value) {
        colorRange = [list[index][i - 1], list[index][i]]
        break
      }
    }

    let firstColor: string = colorRange[0].color
    let secondColor: string = colorRange[1].color
    let firstColor_x: number = sliderWidth * colorRange[0].offset
    let secondColor_x: number =
      sliderWidth * colorRange[1].offset - firstColor_x
    let slider_x: number = sliderWidth * (value / 100) - firstColor_x
    let ratio: number = slider_x / secondColor_x

    let result: number[] = pickHex(
      hexToRgb(secondColor),
      hexToRgb(firstColor),
      ratio
    )
    setHexColor("#" + rgbHex(result[0], result[1], result[2]).toString())
  }

  const pickHex = (color1: number[], color2: number[], weight: number) => {
    var p = weight
    var w = p * 2 - 1
    var w1 = (w / 1 + 1) / 2
    var w2 = 1 - w1
    var rgb = [
      Math.round(color1[0] * w1 + color2[0] * w2),
      Math.round(color1[1] * w1 + color2[1] * w2),
      Math.round(color1[2] * w1 + color2[2] * w2)
    ]
    return rgb
  }
  const colorInput = useRef<any | null>(null)
  useEffect(() => {
    colorInput.current.value = 0
  }, [index, active])

  return (
    <Layout data={list[index]} active={active} iWidth={sliderWidth}>
      <ColorInput
        ref={colorInput}
        min={1}
        max={99}
        defaultValue={0}
        type="range"
        className="colorSlider"
        onChange={e => {
          getColor(+e.target.value)
        }}
        disabled={!active}
      />
    </Layout>
  )
}

export default ColorSlider
