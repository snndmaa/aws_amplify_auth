/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function NavItems(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      width="155px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "NavItems")}
    >
      <Button
        display="flex"
        gap="0"
        width="157px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="42px"
        position="relative"
        border="1px SOLID rgba(174,179,183,1)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Home"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
