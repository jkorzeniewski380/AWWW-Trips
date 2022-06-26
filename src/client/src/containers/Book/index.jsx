import { 
    Flex, Heading, Image, Table,
    Input, Thead, Tr, Th, Tbody, Td,
    VStack, FormControl, FormLabel,
    FormErrorMessage,
    Button,
    Text, Link
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Formik, Form, Field } from "formik"
import { isNil } from "ramda";
import { tripSelector, tripsLoadedSelector, bookTripStateSelector } from "../../redux/trips/selectors";
import React, { useEffect } from "react";
import { bookTripRequest, fetchTripRequest } from "../../redux/trips/actions";
import { fieldNameToLabel, initialValues, formValidationSchema } from "./const";
import { STATUS } from "../../redux/trips/const";
import { getTripRoute } from "../../routes";

const BookTripInput = (props) => (
    <Input
        width="100%"
        fontSize="large"
        border="solid 1px black"
        margin="10px 0"
        borderRadius="4px"
        padding="10px"
        {...props}
    />
);

const CostsTr = ({ children, ...props }) => (
    <Tr
        _last={{
            Td: {
                fontWeight: "bold"
            }
        }}
        {...props}
    >
        {children}
    </Tr>
);

const CostsTd = ({ children, ...props }) => (
    <Td
        p="3px"
        borderTop="solid 2px #0A0099"
        {...props}
    >
        {children}
    </Td>
);

export const Book = () => {
    const { id } = useParams();
    const trip = useSelector(tripSelector)(id);
    const tripsLoaded = useSelector(tripsLoadedSelector);
    const bookTripState = useSelector(bookTripStateSelector);

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
        obrazek: image, obrazek_tekst: imageAlt,
        nazwa: title, cena: price,
        liczba_dostepnych_miejsc: availableSpots
    } = trip.toObject();

    return (
        <Flex
            as="section"
            direction="column"
            align="center"
            minH="100%"
            gap="1rem"
        >
            <Image
                w="300px"
                h="240px"
                objectFit="fill"
                src={image}
                alt={imageAlt}
            />
            <Link
                as={RouterLink}
                to={getTripRoute(id)}
                textAlign="center"
            >
                <Heading as="h1">
                    {title}
                </Heading>
                <Heading as="h2">
                    Pozostało miejsc: {availableSpots}
                </Heading>
            </Link>
            <Table
                variant="simple"
            >
                <Thead>
                    <CostsTr>
                        <Th p="5px" scope="col">Nazwa</Th>
                        <Th p="5px" scope="col" isNumeric>Koszt</Th>
                    </CostsTr>
                </Thead>
                <Tbody>
                    <CostsTr>
                        <CostsTd>Ubezpieczenie</CostsTd>
                        <CostsTd isNumeric>500 PLN</CostsTd>
                    </CostsTr>
                    <CostsTr>
                        <CostsTd>Bilety</CostsTd>
                        <CostsTd isNumeric>1000 PLN</CostsTd>
                    </CostsTr>
                    <CostsTr>
                        <CostsTd>Wyżywienie</CostsTd>
                        <CostsTd isNumeric>1000 PLN</CostsTd>
                    </CostsTr>
                    <CostsTr>
                        <CostsTd>Zakwaterowanie</CostsTd>
                        <CostsTd isNumeric>1000 PLN</CostsTd>
                    </CostsTr>
                    <CostsTr>
                        <CostsTd>Razem od osoby</CostsTd>
                        <CostsTd isNumeric>{price} PLN</CostsTd>
                    </CostsTr>
                </Tbody>
            </Table>
            <Heading as="h2">Formularz rezerwacyjny</Heading>
            <Formik
                initialValues={initialValues}
                validationSchema={formValidationSchema}
                onSubmit={(values) => dispatch(bookTripRequest(id, values))}
            >
                {({ errors, touched }) => (
                    <Form>
                        <VStack spacing="0.5rem" w="100%">
                            {Object.entries(fieldNameToLabel).map(([fieldName, label]) => (
                                <FormControl key={fieldName} isInvalid={!!errors[fieldName] && touched[fieldName]}>
                                    <FormLabel htmlFor={fieldName}>{label}</FormLabel>
                                    <Field
                                        as={BookTripInput}
                                        id={fieldName}
                                        name={fieldName}
                                    />
                                    <FormErrorMessage color="red">{errors[fieldName]}</FormErrorMessage>
                                </FormControl>
                            ))}
                            <Button
                                type="submit"
                                variant="solid"
                                h="40px"
                                p="10px 20px"
                                color="white"
                                fontWeight="bold"
                                bgColor="#0A0099"
                                transition="all .2s ease"
                                _hover={{
                                    color: "black",
                                    bgColor: "#0A009920"
                                }}
                            >
                                Zarezerwuj
                            </Button>
                        </VStack>
                    </Form>
                )}
            </Formik>
            {!isNil(bookTripState) && bookTripState.get("status") === STATUS.SUCCESS && <Text color="lightgreen">{bookTripState.get("message")}</Text>}
            {!isNil(bookTripState) && bookTripState.get("status") === STATUS.ERROR && <Text color="red">{bookTripState.get("message")}</Text>}
        </Flex>
    );
};

