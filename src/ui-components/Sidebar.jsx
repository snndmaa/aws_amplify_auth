/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function Sidebar(props) {
  const { Foo = "Try Home", overrides, ...rest } = props;
  return (
    <Flex
      gap="28px"
      direction="column"
      alignItems="center"
      position="relative"
      padding="112px 32px 112px 32px"
      backgroundColor="rgba(80,213,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Sidebar")}
    >
      <Button
        display="flex"
        gap="0"
        width="202px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="3px SOLID rgba(174,179,183,1)"
        borderRadius="7px"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="default"
        children={Foo && Foo == "Try Home" ? Foo : "Home"}
        {...getOverrideProps(overrides, "ButtonHome")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        width="202px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="3px SOLID rgba(174,179,183,1)"
        borderRadius="7px"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Link Funds"
        {...getOverrideProps(overrides, "ButtonLinkFunds")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        width="202px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="3px SOLID rgba(174,179,183,1)"
        borderRadius="7px"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Deposit"
        {...getOverrideProps(overrides, "ButtonDeposit")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        width="202px"
        height="46px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="3px SOLID rgba(174,179,183,1)"
        borderRadius="7px"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Withdrawal"
        {...getOverrideProps(overrides, "ButtonWithdrawal")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        width="202px"
        height="46px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="3px SOLID rgba(174,179,183,1)"
        borderRadius="7px"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="default"
        children="List  Offer"
        {...getOverrideProps(overrides, "ButtonListOffer")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        width="202px"
        height="46px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="3px SOLID rgba(174,179,183,1)"
        borderRadius="7px"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Activity"
        {...getOverrideProps(overrides, "ButtonActivity")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        width="202px"
        height="46px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="3px SOLID rgba(174,179,183,1)"
        borderRadius="7px"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Portfolio"
        {...getOverrideProps(overrides, "ButtonPortfolio")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        width="202px"
        height="46px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="3px SOLID rgba(174,179,183,1)"
        borderRadius="7px"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="default"
        children="History "
        {...getOverrideProps(overrides, "ButtonHistory")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        width="202px"
        height="46px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="3px SOLID rgba(174,179,183,1)"
        borderRadius="7px"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Profile"
        {...getOverrideProps(overrides, "ButtonProfile")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        width="202px"
        height="46px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="3px SOLID rgba(174,179,183,1)"
        borderRadius="7px"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Settings"
        {...getOverrideProps(overrides, "ButtonSettings")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        width="196px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="3px SOLID rgba(0,0,0,0)"
        padding="5px 13px 5px 13px"
        backgroundColor="rgba(255,114,98,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Logout"
        {...getOverrideProps(overrides, "BtnLogout")}
      ></Button>
    </Flex>
  );
}
