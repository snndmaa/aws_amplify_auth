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
  CheckboxField,
  Flex,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import BtnGoogle from "./BtnGoogle";
import BtnFacebook from "./BtnFacebook";
export default function DesktopLogin(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1012px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "DesktopLogin")}
    >
      <Text
        fontFamily="Inter"
        fontSize="39px"
        fontWeight="400"
        color="rgba(50,64,123,1)"
        lineHeight="30px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="400px"
        position="absolute"
        top="55px"
        left="520px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Login"
        {...getOverrideProps(overrides, "Login")}
      ></Text>
      <TextField
        display="flex"
        position="absolute"
        top="235px"
        left="484px"
        direction="column"
        width="472px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        placeholder="Email Address Or Phone Or Username"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField31628648")}
      ></TextField>
      <TextField
        display="flex"
        position="absolute"
        top="301px"
        left="484px"
        direction="column"
        width="472px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        placeholder="Password"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField31632470")}
      ></TextField>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(50,64,123,0.87)"
        lineHeight="30px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="120px"
        left="604px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Login to your  account"
        {...getOverrideProps(overrides, "label31628655")}
      ></Text>
      <CheckboxField
        display="flex"
        gap="12px"
        position="absolute"
        top="367px"
        left="510px"
        width="420px"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        label="Remember me"
        size="large"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="end"
        {...getOverrideProps(overrides, "CheckboxField")}
      ></CheckboxField>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="417px"
        left="484px"
        width="472px"
        justifyContent="center"
        alignItems="center"
        borderRadius="24px"
        backgroundColor="rgba(50,64,123,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Login To Elink Swap"
        {...getOverrideProps(overrides, "Btn")}
      ></Button>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(50,64,123,0.87)"
        lineHeight="30px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        textDecoration="underline"
        position="absolute"
        top="484px"
        left="655px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Forgot Password?"
        {...getOverrideProps(overrides, "label31632489")}
      ></Text>
      <Flex
        gap="36px"
        position="absolute"
        top="549px"
        left="520px"
        alignItems="flex-start"
        padding="8px 9px 8px 9px"
        {...getOverrideProps(overrides, "Frame 419")}
      >
        <BtnGoogle
          display="flex"
          gap="0"
          width="189px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="37px"
          position="relative"
          border="1px SOLID rgba(50,64,123,1)"
          borderRadius="24px"
          padding="7px 15px 7px 15px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "BtnGoogle")}
        ></BtnGoogle>
        <BtnFacebook
          display="flex"
          gap="0"
          width="189px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="35px"
          position="relative"
          border="1px SOLID rgba(50,64,123,1)"
          borderRadius="24px"
          padding="7px 15px 7px 15px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "BtnFacebook")}
        ></BtnFacebook>
      </Flex>
    </View>
  );
}
