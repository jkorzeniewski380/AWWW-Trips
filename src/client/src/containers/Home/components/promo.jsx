import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { getBookRoute } from "../../../routes";
import { AsideLink } from "../../../components/AsideLink";

export const Promo = ({ name, date, id }) => (
    <Flex
        as="article"
        direction="column"
        mb="10px"
    >
        <Heading
            as="h3"
            alignSelf="flex-start"
            mb="2px"
        >
            {name}
        </Heading>
        <Text
            as="span"
            alignSelf="flex-end"
            mb="2px"
        >
            {date}
        </Text>
        <AsideLink
            alignSelf="flex-end"
            mb="2px"
            to={getBookRoute(id)}
        >
            Rezerwuj
        </AsideLink>
    </Flex>
);
