import React from "react"
import Image from "next/image"

//Styled Component
import {
  Layout,
  Modal,
  ImageContainer,
  TextBox,
  Button,
  ButtonBox,
  Legend,
  CloseButton
} from "./Success.styled"

//Type
import { SuccessModalProps } from "types/components/Modal"

//Component
import Text from "components/Text"

//Assets
import { AiOutlineClose } from "react-icons/ai"

const Mint: React.FC<SuccessModalProps> = ({
  show,
  pId,
  image,
  tId,
  closeModal,
  download
}) => {
  return (
    <Layout display={show}>
      <Modal>
        <CloseButton onClick={closeModal}>
          <AiOutlineClose size={30} />
        </CloseButton>
        <Text fWeight={800}>
          {pId.substr(0, 20) + "..." + pId.substr(pId.length - 3)}
        </Text>
        <ImageContainer>
          <Image
            src={image}
            alt="No Image"
            width={300}
            height={300}
            objectFit="contain"
            objectPosition="center center"
          ></Image>
        </ImageContainer>
        <TextBox>
          <Text fWeight={600}>TokenID:</Text>
          <Text fWeight={600}>{tId}</Text>
        </TextBox>
        <ButtonBox>
          <Legend>Download</Legend>
          <Button onClick={() => download("svg")}>SVG</Button>
          <Button onClick={() => download("jpg")}>JPG</Button>
        </ButtonBox>
      </Modal>
    </Layout>
  )
}

export default Mint
