/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, SelectField, Text, View } from "@aws-amplify/ui-react";
import Submit from "./Submit";
export default function DashboardLinkFunds(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      height="890px"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(241,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "DashboardLinkFunds")}
    >
      <View
        width="1185px"
        height="933px"
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
          children="Link Funds"
          {...getOverrideProps(overrides, "Link Funds")}
        ></Text>
        <Flex
          gap="10px"
          position="absolute"
          top="217px"
          left="399px"
          alignItems="flex-start"
          border="1px SOLID rgba(0,0,0,1)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "GrpLinkFunds")}
        >
          <View
            width="387px"
            height="547px"
            shrink="0"
            position="relative"
            borderRadius="6px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "FrameOuterLinkFunds")}
          >
            <View
              width="347px"
              height="459px"
              position="absolute"
              top="88px"
              left="20px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "FrameInnerLinkFunds")}
            >
              <Submit
                display="flex"
                gap="0"
                position="absolute"
                top="200px"
                left="24px"
                alignItems="flex-start"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "SubmitAccountType")}
              ></Submit>
              <Flex
                gap="0"
                position="absolute"
                top="43px"
                left="24px"
                direction="column"
                width="300px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "FrameCountry")}
              >
                <SelectField
                  display="flex"
                  gap="8px"
                  direction="column"
                  width="300px"
                  justifyContent="center"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  label="Reciving"
                  placeholder="Choose Country"
                  size="default"
                  isDisabled={false}
                  labelHidden={false}
                  variation="default"
                  {...getOverrideProps(overrides, "SelectCountry")}
                ></SelectField>
              </Flex>
              <Flex
                gap="0"
                position="absolute"
                top="122px"
                left="22px"
                direction="column"
                width="300px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "FrameAccountType")}
              >
                <SelectField
                  display="flex"
                  direction="column"
                  width="300px"
                  justifyContent="center"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  label="Giving"
                  placeholder="Choose Account Type"
                  size="large"
                  isDisabled={false}
                  labelHidden={false}
                  variation="default"
                  {...getOverrideProps(overrides, "SelectAccountType")}
                ></SelectField>
              </Flex>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="367px"
              height="57px"
              position="absolute"
              top="47px"
              left="8px"
              {...getOverrideProps(overrides, "Group 237575")}
            >
              <Text
                fontFamily="Raleway"
                fontSize="16px"
                fontWeight="600"
                color="rgba(116,116,117,1)"
                lineHeight="18.75px"
                textAlign="center"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                width="367px"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Please select country where your account is domiciled and the account type (i.e. bank account, debit card e.t.c.)"
                {...getOverrideProps(
                  overrides,
                  "Please select country where your account is domiciled and the account type (i.e. bank account, debit card e.t.c.)"
                )}
              ></Text>
            </View>
          </View>
        </Flex>
      </View>
    </Flex>
  );
}
