/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  SelectField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function DashboardCashOut(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="33px"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(241,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "DashboardCashOut")}
    >
      <View
        width="1119px"
        height="868px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ContentArea")}
      >
        <Text
          fontFamily="Inter"
          fontSize="36px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="42.1875px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="100.5px"
          left="18px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Withdrawal"
          {...getOverrideProps(overrides, "Withdrawal")}
        ></Text>
        <Button
          display="flex"
          gap="0"
          position="absolute"
          top="800.5px"
          left="313px"
          width="472px"
          justifyContent="center"
          alignItems="center"
          borderRadius="24px"
          backgroundColor="rgba(39,79,199,1)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Cash Out"
          {...getOverrideProps(overrides, "Btn")}
        ></Button>
        <Flex
          gap="40px"
          position="absolute"
          top="209px"
          left="195px"
          direction="column"
          padding="25px 56px 25px 56px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "InputArea")}
        >
          <TextField
            display="flex"
            direction="column"
            width="610px"
            justifyContent="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Input Amount to Cash Out"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField32703715")}
          ></TextField>
          <SelectField
            display="flex"
            direction="column"
            width="610px"
            justifyContent="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Select Account"
            placeholder="Select Account"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SelectField33143839")}
          ></SelectField>
          <TextField
            display="flex"
            direction="column"
            width="610px"
            justifyContent="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Account Number"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField32703730")}
          ></TextField>
          <SelectField
            display="flex"
            direction="column"
            width="610px"
            justifyContent="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Select Bank"
            placeholder="Select A Bank"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SelectField32703744")}
          ></SelectField>
        </Flex>
      </View>
    </Flex>
  );
}
