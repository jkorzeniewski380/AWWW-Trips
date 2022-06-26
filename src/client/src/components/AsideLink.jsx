import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

export const AsideLink = (props) => (
    <Link
        as={RouterLink}
        _after={{
            content: `">>"`
        }}
        {...props}
    />
);