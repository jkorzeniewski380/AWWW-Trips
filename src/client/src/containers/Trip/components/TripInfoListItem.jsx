import React from "react";
import { ListItem } from "@chakra-ui/react";

export const TripInfoListItem = ({ children, ...props }) => (
    <ListItem
        _before={{
            pr: "5px",
            content: `"-"`
        }}
        sx={{
            textIndent: "-5px"
        }}
        {...props}
    >
        {children}
    </ListItem>
);