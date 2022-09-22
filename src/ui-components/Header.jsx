/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import SearchFielde from "./SearchFielde";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        SearchFielde: {},
        Icons: {},
        FrameIcon: {},
        UserName: {},
        FrameUserName: {},
        UserImage: {},
        FrameUserImage: {},
        UserProfile: {},
        Header: {},
      },
      variantValues: { property1: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const frameUserNameOnClick = useNavigateAction({
    type: "url",
    url: "https://www.cnn.com",
  });
  const userNameOnClick = useNavigateAction({
    type: "url",
    url: "https://www.cnn.com",
  });
  return (
    <Flex
      gap="156px"
      width="fit-content"
      alignItems="center"
      overflow="hidden"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="16px 52px 16px 52px"
      {...rest}
      {...getOverrideProps(overrides, "Header")}
    >
      <SearchFielde
        display="flex"
        gap="0"
        direction="column"
        shrink="0"
        height="46px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SearchFielde")}
      ></SearchFielde>
      <Flex
        gap="11px"
        width="48px"
        height="48px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        boxShadow="0px 4px 16px rgba(0, 0.6000000238418579, 0.440540611743927, 0.07999999821186066)"
        borderRadius="8px"
        padding="8px 8px 8px 8px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "FrameIcon")}
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
      <Flex
        gap="156px"
        width="fit-content"
        alignItems="center"
        shrink="0"
        height="68px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "UserProfile")}
      >
        <Flex
          gap="10px"
          width="94px"
          alignItems="flex-start"
          shrink="0"
          height="24px"
          position="relative"
          padding="0px 0px 0px 0px"
          onClick={() => {
            frameUserNameOnClick();
          }}
          {...getOverrideProps(overrides, "FrameUserName")}
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
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${""}${"Hello"}`}
            onClick={() => {
              userNameOnClick();
            }}
            {...getOverrideProps(overrides, "UserName")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          height="68px"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "FrameUserImage")}
        >
          <Image
            width="48px"
            height="48px"
            shrink="0"
            position="relative"
            borderRadius="12px"
            padding="0px 0px 0px 0px"
            src="https://www.flaticon.com/free-icon/profile_3135715"
            {...getOverrideProps(overrides, "UserImage")}
          ></Image>
        </Flex>
      </Flex>
    </Flex>
  );
}
