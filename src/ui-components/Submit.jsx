/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function Submit(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Submit")}
    >
      <Button
        display="flex"
        gap="0"
        width="300px"
        height="60px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        backgroundColor="rgba(39,79,199,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Submit"
        {...getOverrideProps(overrides, "Submit32963530")}
      ></Button>
    </Flex>
  );
}
