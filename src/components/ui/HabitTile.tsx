import React from "react";
import { Box, Flex, Stack, Text } from "@chakra-ui/core";

interface HabitTileProps {
  theme: "default" | "dark" | "peach" | "blue" | "green" | "red";
  progressAmount: number;
  streakAmount: number;
  streakUnit: "days" | "day";
  xpAmount: number;
  name: string;
}

const HabitTile: React.FC<HabitTileProps> = (props) => {
  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      backgroundColor={`habitTile.${props.theme}.background`}
      rounded="24px"
      width="140px"
      boxSizing="border-box"
      maxWidth="140px"
      padding={5}
      height="140px"
    >
      <Box
        minWidth={5}
        minHeight={5}
        borderRadius={100}
        maxWidth={5}
        maxHeight={5}
        backgroundColor={`habitTile.${props.theme}.progress`}
      />
      <Stack spacing={1}>
        <Flex direction="row" alignItems="flex-start">
          <Text
            fontSize="30px"
            fontWeight="bold"
            margin="0"
            lineHeight={0.8}
            color={`habitTile.${props.theme}.streakAmount`}
          >
            {props.streakAmount}
          </Text>
          <Text
            fontSize="10px"
            fontWeight="500"
            alignSelf="flex-end"
            margin={0}
            marginLeft={1}
            marginBottom="-0.1rem"
            color={`habitTile.${props.theme}.streakUnit`}
          >
            {props.streakUnit}
          </Text>
        </Flex>
        <Flex direction="row" alignItems="flex-start">
          <Text
            as="h1"
            fontSize="20px"
            fontWeight="bold"
            margin="0"
            lineHeight={0.8}
            color={`habitTile.${props.theme}.xpAmount`}
          >
            {props.xpAmount}
          </Text>
          <Text
            fontSize="8px"
            alignSelf="flex-end"
            fontWeight="500"
            margin={0}
            marginLeft="0.18rem"
            marginBottom="-0.1rem"
            color={`habitTile.${props.theme}.xpUnit`}
          >
            xp
          </Text>
        </Flex>
      </Stack>
      <Text
        fontSize="12px"
        color={`habitTile.${props.theme}.name`}
        fontWeight="bold"
        marginBottom={-1}
      >
        {props.name}
      </Text>
    </Flex>
  );
};

export default HabitTile;
