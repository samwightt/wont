import React from "react";
import { useUser } from "reactfire";
import Container from "components/ui/Container";
import { Box, Heading, Text, Flex, Button } from "@chakra-ui/core";
import CreateHabitForm from "components/forms/CreateHabit";
import { useDisclosure } from "@chakra-ui/core";
import { useUserHabits, useToggleHabitCompletion } from "data/habits";

interface UserType {
  displayName: string;
  uid: string;
}

const Home = () => {
  const user = useUser<UserType>();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const habits = useUserHabits();
  const toggleHabit = useToggleHabitCompletion();

  return (
    <div>
      <Box backgroundColor="gray.100" py="32">
        <Container>
          <Heading>Welcome back, {user.displayName?.split(" ")[0]}.</Heading>
          <Text mt="1">Your habits are waiting for you. Finish them now.</Text>
        </Container>
      </Box>
      <Container py="16">
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading size="lg">Your Habits</Heading>
          <Button onClick={onOpen} variantColor="green">
            Start a habit
          </Button>
        </Flex>
        {habits.map((habit, index) => (
          <div key={index}>
            <h1>{habit.current_details.name}</h1>
            <h2>{habit.streak}</h2>
            <h2>{habit.timezone}</h2>
            <button onClick={() => toggleHabit(habit)}>Toggle</button>
          </div>
        ))}
      </Container>
      <CreateHabitForm
        onClose={onClose}
        onCreateHabit={onClose}
        isOpen={isOpen}
      />
    </div>
  );
};

export default Home;
