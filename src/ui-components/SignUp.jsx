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
} from "@aws-amplify/ui-react";
import BtnGoogle from "./BtnGoogle";
import BtnFacebook from "./BtnFacebook";
export default function SignUp(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="41px"
      direction="column"
      alignItems="center"
      position="relative"
      padding="49px 484px 43px 484px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "SignUp")}
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
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Create Account"
        {...getOverrideProps(overrides, "Create Account")}
      ></Text>
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
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Please create your account."
        {...getOverrideProps(overrides, "label31592624")}
      ></Text>
      <TextField
        display="flex"
        direction="column"
        width="472px"
        justifyContent="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        placeholder="Email"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField31552985")}
      ></TextField>
      <TextField
        display="flex"
        direction="column"
        width="472px"
        justifyContent="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        placeholder="Phone"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField31553166")}
      ></TextField>
      <TextField
        display="flex"
        direction="column"
        width="472px"
        justifyContent="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        placeholder="Username"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField31562749")}
      ></TextField>
      <TextField
        display="flex"
        direction="column"
        width="472px"
        justifyContent="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        placeholder="Password"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField31562756")}
      ></TextField>
      <TextField
        display="flex"
        direction="column"
        width="472px"
        justifyContent="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        placeholder="Confirm Password"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField31562763")}
      ></TextField>
      <CheckboxField
        display="flex"
        gap="12px"
        width="420px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        label="I hereby agree to the Website Terms of Use and the Privacy Policy."
        size="large"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="end"
        {...getOverrideProps(overrides, "CheckboxField")}
      ></CheckboxField>
      <Button
        display="flex"
        gap="0"
        width="472px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="24px"
        backgroundColor="rgba(50,64,123,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Create Account"
        {...getOverrideProps(overrides, "Btn31552989")}
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
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Already have an account? Log In!"
        {...getOverrideProps(overrides, "label31592603")}
      ></Text>
      <Flex
        gap="36px"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
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
          {...getOverrideProps(overrides, "Btn31642587")}
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
          {...getOverrideProps(overrides, "Btn31642588")}
        ></BtnFacebook>
      </Flex>
    </Flex>
  );
}
