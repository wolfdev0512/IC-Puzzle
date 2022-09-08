import type { NextPage } from "next"

//Component
import { ItemBox } from "views/ChooseType"

//Styled Component
import { ChooseTypeLayout } from "styles/Styled"

const ChooseType: NextPage = () => {
  return (
    <ChooseTypeLayout>
      <ItemBox />
    </ChooseTypeLayout>
  )
}

export default ChooseType
