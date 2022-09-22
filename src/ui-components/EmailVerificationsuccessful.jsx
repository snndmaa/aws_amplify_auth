/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, View } from "@aws-amplify/ui-react";
export default function EmailVerificationSuccessful(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      height="1024px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "EmailVerificationSuccessful")}
    >
      <View
        width="1440px"
        height="1024px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "email_verification_successful")}
      >
        <Flex
          gap="24px"
          position="absolute"
          top="calc(50% - 269.27px - 54.73px)"
          left="calc(50% - 192px - -70px)"
          direction="column"
          width="384px"
          justifyContent="flex-end"
          alignItems="center"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 3222")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="293px"
            height="351.54px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "illustration")}
          >
            <View
              width="160px"
              height="160px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "successCommon")}
            ></View>
          </Flex>
          <Text
            fontFamily="Mulish"
            fontSize="24px"
            fontWeight="800"
            color="rgba(50,64,123,1)"
            textTransform="capitalize"
            lineHeight="28.80000114440918px"
            textAlign="left"
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
            children="Email confirmed Successfully!"
            {...getOverrideProps(overrides, "Email confirmed Successfully!")}
          ></Text>
          <Text
            fontFamily="Droid Sans"
            fontSize="14px"
            fontWeight="400"
            color="rgba(50,64,123,0.87)"
            lineHeight="20.01999855041504px"
            textAlign="left"
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
            children="Your email have been verified successfully, proceed to you account."
            {...getOverrideProps(
              overrides,
              "Your email have been verified successfully, proceed to you account."
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
            children="Proceed To Your Account"
            {...getOverrideProps(overrides, "Btn")}
          ></Button>
        </Flex>
      </View>
    </Flex>
  );
}
