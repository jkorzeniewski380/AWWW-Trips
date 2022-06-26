import React from "react";
import { UnorderedList } from "@chakra-ui/react";

export const TripInfoListWrapper = ({ children, ...props }) => (
    <UnorderedList listStyleType="none" my="16px" {...props}>
        {children}
    </UnorderedList>
);
