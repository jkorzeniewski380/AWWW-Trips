import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

export const TripNavigationLink = ({ children, to, ...props }) => (
    <Link
        as={RouterLink}
        bgColor="bisque"
        border="solid 1px black"
        p="3px"
        _hover={{
            bgColor: 'rgba(0,0,0,0.2)'
        }}
        _first={{
            _before: {
                content: `"< "`
            }
        }}
        _last={{
            _after: {
                content: `" >"`
            }
        }}
        to={to}
        {...props}
    >
        {children}
    </Link>
);