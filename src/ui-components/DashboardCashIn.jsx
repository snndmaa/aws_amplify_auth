/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, TextField, View } from "@aws-amplify/ui-react";
export default function DashboardCashIn(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="33px"
      height="884px"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(241,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "DashboardCashIn")}
    >
      <View
        width="1119px"
        height="981px"
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
          children="Deposit"
          {...getOverrideProps(overrides, "Deposit")}
        ></Text>
        <Flex
          gap="10px"
          position="absolute"
          top="404.5px"
          left="257px"
          direction="column"
          padding="78px 84px 78px 84px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "DepositDetails")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            width="441px"
            height="178px"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Group 327")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="441px"
              height="29px"
              position="absolute"
              top="0px"
              left="0px"
              {...getOverrideProps(overrides, "Group 326")}
            >
              <Text
                fontFamily="Lato"
                fontSize="24px"
                fontWeight="500"
                color="rgba(0,0,0,1)"
                lineHeight="28.125px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                width="63px"
                position="absolute"
                top="0px"
                left="378px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="₦10"
                {...getOverrideProps(overrides, "\u20A610")}
              ></Text>
              <Text
                fontFamily="Lato"
                fontSize="24px"
                fontWeight="500"
                color="rgba(0,0,0,1)"
                lineHeight="28.125px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                width="88.13px"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Amount"
                {...getOverrideProps(overrides, "Amount")}
              ></Text>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="441px"
              height="29px"
              position="absolute"
              top="74px"
              left="0px"
              {...getOverrideProps(overrides, "Group 325")}
            >
              <Text
                fontFamily="Lato"
                fontSize="24px"
                fontWeight="500"
                color="rgba(0,0,0,1)"
                lineHeight="28.125px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                width="63px"
                position="absolute"
                top="0px"
                left="378px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="₦1"
                {...getOverrideProps(overrides, "\u20A61")}
              ></Text>
              <Text
                fontFamily="Lato"
                fontSize="24px"
                fontWeight="500"
                color="rgba(0,0,0,1)"
                lineHeight="28.125px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                width="77.55px"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Charge"
                {...getOverrideProps(overrides, "Charge")}
              ></Text>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="441px"
              height="29px"
              position="absolute"
              top="149px"
              left="0px"
              {...getOverrideProps(overrides, "Group 324")}
            >
              <Text
                fontFamily="Lato"
                fontSize="24px"
                fontWeight="500"
                color="rgba(0,0,0,1)"
                lineHeight="28.125px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                width="63px"
                position="absolute"
                top="0px"
                left="378px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="₦11"
                {...getOverrideProps(overrides, "\u20A611")}
              ></Text>
              <Text
                fontFamily="Lato"
                fontSize="24px"
                fontWeight="500"
                color="rgba(0,0,0,1)"
                lineHeight="28.125px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                width="52.88px"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Total"
                {...getOverrideProps(overrides, "Total")}
              ></Text>
            </View>
          </Flex>
        </Flex>
        <Button
          display="flex"
          gap="0"
          position="absolute"
          top="814.5px"
          left="313px"
          width="472px"
          justifyContent="center"
          alignItems="center"
          borderRadius="24px"
          backgroundColor="rgba(39,79,199,1)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Cash In"
          {...getOverrideProps(overrides, "Btn")}
        ></Button>
        <TextField
          display="flex"
          position="absolute"
          top="288.5px"
          left="412px"
          direction="column"
          width="300px"
          justifyContent="center"
          padding="0px 0px 0px 0px"
          label="Input Amount to Deposit"
          placeholder="e.g 10"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField")}
        ></TextField>
      </View>
    </Flex>
  );
}
