import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

export const HeaderLink = ({ children, ...props }) => (
    <Link
        as={RouterLink}
        borderRadius="10px"
        m="5px 10px"
        p="10px 20px"
        color="white"
        textDecoration="none"
        transitionDuration="0.25s"
        fontFamily="Arial, sans-serif"
        fontSize="large"
        fontWeight="bold"
        _hover={{
            bgColor: "rgba(0, 0, 0, 0.2)"
        }}
        {...props}
    >
        {children}
    </Link>
);
