/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function FundSuccess(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="53px"
      direction="column"
      width="523px"
      height="428px"
      alignItems="center"
      position="relative"
      borderRadius="10.559999465942383px"
      padding="45px 55px 45px 49px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "FundSuccess")}
    >
      <View
        width="100px"
        height="100px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "icon-park-outline:success")}
      >
        <View
          padding="0px 0px 0px 0px"
          position="absolute"
          top="8.33%"
          bottom="8.33%"
          left="10.37%"
          right="10.37%"
          {...getOverrideProps(overrides, "Group")}
        >
          <Icon
            width="79.254150390625px"
            height="83.33349609375px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 79.254150390625,
              height: 83.33349609375,
            }}
            paths={[
              {
                d: "M39.6271 0L40.8058 -1.61577C40.1035 -2.12808 39.1507 -2.12808 38.4484 -1.61577L39.6271 0ZM50.5708 7.98333L49.3922 9.5991C49.7355 9.84953 50.1496 9.98411 50.5745 9.98333L50.5708 7.98333ZM64.1188 7.95833L66.0221 7.34409C65.7551 6.51682 64.9843 5.95673 64.1151 5.95834L64.1188 7.95833ZM68.2792 20.85L66.3758 21.4643C66.5064 21.8687 66.7624 22.2211 67.1067 22.4703L68.2792 20.85ZM79.2542 28.7917L81.1551 29.4133C81.4253 28.5871 81.1309 27.681 80.4266 27.1714L79.2542 28.7917ZM75.0438 41.6667L73.1428 41.045C73.0107 41.4489 73.0107 41.8844 73.1428 42.2883L75.0438 41.6667ZM79.2542 54.5417L80.4266 56.162C81.1309 55.6524 81.4253 54.7462 81.1551 53.92L79.2542 54.5417ZM68.2792 62.4833L67.1067 60.8631C66.7624 61.1122 66.5064 61.4646 66.3758 61.8691L68.2792 62.4833ZM64.1188 75.375L64.1151 77.375C64.9843 77.3766 65.7551 76.8165 66.0221 75.9893L64.1188 75.375ZM50.5708 75.35L50.5745 73.35C50.1496 73.3492 49.7355 73.4838 49.3922 73.7342L50.5708 75.35ZM39.6271 83.3333L38.4484 84.9491C39.1507 85.4614 40.1035 85.4614 40.8058 84.9491L39.6271 83.3333ZM28.6833 75.35L29.862 73.7342C29.5187 73.4838 29.1046 73.3492 28.6796 73.35L28.6833 75.35ZM15.1354 75.375L13.2321 75.9893C13.4991 76.8165 14.2698 77.3766 15.1391 77.375L15.1354 75.375ZM10.975 62.4833L12.8783 61.8691C12.7478 61.4646 12.4918 61.1122 12.1475 60.8631L10.975 62.4833ZM0 54.5417L-1.90093 53.92C-2.17112 54.7462 -1.8767 55.6524 -1.17246 56.162L0 54.5417ZM4.21042 41.6667L6.11135 42.2883C6.24344 41.8844 6.24344 41.4489 6.11135 41.045L4.21042 41.6667ZM0 28.7917L-1.17246 27.1714C-1.8767 27.681 -2.17112 28.5871 -1.90093 29.4133L0 28.7917ZM10.975 20.85L12.1475 22.4703C12.4918 22.2211 12.7478 21.8687 12.8783 21.4643L10.975 20.85ZM15.1354 7.95833L15.1391 5.95834C14.2698 5.95673 13.4991 6.51682 13.2321 7.34409L15.1354 7.95833ZM28.6833 7.98333L28.6796 9.98333C29.1046 9.98411 29.5187 9.84953 29.862 9.5991L28.6833 7.98333ZM38.4484 1.61577L49.3922 9.5991L51.7495 6.36757L40.8058 -1.61577L38.4484 1.61577ZM50.5745 9.98333L64.1224 9.95833L64.1151 5.95834L50.5671 5.98334L50.5745 9.98333ZM62.2154 8.57258L66.3758 21.4643L70.1825 20.2358L66.0221 7.34409L62.2154 8.57258ZM67.1067 22.4703L78.0817 30.412L80.4266 27.1714L69.4516 19.2297L67.1067 22.4703ZM77.3532 28.17L73.1428 41.045L76.9447 42.2883L81.1551 29.4133L77.3532 28.17ZM73.1428 42.2883L77.3532 55.1633L81.1551 53.92L76.9447 41.045L73.1428 42.2883ZM78.0817 52.9214L67.1067 60.8631L69.4516 64.1036L80.4266 56.162L78.0817 52.9214ZM66.3758 61.8691L62.2154 74.7608L66.0221 75.9893L70.1825 63.0976L66.3758 61.8691ZM64.1224 73.375L50.5745 73.35L50.5671 77.35L64.1151 77.375L64.1224 73.375ZM49.3922 73.7342L38.4484 81.7176L40.8058 84.9491L51.7495 76.9658L49.3922 73.7342ZM40.8058 81.7176L29.862 73.7342L27.5047 76.9658L38.4484 84.9491L40.8058 81.7176ZM28.6796 73.35L15.1317 73.375L15.1391 77.375L28.687 77.35L28.6796 73.35ZM17.0388 74.7608L12.8783 61.8691L9.07166 63.0976L13.2321 75.9893L17.0388 74.7608ZM12.1475 60.8631L1.17246 52.9214L-1.17246 56.162L9.80254 64.1036L12.1475 60.8631ZM1.90093 55.1633L6.11135 42.2883L2.30948 41.045L-1.90093 53.92L1.90093 55.1633ZM6.11135 41.045L1.90093 28.17L-1.90093 29.4133L2.30948 42.2883L6.11135 41.045ZM1.17246 30.412L12.1475 22.4703L9.80254 19.2297L-1.17246 27.1714L1.17246 30.412ZM12.8783 21.4643L17.0388 8.57258L13.2321 7.34409L9.07166 20.2358L12.8783 21.4643ZM15.1317 9.95833L28.6796 9.98333L28.687 5.98334L15.1391 5.95834L15.1317 9.95833ZM29.862 9.5991L40.8058 1.61577L38.4484 -1.61577L27.5047 6.36757L29.862 9.5991Z",
                stroke: "rgba(61,231,0,1)",
                fillRule: "nonzero",
                strokeLinejoin: "round",
                strokeWidth: 4,
              },
            ]}
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vector32674455")}
          ></Icon>
          <Icon
            width="31.25px"
            height="20.83349609375px"
            viewBox={{ minX: 0, minY: 0, width: 31.25, height: 20.83349609375 }}
            paths={[
              {
                d: "M1.41421 9.00245C0.633165 8.2214 -0.633165 8.2214 -1.41421 9.00245C-2.19526 9.7835 -2.19526 11.0498 -1.41421 11.8309L1.41421 9.00245ZM10.4167 20.8333L9.00246 22.2475C9.7835 23.0286 11.0498 23.0286 11.8309 22.2475L10.4167 20.8333ZM32.6642 1.41421C33.4453 0.633165 33.4453 -0.633165 32.6642 -1.41421C31.8832 -2.19526 30.6168 -2.19526 29.8358 -1.41421L32.6642 1.41421ZM-1.41421 11.8309L9.00246 22.2475L11.8309 19.4191L1.41421 9.00245L-1.41421 11.8309ZM11.8309 22.2475L32.6642 1.41421L29.8358 -1.41421L9.00246 19.4191L11.8309 22.2475Z",
                stroke: "rgba(61,231,0,1)",
                fillRule: "nonzero",
                strokeLinejoin: "round",
                strokeWidth: 4,
              },
            ]}
            position="absolute"
            top="37.5%"
            bottom="37.5%"
            left="31.6%"
            right="28.97%"
            {...getOverrideProps(overrides, "Vector32674456")}
          ></Icon>
        </View>
      </View>
      <Text
        fontFamily="Lato"
        fontSize="24px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="28.125px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Congratulations"
        {...getOverrideProps(overrides, "Congratulations")}
      ></Text>
      <Text
        fontFamily="Lato"
        fontSize="18px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Your withdrawal request has been sent&#xA;for processing, it will take some seconds to &#xA;process, please e patient."
        {...getOverrideProps(
          overrides,
          "Your withdrawal request has been sent for processing, it will take some seconds to process, please e patient."
        )}
      ></Text>
    </Flex>
  );
}
