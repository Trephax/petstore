/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Pet } from "../models";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function PetProfile(props) {
  const { pet, overrides, ...rest } = props;
  const buttonFourZeroFiveTwoTwoSevenThreeFourOnClick =
    useDataStoreDeleteAction({ model: Pet, id: pet?.id, schema: schema });
  return (
    <Flex
      gap="24px"
      direction="column"
      width="320px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="25px"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(0,0,0,1)"
      {...getOverrideProps(overrides, "PetProfile")}
      {...rest}
    >
      <Button
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="link"
        children="Delete"
        onClick={() => {
          buttonFourZeroFiveTwoTwoSevenThreeFourOnClick();
        }}
        {...getOverrideProps(overrides, "Button40522734")}
      ></Button>
      <Image
        width="160px"
        height="160px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={pet?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Info")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="25px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={pet?.name}
          {...getOverrideProps(overrides, "Name")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(174,179,183,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={pet?.breed}
        {...getOverrideProps(overrides, "Breed")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(174,179,183,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={pet?.age}
        {...getOverrideProps(overrides, "Age")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(174,179,183,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={pet?.about}
        {...getOverrideProps(overrides, "About")}
      ></Text>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Profile"
        {...getOverrideProps(overrides, "Button29766907")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Update"
        {...getOverrideProps(overrides, "Button40522707")}
      ></Button>
    </Flex>
  );
}
