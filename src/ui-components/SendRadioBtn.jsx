/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Radio } from "@aws-amplify/ui-react";
export default function SendRadioBtn(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      width="184px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SendRadioBtn")}
    >
      <Radio
        display="flex"
        gap="16px"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="30px"
        position="relative"
        padding="0px 0px 0px 0px"
        size="large"
        defaultChecked={false}
        isDisabled={false}
        labelPosition="start"
        children="Send"
        {...getOverrideProps(overrides, "Radio")}
      ></Radio>
    </Flex>
  );
}
