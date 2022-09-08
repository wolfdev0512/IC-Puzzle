import React from "react"
import Image from "next/image"

//Styled Component
import {
  Layout,
  Modal,
  ImageContainer,
  TextBox,
  Button,
  ButtonBox
} from "./Mint.styled"

//Type
import { MintModalProps } from "types/components/Modal"

//Component
import Text from "components/Text"

const Mint: React.FC<MintModalProps> = ({
  show,
  pId,
  image,
  title,
  closeModal,
  mintClick
}) => {
  return (
    <Layout display={show}>
      <Modal>
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
          <Text fWeight={600}>Enter Title:</Text>
          <Text fWeight={600}>{title}</Text>
        </TextBox>
        <ButtonBox>
          <Button onClick={mintClick}>Mint</Button>
          <Button onClick={closeModal}>Cancel</Button>
        </ButtonBox>
      </Modal>
    </Layout>
  )
}

export default Mint
