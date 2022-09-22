/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function VerifyEmail(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="153px"
      direction="column"
      position="relative"
      padding="59px 516px 59px 516px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "VerifyEmail")}
    >
      <Flex
        gap="24px"
        direction="column"
        width="384px"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 3221")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="300px"
          height="376.54px"
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
            {...getOverrideProps(overrides, "EmailIcon")}
          ></Flex>
        </Flex>
        <Text
          fontFamily="Mulish"
          fontSize="24px"
          fontWeight="800"
          color="rgba(50,64,123,1)"
          textTransform="capitalize"
          lineHeight="24px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.09px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Verify your Email"
          {...getOverrideProps(overrides, "Verify your Email")}
        ></Text>
        <Text
          fontFamily="Droid Sans"
          fontSize="14px"
          fontWeight="400"
          color="rgba(50,64,123,0.87)"
          lineHeight="20.01999855041504px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Check your mailbox and click the activation link."
          {...getOverrideProps(
            overrides,
            "Check your mailbox and click the activation link."
          )}
        ></Text>
        <Button
          display="flex"
          gap="0"
          width="372px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          overflow="hidden"
          position="relative"
          borderRadius="24px"
          backgroundColor="rgba(50,64,123,1)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Verify Email"
          {...getOverrideProps(overrides, "Btn")}
        ></Button>
      </Flex>
    </Flex>
  );
}
