/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Facebooklogo from "./Facebooklogo";
import { Flex, View } from "@aws-amplify/ui-react";
export default function BtnFacebook(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      width="189px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(50,64,123,1)"
      borderRadius="24px"
      padding="7px 15px 7px 15px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "BtnFacebook")}
    >
      <View
        width="79px"
        height="19px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 3209")}
      >
        <View
          padding="0px 0px 0px 0px"
          position="absolute"
          top="1.77%"
          bottom="17.56%"
          left="0.63%"
          right="-0.63%"
          {...getOverrideProps(overrides, "Group")}
        >
          <Facebooklogo
            width="79px"
            height="15.33px"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Facebooklogo")}
          ></Facebooklogo>
        </View>
      </View>
    </Flex>
  );
}
