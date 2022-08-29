/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function NavItemProfile(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      width="195px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="13px"
      padding="11px 2px 11px 2px"
      {...rest}
      {...getOverrideProps(overrides, "NavItemProfile")}
    >
      <View
        width="20px"
        height="20px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Group")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.73px"
        width="123px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Profile"
        {...getOverrideProps(overrides, "label")}
      ></Text>
    </Flex>
  );
}
