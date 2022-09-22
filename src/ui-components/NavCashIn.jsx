/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function NavCashIn(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      width="195px"
      height="40px"
      alignItems="flex-start"
      position="relative"
      border="2px SOLID rgba(255,255,255,1)"
      borderRadius="24px"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "NavCashIn")}
    >
      <Button
        display="flex"
        gap="0"
        width="195px"
        height="40px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="2px SOLID rgba(255,255,255,1)"
        borderRadius="24px"
        padding="6px 14px 6px 14px"
        backgroundColor="rgba(255,114,98,0)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Deposit"
        {...getOverrideProps(overrides, "NavCashIn32933569")}
      ></Button>
    </Flex>
  );
}
