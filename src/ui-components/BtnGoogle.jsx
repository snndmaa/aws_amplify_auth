/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Googlelogo from "./Googlelogo";
import { Flex } from "@aws-amplify/ui-react";
export default function BtnGoogle(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      width="189px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(50,64,123,1)"
      borderRadius="24px"
      padding="7px 15px 7px 15px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "BtnGoogle")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="64px"
        height="21px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 1")}
      >
        <Googlelogo
          width="64px"
          height="21px"
          position="absolute"
          top="0px"
          left="0px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Googlelogo")}
        ></Googlelogo>
      </Flex>
    </Flex>
  );
}
