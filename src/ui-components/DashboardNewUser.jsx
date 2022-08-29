/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import SelectFieldCurrency from "./SelectFieldCurrency";
export default function DashboardNewUser(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "" });
  const homeOnClick = useNavigateAction({
    type: "url",
    url: "http://localhost:3000",
  });
  const cashInOnClick = useNavigateAction({ type: "url", url: "" });
  const cashInLblOnClick = useNavigateAction({ type: "url", url: "" });
  const cashOutOnClick = useNavigateAction({ type: "url", url: "" });
  const cashOutLblOnClick = useNavigateAction({ type: "url", url: "" });
  const offerOnClick = useNavigateAction({ type: "url", url: "" });
  const listofferOnClick = useNavigateAction({ type: "url", url: "" });
  const swapOnClick = useNavigateAction({ type: "url", url: "" });
  const swapLblOnClick = useNavigateAction({ type: "url", url: "" });
  const activityOnClick = useNavigateAction({ type: "url", url: "" });
  const activityLblOnClick = useNavigateAction({ type: "url", url: "" });
  const portfolioOnClick = useNavigateAction({ type: "url", url: "" });
  const portfolioLblOnClick = useNavigateAction({ type: "url", url: "" });
  const historyOnClick = useNavigateAction({ type: "url", url: "" });
  const historyLblOnClick = useNavigateAction({ type: "url", url: "" });
  const profileOnClick = useNavigateAction({ type: "url", url: "" });
  const profileLblOnClick = useNavigateAction({ type: "url", url: "" });
  const settingsOnClick = useNavigateAction({ type: "url", url: "" });
  const settingLblOnClick = useNavigateAction({ type: "url", url: "" });
  return (
    <Flex
      gap="33px"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(241,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "DashboardNewUser")}
    >
      <View
        width="259px"
        height="1024px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(39,79,199,1)"
        {...getOverrideProps(overrides, "Sidebar")}
      >
        <Button
          display="flex"
          gap="0"
          position="absolute"
          top="872px"
          left="52px"
          width="155px"
          justifyContent="center"
          alignItems="center"
          backgroundColor="rgba(255,114,98,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Logout"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        <Flex
          gap="10px"
          position="absolute"
          top="164px"
          left="38px"
          width="182px"
          height="45px"
          justifyContent="center"
          alignItems="center"
          border="1px SOLID rgba(255,255,255,1)"
          borderRadius="8px"
          padding="5px 0px 5px 0px"
          backgroundColor="rgba(222,246,228,0)"
          onClick={() => {
            homeOnClick();
          }}
          {...getOverrideProps(overrides, "Home")}
        >
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            fontStyle="italic"
            textTransform="capitalize"
            lineHeight="16px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="-0.26px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Home"
            {...getOverrideProps(overrides, "homeLbl")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          position="absolute"
          top="224px"
          left="38px"
          width="182px"
          height="45px"
          justifyContent="center"
          alignItems="center"
          border="1px SOLID rgba(255,255,255,1)"
          borderRadius="8px"
          padding="5px 0px 5px 0px"
          backgroundColor="rgba(222,246,228,0)"
          onClick={() => {
            cashInOnClick();
          }}
          {...getOverrideProps(overrides, "cashIn")}
        >
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            fontStyle="italic"
            textTransform="capitalize"
            lineHeight="16px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="-0.26px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Cash In"
            onClick={() => {
              cashInLblOnClick();
            }}
            {...getOverrideProps(overrides, "cashInLbl")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          position="absolute"
          top="284px"
          left="38px"
          width="182px"
          height="45px"
          justifyContent="center"
          alignItems="center"
          border="1px SOLID rgba(255,255,255,1)"
          borderRadius="8px"
          padding="5px 0px 5px 0px"
          backgroundColor="rgba(222,246,228,0)"
          onClick={() => {
            cashOutOnClick();
          }}
          {...getOverrideProps(overrides, "cashOut")}
        >
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            fontStyle="italic"
            textTransform="capitalize"
            lineHeight="16px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="-0.26px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Cash Out"
            onClick={() => {
              cashOutLblOnClick();
            }}
            {...getOverrideProps(overrides, "cashOutLbl")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          position="absolute"
          top="344px"
          left="38px"
          width="182px"
          height="45px"
          justifyContent="center"
          alignItems="center"
          border="1px SOLID rgba(255,255,255,1)"
          borderRadius="8px"
          padding="5px 0px 5px 0px"
          backgroundColor="rgba(222,246,228,0)"
          onClick={() => {
            offerOnClick();
          }}
          {...getOverrideProps(overrides, "offer")}
        >
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            fontStyle="italic"
            textTransform="capitalize"
            lineHeight="16px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="-0.26px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="List Offer"
            onClick={() => {
              listofferOnClick();
            }}
            {...getOverrideProps(overrides, "Listoffer")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          position="absolute"
          top="404px"
          left="38px"
          width="182px"
          height="45px"
          justifyContent="center"
          alignItems="center"
          border="1px SOLID rgba(255,255,255,1)"
          borderRadius="8px"
          padding="5px 0px 5px 0px"
          backgroundColor="rgba(222,246,228,0)"
          onClick={() => {
            swapOnClick();
          }}
          {...getOverrideProps(overrides, "swap")}
        >
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            fontStyle="italic"
            textTransform="capitalize"
            lineHeight="16px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="-0.26px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Swap"
            onClick={() => {
              swapLblOnClick();
            }}
            {...getOverrideProps(overrides, "swapLbl")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          position="absolute"
          top="464px"
          left="38px"
          width="182px"
          height="45px"
          justifyContent="center"
          alignItems="center"
          border="1px SOLID rgba(255,255,255,1)"
          borderRadius="8px"
          padding="5px 0px 5px 0px"
          backgroundColor="rgba(222,246,228,0)"
          onClick={() => {
            activityOnClick();
          }}
          {...getOverrideProps(overrides, "activity")}
        >
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            fontStyle="italic"
            textTransform="capitalize"
            lineHeight="16px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="-0.26px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Activity"
            onClick={() => {
              activityLblOnClick();
            }}
            {...getOverrideProps(overrides, "activityLbl")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          position="absolute"
          top="524px"
          left="38px"
          width="182px"
          height="45px"
          justifyContent="center"
          alignItems="center"
          border="1px SOLID rgba(255,255,255,1)"
          borderRadius="8px"
          padding="5px 0px 5px 0px"
          backgroundColor="rgba(222,246,228,0)"
          onClick={() => {
            portfolioOnClick();
          }}
          {...getOverrideProps(overrides, "portfolio")}
        >
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            fontStyle="italic"
            textTransform="capitalize"
            lineHeight="16px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="-0.26px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Portfolio"
            onClick={() => {
              portfolioLblOnClick();
            }}
            {...getOverrideProps(overrides, "portfolioLbl")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          position="absolute"
          top="584px"
          left="38px"
          width="182px"
          height="45px"
          justifyContent="center"
          alignItems="center"
          border="1px SOLID rgba(255,255,255,1)"
          borderRadius="8px"
          padding="5px 0px 5px 0px"
          backgroundColor="rgba(222,246,228,0)"
          onClick={() => {
            historyOnClick();
          }}
          {...getOverrideProps(overrides, "history")}
        >
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            fontStyle="italic"
            textTransform="capitalize"
            lineHeight="16px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="-0.26px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="History"
            onClick={() => {
              historyLblOnClick();
            }}
            {...getOverrideProps(overrides, "historyLbl")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          position="absolute"
          top="644px"
          left="38px"
          width="182px"
          height="45px"
          justifyContent="center"
          alignItems="center"
          border="1px SOLID rgba(255,255,255,1)"
          borderRadius="8px"
          padding="5px 0px 5px 0px"
          backgroundColor="rgba(222,246,228,0)"
          onClick={() => {
            profileOnClick();
          }}
          {...getOverrideProps(overrides, "profile")}
        >
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            fontStyle="italic"
            textTransform="capitalize"
            lineHeight="16px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="-0.26px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Profile"
            onClick={() => {
              profileLblOnClick();
            }}
            {...getOverrideProps(overrides, "profileLbl")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          position="absolute"
          top="704px"
          left="38px"
          width="182px"
          height="45px"
          justifyContent="center"
          alignItems="center"
          border="1px SOLID rgba(255,255,255,1)"
          borderRadius="8px"
          padding="5px 0px 5px 0px"
          backgroundColor="rgba(222,246,228,0)"
          onClick={() => {
            settingsOnClick();
          }}
          {...getOverrideProps(overrides, "settings")}
        >
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            fontStyle="italic"
            textTransform="capitalize"
            lineHeight="16px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="-0.26px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Settings"
            onClick={() => {
              settingLblOnClick();
            }}
            {...getOverrideProps(overrides, "settingLbl")}
          ></Text>
        </Flex>
      </View>
      <View
        width="1119px"
        height="981px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ContentArea")}
      >
        <View
          width="464px"
          height="151px"
          position="absolute"
          top="174px"
          left="18px"
          overflow="hidden"
          boxShadow="0px 9.94853401184082px 12.963241577148438px rgba(0, 0, 0, 0.06515888124704361)"
          borderRadius="3px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "User Balance")}
        >
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="400"
            color="rgba(60,60,67,0.6)"
            fontStyle="italic"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="-0.09px"
            width="179px"
            position="absolute"
            top="19px"
            left="24px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Your Portfolio:"
            {...getOverrideProps(overrides, "Title32674909")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="34px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            fontStyle="italic"
            lineHeight="41px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.22px"
            width="219px"
            position="absolute"
            top="44px"
            left="24px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="₦0.00"
            {...getOverrideProps(overrides, "Title32674910")}
          ></Text>
          <View
            width="22.5px"
            height="18px"
            position="absolute"
            top="137px"
            left="100px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Group")}
          >
            <Icon
              width="16.5px"
              height="18px"
              viewBox={{ minX: 0, minY: 0, width: 16.5, height: 18 }}
              paths={[
                {
                  d: "M1.5 2.25C1.5 2.05109 1.57902 1.86032 1.71967 1.71967C1.86032 1.57902 2.05109 1.5 2.25 1.5L14.25 1.5C14.4489 1.5 14.6397 1.57902 14.7803 1.71967C14.921 1.86032 15 2.05109 15 2.25L15 15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5L2.25 16.5C2.05109 16.5 1.86032 16.421 1.71967 16.2803C1.57902 16.1397 1.5 15.9489 1.5 15.75L1.5 12.75C1.5 12.5511 1.42098 12.3603 1.28033 12.2197C1.13968 12.079 0.948912 12 0.75 12C0.551088 12 0.360322 12.079 0.21967 12.2197C0.0790178 12.3603 0 12.5511 0 12.75L0 15.75C0 16.3467 0.237053 16.919 0.659009 17.341C1.08097 17.7629 1.65326 18 2.25 18L14.25 18C14.8467 18 15.419 17.7629 15.841 17.341C16.2629 16.919 16.5 16.3467 16.5 15.75L16.5 2.25C16.5 1.65326 16.2629 1.08097 15.841 0.65901C15.419 0.237053 14.8467 6.66134e-16 14.25 0L2.25 0C1.65326 0 1.08097 0.237053 0.659009 0.65901C0.237053 1.08097 0 1.65326 0 2.25L0 5.25C0 5.44891 0.0790178 5.63968 0.21967 5.78033C0.360322 5.92098 0.551088 6 0.75 6C0.948912 6 1.13968 5.92098 1.28033 5.78033C1.42098 5.63968 1.5 5.44891 1.5 5.25L1.5 2.25Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "evenodd",
                },
              ]}
              position="absolute"
              top="0%"
              bottom="0%"
              left="26.67%"
              right="0%"
              {...getOverrideProps(overrides, "Vector32674912")}
            ></Icon>
            <Icon
              width="16.5013427734375px"
              height="10.501953125px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 16.5013427734375,
                height: 10.501953125,
              }}
              paths={[
                {
                  d: "M16.281 5.78195C16.3508 5.71228 16.4063 5.62952 16.4441 5.5384C16.4819 5.44728 16.5013 5.3496 16.5013 5.25095C16.5013 5.1523 16.4819 5.05462 16.4441 4.9635C16.4063 4.87238 16.3508 4.78962 16.281 4.71995L11.781 0.219948C11.7113 0.150216 11.6285 0.0949012 11.5374 0.0571625C11.4463 0.0194239 11.3486 0 11.25 0C11.1514 0 11.0537 0.0194239 10.9626 0.0571625C10.8715 0.0949012 10.7887 0.150216 10.719 0.219948C10.6493 0.289679 10.594 0.372463 10.5562 0.463572C10.5185 0.554681 10.4991 0.652332 10.4991 0.750948C10.4991 0.849564 10.5185 0.947214 10.5562 1.03832C10.594 1.12943 10.6493 1.21222 10.719 1.28195L13.9395 4.50095L0.75 4.50095C0.551088 4.50095 0.360322 4.57997 0.21967 4.72062C0.0790176 4.86127 6.66134e-16 5.05204 0 5.25095C3.33067e-16 5.44986 0.0790176 5.64063 0.21967 5.78128C0.360322 5.92193 0.551088 6.00095 0.75 6.00095L13.9395 6.00095L10.719 9.21995C10.6493 9.28968 10.594 9.37246 10.5562 9.46357C10.5185 9.55468 10.4991 9.65233 10.4991 9.75095C10.4991 9.84956 10.5185 9.94721 10.5562 10.0383C10.594 10.1294 10.6493 10.2122 10.719 10.2819C10.7887 10.3517 10.8715 10.407 10.9626 10.4447C11.0537 10.4825 11.1514 10.5019 11.25 10.5019C11.3486 10.5019 11.4463 10.4825 11.5374 10.4447C11.6285 10.407 11.7113 10.3517 11.781 10.2819L16.281 5.78195L16.281 5.78195Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "evenodd",
                },
              ]}
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="0%"
              right="26.66%"
              {...getOverrideProps(overrides, "Vector32674913")}
            ></Icon>
          </View>
          <SelectFieldCurrency
            display="flex"
            gap="0"
            position="absolute"
            top="39.5px"
            left="281px"
            direction="column"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(39,79,199,1)"
            {...getOverrideProps(overrides, "SelectFieldCurrency")}
          ></SelectFieldCurrency>
        </View>
        <Flex
          gap="4px"
          position="absolute"
          top="101px"
          left="18px"
          direction="column"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 82")}
        >
          <Text
            fontFamily="Poppins"
            fontSize="25px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            fontStyle="italic"
            lineHeight="41px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.22px"
            width="203px"
            height="36px"
            grow="1"
            basis="36px"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Hello UserName"
            {...getOverrideProps(overrides, "Greetings")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="14px"
            fontWeight="500"
            color="rgba(112,126,174,1)"
            fontStyle="italic"
            lineHeight="16.40625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="-0.13px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Account ID: 1234567890"
            {...getOverrideProps(overrides, "AccountID")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          position="absolute"
          top="358px"
          left="18px"
          direction="column"
          width="830px"
          height="254px"
          borderRadius="3px"
          padding="24px 0px 16px 24px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Frame 74")}
        >
          <Text
            fontFamily="Poppins"
            fontSize="24px"
            fontWeight="500"
            color="rgba(0,38,28,1)"
            fontStyle="italic"
            lineHeight="28.125px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.23px"
            width="302px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Activity"
            {...getOverrideProps(overrides, "Activity")}
          ></Text>
          <Flex
            gap="46px"
            width="806px"
            height="45px"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 24px 0px 0px"
            {...getOverrideProps(overrides, "Frame 7132683502")}
          >
            <Flex
              gap="75px"
              width="196px"
              alignItems="center"
              shrink="0"
              height="40px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 7832683503")}
            >
              <Flex
                gap="0"
                width="40px"
                height="40px"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                position="relative"
                borderRadius="8px"
                padding="16px 16px 16px 16px"
                backgroundColor="rgba(32,253,54,1)"
                {...getOverrideProps(overrides, "Coins32683504")}
              ></Flex>
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="500"
                color="rgba(112,126,174,1)"
                fontStyle="italic"
                lineHeight="18.75px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.11px"
                width="80.57px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="BUY"
                {...getOverrideProps(overrides, "BUY")}
              ></Text>
            </Flex>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
              fontStyle="italic"
              lineHeight="18.75px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.11px"
              width="99px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="10:45:16 AM"
              {...getOverrideProps(overrides, "10:45:16 AM")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
              fontStyle="italic"
              lineHeight="18.75px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.11px"
              width="93px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="+1545,00"
              {...getOverrideProps(overrides, "+1545,00")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(0,222,163,1)"
              fontStyle="italic"
              lineHeight="18.75px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.11px"
              width="93px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Completed"
              {...getOverrideProps(overrides, "Completed32683508")}
            ></Text>
          </Flex>
          <Flex
            gap="46px"
            width="806px"
            height="46px"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 24px 0px 0px"
            {...getOverrideProps(overrides, "Frame 7232683509")}
          >
            <Flex
              gap="75px"
              width="fit-content"
              alignItems="center"
              shrink="0"
              height="40px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 7932683510")}
            >
              <Flex
                gap="0"
                width="40px"
                height="40px"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                position="relative"
                borderRadius="8px"
                padding="16px 16px 16px 16px"
                backgroundColor="rgba(255,45,85,1)"
                {...getOverrideProps(overrides, "Coins32683511")}
              ></Flex>
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="500"
                color="rgba(112,126,174,1)"
                fontStyle="italic"
                lineHeight="18.75px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.11px"
                width="75.56px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="SELL"
                {...getOverrideProps(overrides, "SELL")}
              ></Text>
            </Flex>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
              fontStyle="italic"
              lineHeight="18.75px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.11px"
              width="100px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="09:15:31 AM"
              {...getOverrideProps(overrides, "09:15:31 AM")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
              fontStyle="italic"
              lineHeight="18.75px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.11px"
              width="83px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="+5649,00"
              {...getOverrideProps(overrides, "+5649,00")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(241,55,55,1)"
              fontStyle="italic"
              lineHeight="18.75px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.11px"
              width="88px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Failed"
              {...getOverrideProps(overrides, "Failed")}
            ></Text>
          </Flex>
          <Flex
            gap="46px"
            width="806px"
            height="45px"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 24px 0px 0px"
            {...getOverrideProps(overrides, "Frame 7332683516")}
          >
            <Flex
              gap="75px"
              width="197px"
              alignItems="center"
              shrink="0"
              height="40px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 8032683517")}
            >
              <Flex
                gap="0"
                width="40px"
                height="40px"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                position="relative"
                borderRadius="8px"
                padding="16px 16px 16px 16px"
                backgroundColor="rgba(120,62,253,1)"
                {...getOverrideProps(overrides, "Coins32683518")}
              ></Flex>
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="500"
                color="rgba(112,126,174,1)"
                fontStyle="italic"
                lineHeight="18.75px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.11px"
                width="95px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Deposit"
                {...getOverrideProps(overrides, "Deposit")}
              ></Text>
            </Flex>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
              fontStyle="italic"
              lineHeight="18.75px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.11px"
              width="95px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="09:01:12 AM"
              {...getOverrideProps(overrides, "09:01:12 AM")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
              fontStyle="italic"
              lineHeight="18.75px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.11px"
              width="81px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="+4547,00"
              {...getOverrideProps(overrides, "+4547,00")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(0,222,163,1)"
              fontStyle="italic"
              lineHeight="18.75px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.11px"
              width="95px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Completed"
              {...getOverrideProps(overrides, "Completed32683522")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="16px"
          position="absolute"
          top="650px"
          left="18px"
          direction="column"
          width="830px"
          height="254px"
          borderRadius="3px"
          padding="24px 0px 16px 24px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Frame 84")}
        >
          <Text
            fontFamily="Poppins"
            fontSize="24px"
            fontWeight="500"
            color="rgba(0,38,28,1)"
            fontStyle="italic"
            lineHeight="28.125px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.23px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Swap Listings "
            {...getOverrideProps(overrides, "Swap Listings")}
          ></Text>
          <Flex
            gap="46px"
            width="806px"
            height="45px"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 24px 0px 0px"
            {...getOverrideProps(overrides, "Frame 7132683605")}
          >
            <Flex
              gap="75px"
              width="196px"
              alignItems="center"
              shrink="0"
              height="40px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 7832683606")}
            >
              <Flex
                padding="0px 0px 0px 0px"
                width="40px"
                height="40px"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Profile Avatar32683607")}
              >
                <Icon
                  width="40px"
                  height="40px"
                  viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
                  paths={[
                    {
                      d: "M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z",
                      fill: "rgba(112,45,156,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="0px"
                  left="0px"
                  {...getOverrideProps(overrides, "Ellipse32683608")}
                ></Icon>
                <Text
                  fontFamily="Poppins"
                  fontSize="18px"
                  fontWeight="400"
                  color="rgba(255,255,255,1)"
                  fontStyle="italic"
                  lineHeight="21.09375px"
                  textAlign="center"
                  display="flex"
                  direction="column"
                  justifyContent="center"
                  width="40px"
                  height="40px"
                  position="absolute"
                  top="0px"
                  left="0px"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="U"
                  {...getOverrideProps(overrides, "U32683609")}
                ></Text>
              </Flex>
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="500"
                color="rgba(112,126,174,1)"
                fontStyle="italic"
                lineHeight="18.75px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.11px"
                width="80.57px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="NGN/USD"
                {...getOverrideProps(overrides, "NGN/USD32683610")}
              ></Text>
            </Flex>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
              fontStyle="italic"
              lineHeight="18.75px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.11px"
              width="119px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="1 minutes ago"
              {...getOverrideProps(overrides, "1 minutes ago")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
              fontStyle="italic"
              lineHeight="18.75px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.11px"
              width="93px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="560"
              {...getOverrideProps(overrides, "560")}
            ></Text>
            <Flex
              gap="10px"
              width="91px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="6px 0px 6px 0px"
              backgroundColor="rgba(222,246,228,1)"
              {...getOverrideProps(overrides, "Increase32683613")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(52,199,89,1)"
                fontStyle="italic"
                textTransform="uppercase"
                lineHeight="16px"
                textAlign="center"
                display="flex"
                direction="column"
                justifyContent="center"
                letterSpacing="-0.26px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="BUY"
                {...getOverrideProps(overrides, "Increase Value32683614")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="46px"
            width="806px"
            height="46px"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 24px 0px 0px"
            {...getOverrideProps(overrides, "Frame 7232683615")}
          >
            <Flex
              gap="75px"
              width="fit-content"
              alignItems="center"
              shrink="0"
              height="40px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 7932683616")}
            >
              <Flex
                padding="0px 0px 0px 0px"
                width="40px"
                height="40px"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Profile Avatar32683617")}
              >
                <Icon
                  width="40px"
                  height="40px"
                  viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
                  paths={[
                    {
                      d: "M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z",
                      fill: "rgba(230,28,28,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="0px"
                  left="0px"
                  {...getOverrideProps(overrides, "Ellipse32683618")}
                ></Icon>
                <Text
                  fontFamily="Poppins"
                  fontSize="18px"
                  fontWeight="400"
                  color="rgba(255,255,255,1)"
                  fontStyle="italic"
                  lineHeight="21.09375px"
                  textAlign="center"
                  display="flex"
                  direction="column"
                  justifyContent="center"
                  width="40px"
                  height="40px"
                  position="absolute"
                  top="0px"
                  left="0px"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="U"
                  {...getOverrideProps(overrides, "U32683619")}
                ></Text>
              </Flex>
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="500"
                color="rgba(112,126,174,1)"
                fontStyle="italic"
                lineHeight="18.75px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.11px"
                width="88px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="USD/NGN"
                {...getOverrideProps(overrides, "USD/NGN")}
              ></Text>
            </Flex>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
              fontStyle="italic"
              lineHeight="18.75px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.11px"
              width="100px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="2 hours ago"
              {...getOverrideProps(overrides, "2 hours ago")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
              fontStyle="italic"
              lineHeight="18.75px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.11px"
              width="83px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="600"
              {...getOverrideProps(overrides, "600")}
            ></Text>
            <Flex
              gap="10px"
              width="91px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="6px 0px 6px 0px"
              backgroundColor="rgba(255,221,228,1)"
              {...getOverrideProps(overrides, "Increase32683623")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(255,45,85,1)"
                fontStyle="italic"
                textTransform="uppercase"
                lineHeight="16px"
                textAlign="center"
                display="flex"
                direction="column"
                justifyContent="center"
                letterSpacing="-0.26px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Sell"
                {...getOverrideProps(overrides, "Increase Value32683624")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="46px"
            width="806px"
            height="45px"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 24px 0px 0px"
            {...getOverrideProps(overrides, "Frame 7332683625")}
          >
            <Flex
              gap="75px"
              width="197px"
              alignItems="center"
              shrink="0"
              height="40px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 8032683626")}
            >
              <Flex
                padding="0px 0px 0px 0px"
                width="40px"
                height="40px"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Profile Avatar32683627")}
              >
                <Icon
                  width="40px"
                  height="40px"
                  viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
                  paths={[
                    {
                      d: "M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z",
                      fill: "rgba(112,45,156,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  position="absolute"
                  top="0px"
                  left="0px"
                  {...getOverrideProps(overrides, "Ellipse32683628")}
                ></Icon>
                <Text
                  fontFamily="Poppins"
                  fontSize="18px"
                  fontWeight="400"
                  color="rgba(255,255,255,1)"
                  fontStyle="italic"
                  lineHeight="21.09375px"
                  textAlign="center"
                  display="flex"
                  direction="column"
                  justifyContent="center"
                  width="40px"
                  height="40px"
                  position="absolute"
                  top="0px"
                  left="0px"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="U"
                  {...getOverrideProps(overrides, "U32683629")}
                ></Text>
              </Flex>
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="500"
                color="rgba(112,126,174,1)"
                fontStyle="italic"
                lineHeight="18.75px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.11px"
                width="95px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="NGN/USD"
                {...getOverrideProps(overrides, "NGN/USD32683630")}
              ></Text>
            </Flex>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
              fontStyle="italic"
              lineHeight="18.75px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.11px"
              width="95px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="1 day ago"
              {...getOverrideProps(overrides, "1 day ago")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
              fontStyle="italic"
              lineHeight="18.75px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.11px"
              width="81px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="700"
              {...getOverrideProps(overrides, "700")}
            ></Text>
            <Flex
              gap="10px"
              width="91px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="6px 0px 6px 0px"
              backgroundColor="rgba(222,246,228,1)"
              {...getOverrideProps(overrides, "Increase32683633")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(52,199,89,1)"
                fontStyle="italic"
                textTransform="uppercase"
                lineHeight="16px"
                textAlign="center"
                display="flex"
                direction="column"
                justifyContent="center"
                letterSpacing="-0.26px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="BUY"
                {...getOverrideProps(overrides, "Increase Value32683634")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
        <View
          padding="0px 0px 0px 0px"
          width="411px"
          height="21px"
          position="absolute"
          top="936px"
          left="369px"
          {...getOverrideProps(overrides, "Footer")}
        >
          <Text
            fontFamily="Raleway"
            fontSize="18px"
            fontWeight="600"
            color="rgba(116,116,117,1)"
            fontStyle="italic"
            lineHeight="21.09375px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="190px"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Terms and Conditions"
            {...getOverrideProps(overrides, "Terms and Conditions")}
          ></Text>
          <Text
            fontFamily="Raleway"
            fontSize="18px"
            fontWeight="600"
            color="rgba(116,116,117,1)"
            fontStyle="italic"
            lineHeight="21.09375px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="58px"
            position="absolute"
            top="0px"
            left="222px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Pivacy"
            {...getOverrideProps(overrides, "Pivacy")}
          ></Text>
          <Text
            fontFamily="Raleway"
            fontSize="18px"
            fontWeight="600"
            color="rgba(116,116,117,1)"
            fontStyle="italic"
            lineHeight="21.09375px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="97px"
            position="absolute"
            top="0px"
            left="314px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Contact Us"
            {...getOverrideProps(overrides, "Contact Us")}
          ></Text>
        </View>
        <View
          width="204px"
          height="39px"
          position="absolute"
          top="110px"
          left="247px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,0)"
          {...getOverrideProps(overrides, "progress_bar")}
        >
          <View
            width="204px"
            height="4px"
            position="absolute"
            top="17px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "profile_completion_progress")}
          ></View>
          <Text
            fontFamily="Poppins"
            fontSize="12px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            fontStyle="italic"
            lineHeight="14.0625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="21px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Complete your profile"
            {...getOverrideProps(overrides, "Complete your profile")}
          ></Text>
        </View>
        <View
          width="1120px"
          height="101px"
          position="absolute"
          top="0px"
          left="-1px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 3223")}
        >
          <Flex
            gap="8px"
            position="absolute"
            top="37px"
            left="226px"
            width="406px"
            height="48px"
            alignItems="center"
            borderRadius="3px"
            padding="8px 8px 8px 8px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Frame 26")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "TxbSearch")}
            ></View>
            <Text
              fontFamily="Poppins"
              fontSize="14px"
              fontWeight="400"
              color="rgba(174,182,207,1)"
              fontStyle="italic"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="-0.13px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Search"
              {...getOverrideProps(overrides, "txtSearch")}
            ></Text>
          </Flex>
          <Flex
            gap="8px"
            position="absolute"
            top="37px"
            left="885px"
            width="183px"
            justifyContent="flex-end"
            alignItems="center"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 27")}
          >
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(0,38,28,1)"
              fontStyle="italic"
              lineHeight="18.75px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.11px"
              width="111.74px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Ebenezer"
              {...getOverrideProps(overrides, "UserName")}
            ></Text>
            <Image
              width="48px"
              height="48px"
              shrink="0"
              position="relative"
              borderRadius="12px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "UserImage")}
            ></Image>
          </Flex>
          <Flex
            gap="11px"
            position="absolute"
            top="37px"
            left="782px"
            width="48px"
            height="48px"
            justifyContent="center"
            alignItems="center"
            boxShadow="0px 4px 16px rgba(0, 0.6000000238418579, 0.440540611743927, 0.07999999821186066)"
            borderRadius="8px"
            padding="8px 8px 8px 8px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Frame 50")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Icons")}
            ></View>
          </Flex>
        </View>
      </View>
    </Flex>
  );
}
