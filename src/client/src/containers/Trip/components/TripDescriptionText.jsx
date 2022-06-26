import React from "react"
import { Text } from "@chakra-ui/react"

export const TripDescriptionText = ({ children, ...props }) => (
    <Text
        my="16px"
        {...props}
    >
        {children}
    </Text>
)