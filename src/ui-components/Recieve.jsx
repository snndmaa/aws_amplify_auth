/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, SelectField } from "@aws-amplify/ui-react";
export default function Recieve(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Recieve")}
    >
      <SelectField
        display="flex"
        direction="column"
        width="135px"
        justifyContent="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        label="Reciving"
        placeholder="USD"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField")}
      ></SelectField>
    </Flex>
  );
}
