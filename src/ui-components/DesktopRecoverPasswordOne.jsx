/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, View } from "@aws-amplify/ui-react";
export default function DesktopRecoverPasswordOne(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="57px"
      direction="column"
      alignItems="center"
      position="relative"
      padding="44px 440px 44px 440px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "DesktopRecoverPasswordOne")}
    >
      <Flex
        gap="10px"
        direction="column"
        width="300px"
        height="180.54px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "illustration")}
      >
        <Flex
          gap="0"
          width="160px"
          height="160px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ImgLock")}
        ></Flex>
      </Flex>
      <Flex
        gap="0"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "LblRecoveryPasswordTitle")}
      ></Flex>
      <Flex
        gap="10px"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "LblInstruction")}
      >
        <View
          width="236px"
          height="20px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Where should we send instructions?")}
        ></View>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="474px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(174,179,183,1)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        {...getOverrideProps(overrides, "Input")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(128,128,128,1)"
          lineHeight="30px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Email Address Or Phone Or Username"
          {...getOverrideProps(overrides, "placeholder")}
        ></Text>
      </Flex>
      <Button
        display="flex"
        gap="0"
        width="472px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="24px"
        backgroundColor="rgba(50,64,123,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Send Recovery Email"
        {...getOverrideProps(overrides, "Btn")}
      ></Button>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(50,64,123,0.87)"
        lineHeight="30px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        textDecoration="underline"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Back To Login?"
        {...getOverrideProps(overrides, "label")}
      ></Text>
    </Flex>
  );
}
