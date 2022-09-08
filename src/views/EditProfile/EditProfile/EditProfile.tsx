import React from "react"
import Image from "next/image"

// Styled component
import {
  Layout,
  EditLayout,
  InputField,
  Verification,
  VerifyButton,
  UpdateButton,
  PhotoUpload,
  ImageContainer,
  UploadButton
} from "./EditProfile.styled"

// Components
import Text from "components/Text"
import { Col, Row } from "components/Layout"

//Assets

import TempImage from "assets/png/temp.png"

// -----------------------------------------------------------

const EditProfile: React.FC = () => {
  return (
    <Layout id="EditProfile">
      <Row
        display="none"
        responsive={{
          900: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center"
          }
        }}
        data-aos="fade-up"
      >
        <Text
          fWeight={600}
          fSize={40}
          lHeight={44}
          tAlign="center"
          padding="0px 0px 40px 0px"
          responsive={{
            500: { fSize: 30, padding: "0px 0px 30px 0px" },
            375: { padding: "0px 0px 20px 0px" }
          }}
        >
          Edit Profile
        </Text>
        <Text
          fWeight={600}
          fSize={20}
          lHeight={24}
          mWidth={500}
          tAlign="center"
          responsive={{ 500: { fSize: 16 }, 375: { fSize: 12 } }}
        >
          You can set preferred display name, create your brand-ed profile and
          manage other personal setting
        </Text>
      </Row>
      <PhotoUpload data-aos="fade-up">
        <ImageContainer>
          <Image src={TempImage} alt="No Image" layout="fill" />
        </ImageContainer>
        <Text
          fWeight={600}
          fSize={14}
          lHeight={14}
          tAlign="center"
          responsive={{ 375: { fSize: 12 } }}
        >
          We recommend an image of at least 300 x 300. Gifs work too.
        </Text>
        <UploadButton>Choose file</UploadButton>
      </PhotoUpload>
      <EditLayout data-aos="fade-up">
        <Row flexDirection="column" responsive={{ 900: { display: "none" } }}>
          <Text
            fWeight={600}
            fSize={40}
            lHeight={44}
            padding="0px 0px 40px 15px"
          >
            Edit Profile
          </Text>
          <Text
            fWeight={600}
            fSize={20}
            lHeight={24}
            mWidth={500}
            padding="0px 0px 0px 5px"
          >
            You can set preferred display name, create your brand-ed profile and
            manage other personal setting
          </Text>
        </Row>

        <Col>
          <Text
            fWeight={600}
            fSize={20}
            lHeight={24}
            padding="0px 0px 0px 5px"
            responsive={{ 500: { fSize: 16 } }}
          >
            Display name
          </Text>
          <InputField placeholder="Enter your display name"></InputField>
        </Col>
        <Col>
          <Text
            fWeight={600}
            fSize={20}
            lHeight={24}
            padding="0px 0px 0px 5px"
            responsive={{ 500: { fSize: 16 } }}
          >
            Bio
          </Text>
          <InputField placeholder="Tell about yourslef in few words"></InputField>
        </Col>
        <Col>
          <Text
            fWeight={600}
            fSize={20}
            lHeight={24}
            padding="0px 0px 0px 5px"
            responsive={{ 500: { fSize: 16 } }}
          >
            Email
          </Text>
          <InputField placeholder="Your email for marketplace notifications"></InputField>
        </Col>
        <Col>
          <Text
            fWeight={600}
            fSize={20}
            lHeight={24}
            padding="0px 0px 0px 5px"
            responsive={{ 500: { fSize: 16 } }}
          >
            Personal site or portfolio
          </Text>
          <InputField placeholder="https://"></InputField>
        </Col>
        <Verification>
          <Row
            justifyContent="space-between"
            alignItems="center"
            padding="0px 0px 15px 0px"
          >
            <Text
              fWeight={600}
              fSize={20}
              lHeight={24}
              padding="0px 0px 0px 5px"
              responsive={{
                500: { fSize: 16 },
                375: { padding: "0px" }
              }}
            >
              Verification
            </Text>
            <VerifyButton>Get Verified</VerifyButton>
          </Row>
          <Text
            fWeight={600}
            fSize={16}
            lHeight={20}
            fColor="rgba(0,0,0,0.47)"
            mWidth={450}
            responsive={{
              500: { fSize: 14 }
            }}
          >
            Proceed with verification process to get more visibility and gain
            trust on ICPuzzle Marketplace.Please allow up to several weeks for
            the process.
          </Text>
        </Verification>
        <UpdateButton>Update profile</UpdateButton>
      </EditLayout>
    </Layout>
  )
}

export default EditProfile
