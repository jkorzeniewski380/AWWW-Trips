import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Promo } from "./components/Promo";
import { advices, promos } from "./const";
import { Trips } from "./components/Trips";
import { fetchTripsRequest } from "../../redux/trips/actions";
import { tripsLoadingStateSelector } from "../../redux/trips/selectors";
import { LOADING_STATES } from "../../redux/trips/const";

export const Home = () => {
    const tripsLoadingState = useSelector(tripsLoadingStateSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        if (tripsLoadingState === LOADING_STATES.IDLE) {
            dispatch(fetchTripsRequest());
        }
    }, [dispatch, tripsLoadingState]);

    return (
        <>
            <Trips />
            <Box
                minW="160px"
                maxW="160px"
                minH="100%"
            >
                <Flex as="section" direction="column">
                    <Heading as="h2">Promocje</Heading>
                    {promos.map((promo, idx) => (
                        <Promo key={idx} {...promo} />
                    ))}
                </Flex>
                <Flex direction="column" display={{ base: 'none', md: 'block' }}>
                    <Heading as="h2">Porady</Heading>
                    {advices.map((advice, idx) => (
                        <Text key={idx}>
                            <Link
                                display="block"
                                as={RouterLink}
                                to="/"
                                {...(idx % 2 === 0) ? {
                                    bgColor: 'rgba(0,0,0,0.1)',
                                    _hover: {
                                        bgColor: 'rgba(0,0,0,0.3)'
                                    }
                                } : {}}
                            >
                                {advice}
                            </Link>
                        </Text>
                    ))}
                </Flex>
            </Box>
        </>
    );
};
