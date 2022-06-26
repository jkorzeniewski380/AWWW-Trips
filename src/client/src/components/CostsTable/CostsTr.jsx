import React from "react";
import { Tr } from "@chakra-ui/react";

export const CostsTr = ({ children, ...props }) => (
    <Tr
        _last={{
            Td: {
                fontWeight: "bold"
            }
        }}
        {...props}
    >
        {children}
    </Tr>
);