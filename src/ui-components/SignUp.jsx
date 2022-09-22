/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { User } from "../models";
import { schema } from "../models/schema";
import {
  CheckboxField,
  Flex,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import BtnGoogle from "./BtnGoogle";
import BtnFacebook from "./BtnFacebook";
export default function SignUp(props) {
  const { overrides, ...rest } = props;
  const [textFieldEmailValue, setTextFieldEmailValue] =
    useStateMutationAction("");
  const [textFieldPwdValue, setTextFieldPwdValue] = useStateMutationAction("");
  const [textFieldPhoneValue, setTextFieldPhoneValue] =
    useStateMutationAction("");
  const labelThreeFourFiveSevenThreeFiveZeroSevenOnClick = useNavigateAction({
    type: "url",
    url: "",
  });
  const labelThreeFourFiveSevenThreeFourNineEightOnClick = useNavigateAction({
    type: "url",
    url: "",
  });
  const btnCreateAccountOnClick = useDataStoreCreateAction({
    fields: {},
    model: User,
    schema: schema,
  });
  const labelAccountOnClick = useDataStoreCreateAction({
    fields: {
      Username: textFieldEmailValue,
      Password: textFieldPwdValue,
      Email: textFieldEmailValue,
      Phone: textFieldPhoneValue,
    },
    model: User,
    schema: schema,
  });
  return (
    <Flex
      gap="41px"
      direction="column"
      width="1567px"
      height="1100px"
      alignItems="center"
      position="relative"
      padding="49px 484px 49px 484px"
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
        {...getOverrideProps(overrides, "labelTitle")}
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
        value={textFieldEmailValue}
        onChange={(event) => {
          setTextFieldEmailValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextFieldEmail")}
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
        value={textFieldPhoneValue}
        onChange={(event) => {
          setTextFieldPhoneValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextFieldPhone")}
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
        {...getOverrideProps(overrides, "TextFieldUsername")}
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
        value={textFieldPwdValue}
        onChange={(event) => {
          setTextFieldPwdValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextFieldPwd")}
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
        {...getOverrideProps(overrides, "TextFieldConfirmPwd")}
      ></TextField>
      <View
        width="601px"
        height="56px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "FrameAgreement34573511")}
      >
        <Flex
          gap="10px"
          position="absolute"
          top="6px"
          left="0px"
          direction="column"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "FrameAgreement34573510")}
        >
          <CheckboxField
            display="flex"
            gap="12px"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            label="I hereby agree to  "
            size="large"
            defaultChecked={true}
            isDisabled={false}
            labelPosition="end"
            {...getOverrideProps(overrides, "CheckboxField")}
          ></CheckboxField>
        </Flex>
        <Flex
          gap="10px"
          position="absolute"
          top="16px"
          left="220px"
          alignItems="flex-start"
          borderRadius="4px"
          padding="0px 5px 0px 5px"
          {...getOverrideProps(overrides, "ButtonPrivacyPolicy")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(92,102,112,1)"
            lineHeight="30px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Privacy Policy"
            onClick={() => {
              labelThreeFourFiveSevenThreeFiveZeroSevenOnClick();
            }}
            {...getOverrideProps(overrides, "label34573507")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          position="absolute"
          top="16px"
          left="372px"
          alignItems="flex-start"
          borderRadius="4px"
          padding="0px 5px 0px 5px"
          {...getOverrideProps(overrides, "ButtonTerms")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(92,102,112,1)"
            lineHeight="30px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="and Terms of use"
            onClick={() => {
              labelThreeFourFiveSevenThreeFourNineEightOnClick();
            }}
            {...getOverrideProps(overrides, "label34573498")}
          ></Text>
        </Flex>
      </View>
      <Flex
        gap="10px"
        width="396px"
        height="45px"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "FrameButtonLogin")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(50,64,123,0.87)"
          lineHeight="30px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-end"
          width="248px"
          height="30px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Already have an account? "
          {...getOverrideProps(overrides, "label31592603")}
        ></Text>
        <Flex
          gap="10px"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          height="30px"
          position="relative"
          borderRadius="4px"
          padding="0px 5px 0px 5px"
          {...getOverrideProps(overrides, "ButtonLogin")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(92,102,112,1)"
            lineHeight="30px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Login"
            {...getOverrideProps(overrides, "label34533460")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        shrink="0"
        position="relative"
        padding="12px 187px 12px 187px"
        {...getOverrideProps(overrides, "FrameCreateAccount")}
      >
        <View
          width="194px"
          height="46px"
          shrink="0"
          overflow="hidden"
          position="relative"
          border="1px SOLID rgba(0,0,0,0)"
          borderRadius="24px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(50,64,123,1)"
          onClick={() => {
            btnCreateAccountOnClick();
          }}
          {...getOverrideProps(overrides, "BtnCreateAccount")}
        >
          <Text
            fontFamily="Poppins"
            fontSize="20px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="30px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="calc(50% - 15px - 0px)"
            left="16px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Create Account"
            onClick={() => {
              labelAccountOnClick();
            }}
            {...getOverrideProps(overrides, "labelAccount")}
          ></Text>
        </View>
      </Flex>
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
