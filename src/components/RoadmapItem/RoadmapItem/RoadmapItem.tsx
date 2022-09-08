import React from "react"
import Image from "next/image"

// Styled component
import {
  Layout,
  Detail,
  PointContainer,
  Line,
  Point
} from "./RoadmapItem.styled"

// Component
import Text from "components/Text"

// Assets
import Time from "assets/png/time.png"

// -----------------------------------------------------------

const RoadmapItem: React.FC<{
  first?: boolean
  end?: boolean
  color: string
  title: string
  text: string
}> = ({ first, end, color, title, text }) => {
  const pointColor = color.split(",")[1]
  return (
    <Layout first={first}>
      <Detail>
        <Image src={Time} alt="No Image" width={60} height={60}></Image>
        <Text fColor="white" fSize={14}>
          {title}
        </Text>
        <Text fColor="white" tAlign="center" fSize={14} padding="10px">
          {text}
        </Text>
      </Detail>
      <PointContainer>
        <Point color={pointColor}></Point>
      </PointContainer>
      <Line endItem={end} color={color}></Line>
    </Layout>
  )
}

export default RoadmapItem
