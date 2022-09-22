/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function DashboardOrderBook(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(241,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "DashboardOrderBook")}
    >
      <View
        width="1185px"
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
          children="Order Book"
          {...getOverrideProps(overrides, "Order Book")}
        ></Text>
        <Flex
          gap="16px"
          position="absolute"
          top="246px"
          left="93px"
          direction="column"
          width="999px"
          borderRadius="3px"
          padding="24px 0px 16px 24px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Frame 84")}
        >
          <Flex
            gap="46px"
            width="753px"
            height="45px"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 24px 0px 0px"
            {...getOverrideProps(overrides, "Frame 71")}
          >
            <Flex
              gap="75px"
              width="196px"
              alignItems="center"
              shrink="0"
              height="40px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 7833003825")}
            >
              <Flex
                padding="0px 0px 0px 0px"
                width="40px"
                height="40px"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Profile Avatar33003826")}
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
                  {...getOverrideProps(overrides, "Ellipse33003827")}
                ></Icon>
                <Text
                  fontFamily="Poppins"
                  fontSize="18px"
                  fontWeight="400"
                  color="rgba(255,255,255,1)"
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
                  {...getOverrideProps(overrides, "U33003828")}
                ></Text>
              </Flex>
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="500"
                color="rgba(112,126,174,1)"
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
                {...getOverrideProps(overrides, "NGN/USD33003829")}
              ></Text>
            </Flex>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
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
              {...getOverrideProps(overrides, "1 minutes ago33003830")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
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
              {...getOverrideProps(overrides, "56033003831")}
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
              {...getOverrideProps(overrides, "Increase33003832")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(39,79,199,1)"
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
                children="Swap"
                {...getOverrideProps(overrides, "Increase Value33003833")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              width="129px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="6px 0px 6px 0px"
              backgroundColor="rgba(174,179,183,1)"
              {...getOverrideProps(overrides, "Increase33003834")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
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
                children="NEgotiate"
                {...getOverrideProps(overrides, "Increase Value33003835")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="46px"
            width="753px"
            height="45px"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 24px 0px 0px"
            {...getOverrideProps(overrides, "Frame 72")}
          >
            <Flex
              gap="75px"
              width="196px"
              alignItems="center"
              shrink="0"
              height="40px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 7833003837")}
            >
              <Flex
                padding="0px 0px 0px 0px"
                width="40px"
                height="40px"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Profile Avatar33003838")}
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
                  {...getOverrideProps(overrides, "Ellipse33003839")}
                ></Icon>
                <Text
                  fontFamily="Poppins"
                  fontSize="18px"
                  fontWeight="400"
                  color="rgba(255,255,255,1)"
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
                  {...getOverrideProps(overrides, "U33003840")}
                ></Text>
              </Flex>
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="500"
                color="rgba(112,126,174,1)"
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
                {...getOverrideProps(overrides, "NGN/USD33003841")}
              ></Text>
            </Flex>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
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
              {...getOverrideProps(overrides, "1 minutes ago33003842")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
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
              {...getOverrideProps(overrides, "56033003843")}
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
              {...getOverrideProps(overrides, "Increase33003844")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(39,79,199,1)"
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
                children="Swap"
                {...getOverrideProps(overrides, "Increase Value33003845")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              width="129px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="6px 0px 6px 0px"
              backgroundColor="rgba(174,179,183,1)"
              {...getOverrideProps(overrides, "Increase33003846")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
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
                children="NEgotiate"
                {...getOverrideProps(overrides, "Increase Value33003847")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="46px"
            width="753px"
            height="45px"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 24px 0px 0px"
            {...getOverrideProps(overrides, "Frame 73")}
          >
            <Flex
              gap="75px"
              width="196px"
              alignItems="center"
              shrink="0"
              height="40px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 7833003849")}
            >
              <Flex
                padding="0px 0px 0px 0px"
                width="40px"
                height="40px"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Profile Avatar33003850")}
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
                  {...getOverrideProps(overrides, "Ellipse33003851")}
                ></Icon>
                <Text
                  fontFamily="Poppins"
                  fontSize="18px"
                  fontWeight="400"
                  color="rgba(255,255,255,1)"
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
                  {...getOverrideProps(overrides, "U33003852")}
                ></Text>
              </Flex>
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="500"
                color="rgba(112,126,174,1)"
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
                {...getOverrideProps(overrides, "NGN/USD33003853")}
              ></Text>
            </Flex>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
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
              {...getOverrideProps(overrides, "1 minutes ago33003854")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
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
              {...getOverrideProps(overrides, "56033003855")}
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
              {...getOverrideProps(overrides, "Increase33003856")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(39,79,199,1)"
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
                children="Swap"
                {...getOverrideProps(overrides, "Increase Value33003857")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              width="129px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="6px 0px 6px 0px"
              backgroundColor="rgba(174,179,183,1)"
              {...getOverrideProps(overrides, "Increase33003858")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
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
                children="NEgotiate"
                {...getOverrideProps(overrides, "Increase Value33003859")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="46px"
            width="753px"
            height="45px"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 24px 0px 0px"
            {...getOverrideProps(overrides, "Frame 74")}
          >
            <Flex
              gap="75px"
              width="196px"
              alignItems="center"
              shrink="0"
              height="40px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 7833003861")}
            >
              <Flex
                padding="0px 0px 0px 0px"
                width="40px"
                height="40px"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Profile Avatar33003862")}
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
                  {...getOverrideProps(overrides, "Ellipse33003863")}
                ></Icon>
                <Text
                  fontFamily="Poppins"
                  fontSize="18px"
                  fontWeight="400"
                  color="rgba(255,255,255,1)"
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
                  {...getOverrideProps(overrides, "U33003864")}
                ></Text>
              </Flex>
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="500"
                color="rgba(112,126,174,1)"
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
                {...getOverrideProps(overrides, "NGN/USD33003865")}
              ></Text>
            </Flex>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
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
              {...getOverrideProps(overrides, "1 minutes ago33003866")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
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
              {...getOverrideProps(overrides, "56033003867")}
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
              {...getOverrideProps(overrides, "Increase33003868")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(39,79,199,1)"
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
                children="Swap"
                {...getOverrideProps(overrides, "Increase Value33003869")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              width="129px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="6px 0px 6px 0px"
              backgroundColor="rgba(174,179,183,1)"
              {...getOverrideProps(overrides, "Increase33003870")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
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
                children="NEgotiate"
                {...getOverrideProps(overrides, "Increase Value33003871")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="46px"
            width="753px"
            height="45px"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 24px 0px 0px"
            {...getOverrideProps(overrides, "Frame 75")}
          >
            <Flex
              gap="75px"
              width="196px"
              alignItems="center"
              shrink="0"
              height="40px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 7833003873")}
            >
              <Flex
                padding="0px 0px 0px 0px"
                width="40px"
                height="40px"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Profile Avatar33003874")}
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
                  {...getOverrideProps(overrides, "Ellipse33003875")}
                ></Icon>
                <Text
                  fontFamily="Poppins"
                  fontSize="18px"
                  fontWeight="400"
                  color="rgba(255,255,255,1)"
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
                  {...getOverrideProps(overrides, "U33003876")}
                ></Text>
              </Flex>
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="500"
                color="rgba(112,126,174,1)"
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
                {...getOverrideProps(overrides, "NGN/USD33003877")}
              ></Text>
            </Flex>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
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
              {...getOverrideProps(overrides, "1 minutes ago33003878")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
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
              {...getOverrideProps(overrides, "56033003879")}
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
              {...getOverrideProps(overrides, "Increase33003880")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(39,79,199,1)"
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
                children="Swap"
                {...getOverrideProps(overrides, "Increase Value33003881")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              width="129px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="6px 0px 6px 0px"
              backgroundColor="rgba(174,179,183,1)"
              {...getOverrideProps(overrides, "Increase33003882")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
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
                children="NEgotiate"
                {...getOverrideProps(overrides, "Increase Value33003883")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="46px"
            width="753px"
            height="45px"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 24px 0px 0px"
            {...getOverrideProps(overrides, "Frame 76")}
          >
            <Flex
              gap="75px"
              width="196px"
              alignItems="center"
              shrink="0"
              height="40px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 7833003885")}
            >
              <Flex
                padding="0px 0px 0px 0px"
                width="40px"
                height="40px"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Profile Avatar33003886")}
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
                  {...getOverrideProps(overrides, "Ellipse33003887")}
                ></Icon>
                <Text
                  fontFamily="Poppins"
                  fontSize="18px"
                  fontWeight="400"
                  color="rgba(255,255,255,1)"
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
                  {...getOverrideProps(overrides, "U33003888")}
                ></Text>
              </Flex>
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="500"
                color="rgba(112,126,174,1)"
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
                {...getOverrideProps(overrides, "NGN/USD33003889")}
              ></Text>
            </Flex>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
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
              {...getOverrideProps(overrides, "1 minutes ago33003890")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
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
              {...getOverrideProps(overrides, "56033003891")}
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
              {...getOverrideProps(overrides, "Increase33003892")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(39,79,199,1)"
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
                children="Swap"
                {...getOverrideProps(overrides, "Increase Value33003893")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              width="129px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="6px 0px 6px 0px"
              backgroundColor="rgba(174,179,183,1)"
              {...getOverrideProps(overrides, "Increase33003894")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
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
                children="NEgotiate"
                {...getOverrideProps(overrides, "Increase Value33003895")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="46px"
            width="753px"
            height="45px"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 24px 0px 0px"
            {...getOverrideProps(overrides, "Frame 77")}
          >
            <Flex
              gap="75px"
              width="196px"
              alignItems="center"
              shrink="0"
              height="40px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 7833003897")}
            >
              <Flex
                padding="0px 0px 0px 0px"
                width="40px"
                height="40px"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Profile Avatar33003898")}
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
                  {...getOverrideProps(overrides, "Ellipse33003899")}
                ></Icon>
                <Text
                  fontFamily="Poppins"
                  fontSize="18px"
                  fontWeight="400"
                  color="rgba(255,255,255,1)"
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
                  {...getOverrideProps(overrides, "U33003900")}
                ></Text>
              </Flex>
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="500"
                color="rgba(112,126,174,1)"
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
                {...getOverrideProps(overrides, "NGN/USD33003901")}
              ></Text>
            </Flex>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
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
              {...getOverrideProps(overrides, "1 minutes ago33003902")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
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
              {...getOverrideProps(overrides, "56033003903")}
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
              {...getOverrideProps(overrides, "Increase33003904")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(39,79,199,1)"
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
                children="Swap"
                {...getOverrideProps(overrides, "Increase Value33003905")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              width="129px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="6px 0px 6px 0px"
              backgroundColor="rgba(174,179,183,1)"
              {...getOverrideProps(overrides, "Increase33003906")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
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
                children="NEgotiate"
                {...getOverrideProps(overrides, "Increase Value33003907")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="46px"
            width="753px"
            height="45px"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 24px 0px 0px"
            {...getOverrideProps(overrides, "Frame 7833003908")}
          >
            <Flex
              gap="75px"
              width="196px"
              alignItems="center"
              shrink="0"
              height="40px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 7833003909")}
            >
              <Flex
                padding="0px 0px 0px 0px"
                width="40px"
                height="40px"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Profile Avatar33003910")}
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
                  {...getOverrideProps(overrides, "Ellipse33003911")}
                ></Icon>
                <Text
                  fontFamily="Poppins"
                  fontSize="18px"
                  fontWeight="400"
                  color="rgba(255,255,255,1)"
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
                  {...getOverrideProps(overrides, "U33003912")}
                ></Text>
              </Flex>
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="500"
                color="rgba(112,126,174,1)"
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
                {...getOverrideProps(overrides, "NGN/USD33003913")}
              ></Text>
            </Flex>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
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
              {...getOverrideProps(overrides, "1 minutes ago33003914")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
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
              {...getOverrideProps(overrides, "56033003915")}
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
              {...getOverrideProps(overrides, "Increase33003916")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(39,79,199,1)"
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
                children="Swap"
                {...getOverrideProps(overrides, "Increase Value33003917")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              width="129px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="6px 0px 6px 0px"
              backgroundColor="rgba(174,179,183,1)"
              {...getOverrideProps(overrides, "Increase33003918")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
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
                children="NEgotiate"
                {...getOverrideProps(overrides, "Increase Value33003919")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="46px"
            width="753px"
            height="45px"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 24px 0px 0px"
            {...getOverrideProps(overrides, "Frame 79")}
          >
            <Flex
              gap="75px"
              width="196px"
              alignItems="center"
              shrink="0"
              height="40px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 7833003921")}
            >
              <Flex
                padding="0px 0px 0px 0px"
                width="40px"
                height="40px"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Profile Avatar33003922")}
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
                  {...getOverrideProps(overrides, "Ellipse33003923")}
                ></Icon>
                <Text
                  fontFamily="Poppins"
                  fontSize="18px"
                  fontWeight="400"
                  color="rgba(255,255,255,1)"
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
                  {...getOverrideProps(overrides, "U33003924")}
                ></Text>
              </Flex>
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="500"
                color="rgba(112,126,174,1)"
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
                {...getOverrideProps(overrides, "NGN/USD33003925")}
              ></Text>
            </Flex>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
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
              {...getOverrideProps(overrides, "1 minutes ago33003926")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
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
              {...getOverrideProps(overrides, "56033003927")}
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
              {...getOverrideProps(overrides, "Increase33003928")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(39,79,199,1)"
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
                children="Swap"
                {...getOverrideProps(overrides, "Increase Value33003929")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              width="129px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="6px 0px 6px 0px"
              backgroundColor="rgba(174,179,183,1)"
              {...getOverrideProps(overrides, "Increase33003930")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
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
                children="NEgotiate"
                {...getOverrideProps(overrides, "Increase Value33003931")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="46px"
            width="753px"
            height="45px"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 24px 0px 0px"
            {...getOverrideProps(overrides, "Frame 80")}
          >
            <Flex
              gap="75px"
              width="196px"
              alignItems="center"
              shrink="0"
              height="40px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 7833003933")}
            >
              <Flex
                padding="0px 0px 0px 0px"
                width="40px"
                height="40px"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Profile Avatar33003934")}
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
                  {...getOverrideProps(overrides, "Ellipse33003935")}
                ></Icon>
                <Text
                  fontFamily="Poppins"
                  fontSize="18px"
                  fontWeight="400"
                  color="rgba(255,255,255,1)"
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
                  {...getOverrideProps(overrides, "U33003936")}
                ></Text>
              </Flex>
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="500"
                color="rgba(112,126,174,1)"
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
                {...getOverrideProps(overrides, "NGN/USD33003937")}
              ></Text>
            </Flex>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
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
              {...getOverrideProps(overrides, "1 minutes ago33003938")}
            ></Text>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="500"
              color="rgba(112,126,174,1)"
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
              {...getOverrideProps(overrides, "56033003939")}
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
              {...getOverrideProps(overrides, "Increase33003940")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(39,79,199,1)"
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
                children="Swap"
                {...getOverrideProps(overrides, "Increase Value33003941")}
              ></Text>
            </Flex>
            <Flex
              gap="10px"
              width="129px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="6px 0px 6px 0px"
              backgroundColor="rgba(174,179,183,1)"
              {...getOverrideProps(overrides, "Increase33003942")}
            >
              <Text
                fontFamily="Poppins"
                fontSize="16px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
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
                children="NEgotiate"
                {...getOverrideProps(overrides, "Increase Value33003943")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="20px"
          position="absolute"
          top="854.5px"
          left="204px"
          justifyContent="center"
          alignItems="center"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Pagination")}
        >
          <View
            width="30px"
            height="30px"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(188,188,188,1)"
            borderRadius="100px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "circle32953966")}
          ></View>
          <View
            width="30px"
            height="30px"
            shrink="0"
            position="relative"
            borderRadius="6px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "square32953967")}
          ></View>
          <View
            width="30px"
            height="30px"
            shrink="0"
            position="relative"
            borderRadius="6px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "square32953968")}
          ></View>
          <View
            width="30px"
            height="30px"
            shrink="0"
            position="relative"
            borderRadius="6px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "square32953969")}
          ></View>
          <View
            width="30px"
            height="30px"
            shrink="0"
            position="relative"
            borderRadius="6px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "square32953970")}
          ></View>
          <View
            width="30px"
            height="30px"
            shrink="0"
            position="relative"
            borderRadius="6px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "square32953971")}
          ></View>
          <View
            width="24px"
            height="24px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "chevron left")}
          ></View>
          <View
            width="30px"
            height="30px"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(188,188,188,1)"
            borderRadius="100px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "circle32953973")}
          ></View>
          <View
            width="24px"
            height="24px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "chevron right")}
          ></View>
        </Flex>
        <Flex
          gap="20px"
          position="absolute"
          top="calc(50% - 22px - 323.5px)"
          left="calc(50% - 241.5px - 0px)"
          justifyContent="center"
          alignItems="center"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 28")}
        >
          <Flex
            gap="20px"
            width="60px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            border="1px SOLID rgba(224,224,224,1)"
            borderRadius="10px"
            padding="9px 19px 9px 19px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Frame 24")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Component 17")}
            ></View>
          </Flex>
          <Flex
            gap="10px"
            width="183px"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            height="44px"
            position="relative"
            border="1px SOLID rgba(224,224,224,1)"
            borderRadius="10px"
            padding="9px 19px 9px 19px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Frame 22")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Component 16")}
            ></View>
            <Text
              fontFamily="Roboto"
              fontSize="14px"
              fontWeight="400"
              color="rgba(117,125,138,1)"
              lineHeight="16.40625px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Sort: Chronological"
              {...getOverrideProps(overrides, "Sort: Chronological")}
            ></Text>
          </Flex>
          <Flex
            gap="20px"
            width="200px"
            justifyContent="space-between"
            alignItems="center"
            shrink="0"
            height="44px"
            position="relative"
            border="1px SOLID rgba(224,224,224,1)"
            borderRadius="10px"
            padding="9px 19px 9px 19px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Frame 23")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Component 15")}
            ></View>
            <Text
              fontFamily="Roboto"
              fontSize="14px"
              fontWeight="400"
              color="rgba(117,125,138,1)"
              lineHeight="16.40625px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Today"
              {...getOverrideProps(overrides, "Today")}
            ></Text>
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Component 14")}
            ></View>
          </Flex>
        </Flex>
      </View>
    </Flex>
  );
}
