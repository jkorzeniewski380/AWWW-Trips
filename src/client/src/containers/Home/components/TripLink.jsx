import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

export const TripLink = ({ children, ...props }) => (
    <Link
        as={RouterLink}
        {...props}
    >
        {children}
    </Link>
);
