import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { Flex, Heading, Box, Stack, Link } from "@chakra-ui/core";
import { useAuth } from "reactfire";
import Container from "components/ui/Container";

const ApplicationLayout: React.FC = (props) => {
  const auth = useAuth();

  return (
    <div>
      <Box shadow="sm">
        <Container>
          <Flex
            px="6"
            py="5"
            direction="row"
            width="full"
            justifyItems="items-center"
            justifyContent="space-between"
          >
            <Heading fontSize="xl">wont</Heading>
            <Stack isInline spacing={4} align="center">
              <Box>
                <RouteLink to="/">Home</RouteLink>
              </Box>
              <Box>
                <Link onClick={() => auth.signOut()}>Logout</Link>
              </Box>
            </Stack>
          </Flex>
        </Container>
      </Box>
      {props.children}
    </div>
  );
};

export default ApplicationLayout;
