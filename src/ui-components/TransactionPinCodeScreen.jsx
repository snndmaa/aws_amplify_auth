/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, TextField } from "@aws-amplify/ui-react";
export default function TransactionPinCodeScreen(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="46px"
      direction="column"
      alignItems="center"
      position="relative"
      borderRadius="12px"
      padding="111px 83px 111px 83px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "TransactionPinCodeScreen")}
    >
      <TextField
        display="flex"
        direction="column"
        width="300px"
        justifyContent="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        label="Input withdrarwal PIN"
        placeholder="e.G 123455"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
      <Button
        display="flex"
        gap="0"
        width="334px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="24px"
        backgroundColor="rgba(39,79,199,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Continue"
        {...getOverrideProps(overrides, "Btn")}
      ></Button>
    </Flex>
  );
}
