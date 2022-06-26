import { Flex, Spinner, Text, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import React from "react";
import { tripsLoadedSelector, tripsLoadErrorSelector, tripsSelector } from "../../../redux/trips/selectors";
import { Trip } from "./Trip";
import { TripsWrapper } from "./TripsWrapper";

export const Trips = (props) => {
    const trips = useSelector(tripsSelector);
    const tripsLoaded = useSelector(tripsLoadedSelector);
    const tripsLoadError = useSelector(tripsLoadErrorSelector);

    if (tripsLoadError) {
        return (
            <TripsWrapper {...props}>
                <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                >
                    <Heading as="h2">
                        Wystąpił błąd w trakcie ładowania wycieczek
                    </Heading>
                </Flex>
            </TripsWrapper>
        );
    }

    return (
        <TripsWrapper {...props}>
            {tripsLoaded ? (
                <>
                    {trips.map((trip, idx) => (
                        <Trip key={idx} {...trip.toObject()} />
                    ))}
                </>
            ) : (
                <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                >
                    <Flex gap="0.5rem">
                        <Text>Ładowanie wycieczek</Text>
                        <Spinner w="1.25rem" h="1.25rem" />
                    </Flex>
                </Flex>
            )}
        </TripsWrapper>
    );
};
