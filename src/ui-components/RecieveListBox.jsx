/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import SelectCurrencyToRecieve from "./SelectCurrencyToRecieve";
import { Flex } from "@aws-amplify/ui-react";
export default function RecieveListBox(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="317px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "RecieveListBox")}
    >
      <SelectCurrencyToRecieve
        display="flex"
        gap="0"
        direction="column"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SelectCurrencyToRecieve")}
      ></SelectCurrencyToRecieve>
    </Flex>
  );
}
