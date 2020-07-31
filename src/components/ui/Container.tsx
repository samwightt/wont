import React from "react";
import { BoxProps, Box, useTheme } from "@chakra-ui/core";

const Container: React.FC<BoxProps> = ({ children, ...props }) => {
  const theme = useTheme();

  return (
    <Box
      {...props}
      mx="auto"
      w={["full", "full", ...(theme.breakpoints as any[]).slice(1)]}
    >
      {children}
    </Box>
  );
};

export default Container;
