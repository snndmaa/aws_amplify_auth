/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import SendRadioBtn from "./SendRadioBtn";
import Rate from "./Rate";
import SelectCurrencyToRecieve from "./SelectCurrencyToRecieve";
import Qty from "./Qty";
import Get from "./Get";
import Submit from "./Submit";
export default function DashboardListOffer(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      height="919px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(241,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "DashboardListOffer")}
    >
      <Flex
        gap="31px"
        direction="column"
        alignItems="center"
        shrink="0"
        height="967px"
        position="relative"
        padding="75px 18px 75px 18px"
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
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="List Offer"
          {...getOverrideProps(overrides, "List Offer")}
        ></Text>
        <Flex
          gap="21px"
          direction="column"
          width="1185px"
          height="742px"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="6px"
          padding="33px 86px 33px 86px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "ListCard")}
        >
          <Text
            fontFamily="Raleway"
            fontSize="14px"
            fontWeight="600"
            color="rgba(116,116,117,1)"
            lineHeight="16.40625px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="367px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="You can edit your swap order by updating  informations below and then click update"
            {...getOverrideProps(
              overrides,
              "You can edit your swap order by updating informations below and then click update"
            )}
          ></Text>
          <Flex
            gap="0"
            direction="column"
            width="559px"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="3px 22px 3px 22px"
            {...getOverrideProps(overrides, "ContentFame")}
          >
            <SendRadioBtn
              display="flex"
              gap="0"
              width="273px"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "SendRadioBtn")}
            ></SendRadioBtn>
            <Rate
              display="flex"
              gap="0"
              direction="column"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Rate")}
            ></Rate>
            <SelectCurrencyToRecieve
              display="flex"
              gap="0"
              direction="column"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "SelectCurrencyToRecieve33355299"
              )}
            ></SelectCurrencyToRecieve>
            <Flex
              padding="0px 0px 0px 0px"
              width="32px"
              height="32px"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Group 5322")}
            >
              <Icon
                width="32px"
                height="32px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 32.6396484375,
                  height: 32.64013671875,
                }}
                paths={[
                  {
                    d: "M31 16C31 24.2843 24.2843 31 16 31L16 33C25.3888 33 33 25.3888 33 16L31 16ZM16 31C7.71573 31 1 24.2843 1 16L-1 16C-1 25.3888 6.61116 33 16 33L16 31ZM1 16C1 7.71573 7.71573 1 16 1L16 -1C6.61116 -1 -1 6.61116 -1 16L1 16ZM16 1C24.2843 1 31 7.71573 31 16L33 16C33 6.61116 25.3888 -1 16 -1L16 1Z",
                    stroke: "rgba(227,227,227,1)",
                    fillRule: "nonzero",
                    strokeWidth: 1,
                  },
                  {
                    d: "M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z",
                    fill: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                position="absolute"
                top="0px"
                left="0px"
                {...getOverrideProps(overrides, "Ellipse 295")}
              ></Icon>
              <View
                width="16px"
                height="16px"
                position="absolute"
                top="8px"
                left="24px"
                transformOrigin="top left"
                transform="rotate(90deg)"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Vertical_switch")}
              ></View>
            </Flex>
            <SelectCurrencyToRecieve
              display="flex"
              gap="0"
              direction="column"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "SelectCurrencyToRecieve33355356"
              )}
            ></SelectCurrencyToRecieve>
            <Qty
              display="flex"
              gap="0"
              direction="column"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Qty")}
            ></Qty>
            <Get
              display="flex"
              gap="0"
              direction="column"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "get")}
            ></Get>
            <Submit
              display="flex"
              gap="0"
              width="fit-content"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Submit")}
            ></Submit>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
