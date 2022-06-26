import React from "react";
import { Td } from "@chakra-ui/react";

export const CostsTd = ({ children, ...props }) => (
    <Td
        p="3px"
        borderTop="solid 2px #0A0099"
        {...props}
    >
        {children}
    </Td>
);