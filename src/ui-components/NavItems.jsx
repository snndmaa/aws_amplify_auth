/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import NavHome from "./NavHome";
import { Button, Flex } from "@aws-amplify/ui-react";
import NavCashIn from "./NavCashIn";
import NavCashOut from "./NavCashOut";
import NavListOffer from "./NavListOffer";
import NavSwap from "./NavSwap";
import NavActivity from "./NavActivity";
import NavPortfolio from "./NavPortfolio";
import NavHistory from "./NavHistory";
import NavProfile from "./NavProfile";
export default function NavItems(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="17px"
      direction="column"
      height="736px"
      position="relative"
      padding="18px 10px 18px 10px"
      backgroundColor="rgba(255,255,255,0)"
      {...rest}
      {...getOverrideProps(overrides, "NavItems")}
    >
      <NavHome
        display="flex"
        gap="0"
        width="195px"
        height="40px"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        border="2px SOLID rgba(255,255,255,1)"
        borderRadius="24px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NavHome")}
      ></NavHome>
      <Button
        display="flex"
        gap="0"
        width="195px"
        height="40px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="2px SOLID rgba(255,255,255,1)"
        borderRadius="24px"
        padding="6px 14px 6px 14px"
        backgroundColor="rgba(255,114,98,0)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Link Funds"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <NavCashIn
        display="flex"
        gap="0"
        width="195px"
        height="40px"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        border="2px SOLID rgba(255,255,255,1)"
        borderRadius="24px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NavCashIn")}
      ></NavCashIn>
      <NavCashOut
        display="flex"
        gap="0"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NavCashOut")}
      ></NavCashOut>
      <NavListOffer
        display="flex"
        gap="0"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NavListOffer")}
      ></NavListOffer>
      <NavSwap
        display="flex"
        gap="0"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NavSwap")}
      ></NavSwap>
      <NavActivity
        display="flex"
        gap="0"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NavActivity")}
      ></NavActivity>
      <NavPortfolio
        display="flex"
        gap="0"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NavPortfolio")}
      ></NavPortfolio>
      <NavHistory
        display="flex"
        gap="0"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NavHistory")}
      ></NavHistory>
      <NavProfile
        display="flex"
        gap="0"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NavProfile")}
      ></NavProfile>
      <Flex
        gap="0"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NavSettings")}
      ></Flex>
    </Flex>
  );
}
