/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import BtnGoogle from "./BtnGoogle";
import BtnFacebook from "./BtnFacebook";
import { Flex, View } from "@aws-amplify/ui-react";
export default function BtnSocialMedia(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="443px"
      height="55px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "BtnSocialMedia")}
    >
      <Flex
        gap="36px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        width="443px"
        height="55px"
        alignItems="flex-start"
        padding="8px 9px 8px 7px"
        {...getOverrideProps(overrides, "Frame 418")}
      >
        <BtnGoogle
          display="flex"
          gap="0"
          width="189px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="37px"
          position="relative"
          border="1px SOLID rgba(50,64,123,1)"
          borderRadius="24px"
          padding="7px 15px 7px 15px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "BtnGoogle")}
        ></BtnGoogle>
        <BtnFacebook
          display="flex"
          gap="0"
          width="189px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="35px"
          position="relative"
          border="1px SOLID rgba(50,64,123,1)"
          borderRadius="24px"
          padding="7px 15px 7px 15px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "BtnFacebook")}
        ></BtnFacebook>
      </Flex>
    </View>
  );
}
