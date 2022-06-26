import { Box, Flex, Heading, Image, Link, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { isNil } from "ramda";
import { tripSelector, tripsLoadedSelector } from '../../redux/trips/selectors';
import { getBookRoute } from '../../routes';
import { useEffect } from 'react';
import { fetchTripRequest } from '../../redux/trips/actions';

export const TripInfoListWrapper = ({ children, ...props }) => (
    <UnorderedList listStyleType="none" my="16px" {...props}>
        {children}
    </UnorderedList>
);

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

export const TripNavigationLink = ({ children, ...props }) => (
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
        {...props}
    >
        {children}
    </Link>
);

export const TripDescriptionText = ({ children, ...props }) => (
    <Text
        my="16px"
        {...props}
    >
        {children}
    </Text>
)

export const Trip = () => {
    const { id } = useParams();
    const trip = useSelector(tripSelector)(id);
    const tripsLoaded = useSelector(tripsLoadedSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!tripsLoaded && isNil(trip)) {
            dispatch(fetchTripRequest(id))
        }
    }, [dispatch, id, trip, tripsLoaded]);

    if (isNil(trip)) {
        return tripsLoaded ? (
            <Flex w="100%" h="100%" align="center" justify="center">
                <Heading as="h1">
                    Nie znaleziono wycieczki
                </Heading>
            </Flex>
        ) : null;
    }

    const {
        id: pk, obrazek: image, obrazek_tekst: imageAlt,
        nazwa: title, opis: description, cena: price,
        data_poczatku: startDate, data_konca: endDate,
        liczba_dostepnych_miejsc: availableSpots
    } = trip.toObject();

    return (
        <Box as="section">
            <Image
                float="left"
                w="200px"
                h="150px"
                m="20px 20px 20px 0"
                objectFit="fill"
                src={image}
                alt={imageAlt}
            />
            <Heading as="h1">
                {title}
            </Heading>
            <TripDescriptionText>
                {description}
            </TripDescriptionText>
            <Heading as="h2">
                Nagłowek z tytułem
            </Heading>
            <TripDescriptionText>
                Tu kolejny fragment tekstu. Może się z składać z kilku akapitów.
            </TripDescriptionText>
            <Heading as="h2">
                Jeszcze jeden nagłówek
            </Heading>
            <TripDescriptionText>
                I kolejne informacje o wycieczce. Trzeba się wysilić i wymyślić własne.
            </TripDescriptionText>
            <Heading as="h2">
                Istotne informacje
            </Heading>
            <TripInfoListWrapper>
                <TripInfoListItem>termin wycieczki: {startDate} - {endDate}</TripInfoListItem>
                <TripInfoListItem>temperatury na miejscu: takie w sam raz</TripInfoListItem>
                <TripInfoListItem>warto zabrać: trochę ubrań na zimę</TripInfoListItem>
                <TripInfoListItem>cena wycieczki to: {price}</TripInfoListItem>
                <TripInfoListItem>dostępne miejsca: {availableSpots}</TripInfoListItem>
            </TripInfoListWrapper>
            <Heading as="h2">
            Program wycieczki
            </Heading>
            <OrderedList my="16px">
                <ListItem>Odwiedziny na miejscu</ListItem>
                <ListItem>Obiad</ListItem>
                <ListItem>Wspólna wyprawa</ListItem>
            </OrderedList>
            <Flex
                as="section"
                justify="space-between"
                m="10px 0"
            >
                <TripNavigationLink to="/">
                    Powrót
                </TripNavigationLink>
                <TripNavigationLink to={getBookRoute(pk)}>
                    Zarezerwuj
                </TripNavigationLink>
            </Flex>
        </Box>
    );
};
