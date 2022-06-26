import React from "react";
import { Flex } from "@chakra-ui/react";

export const TripsWrapper = ({ children, ...props }) => (
    <Flex
        direction="column"
        h="100%"
        minW={{ base: "300px", sm: "570px" }}
        maxW={{ base: "300px", sm: "570px" }}
        mr={{ base: 0, md: "20px" }}
        {...props}
    >
        {children}
    </Flex>
);