import React from "react";
import { Flex, Image, Heading, Text } from "@chakra-ui/react";
import { TripLink } from "./TripLink";
import { getTripRoute, getBookRoute } from "../../../routes";

export const Trip = ({
    id: pk, obrazek: image, obrazek_tekst: imageAlt,
    nazwa: title, opis: description, cena: price
}) => (
    <Flex
        direction={{ base: "column", sm: "row" }}
        align="center"
        m="20px 0"
        minH="120px"
        gap="1rem"
    >
        <TripLink to={getTripRoute(pk)}>
            <Image
                w="130px"
                h="100px"
                objectFit="fill"
                src={image}
                alt={imageAlt}
            />
        </TripLink>
        <Flex
            minH="120px"
            w={{ base: "100%", sm: "400px" }}
            direction="column"
            justify="space-evenly"
        >
            <TripLink to={getTripRoute(pk)}>
                <Heading as="h1">
                    {title}
                </Heading>
            </TripLink>
            <Text>{description}</Text>
            <Flex
                align="flex-start"
                justify="space-between"
            >
                <Text>Cena: {price}</Text>
                <TripLink
                    to={getBookRoute(pk)}
                    _after={{
                        content: `">>"`
                    }}
                >
                    Zarezerwuj
                </TripLink>
            </Flex>
        </Flex>
    </Flex>
);
