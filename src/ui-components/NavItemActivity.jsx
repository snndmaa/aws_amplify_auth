/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Fluentbroadactivityfeed20regular from "./Fluentbroadactivityfeed20regular";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function NavItemActivity(props) {
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
      {...getOverrideProps(overrides, "NavItemActivity")}
    >
      <Fluentbroadactivityfeed20regular
        width="24px"
        height="24px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "fluent:broad-activity-feed-20-regular"
        )}
      ></Fluentbroadactivityfeed20regular>
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
        children="Activity"
        {...getOverrideProps(overrides, "label")}
      ></Text>
    </Flex>
  );
}
