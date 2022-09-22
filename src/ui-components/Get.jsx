/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, TextField } from "@aws-amplify/ui-react";
export default function Get(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Get")}
    >
      <TextField
        display="flex"
        direction="column"
        width="300px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        label="You get"
        placeholder="0.00"
        size="large"
        isDisabled={true}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
    </Flex>
  );
}
