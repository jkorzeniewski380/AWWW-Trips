import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { mainRoute } from '../../../../routes';
import { HeaderLink } from '../Header';

export const Footer = () => (
    <Flex
        direction={{ base: 'column', md: 'row' }}
        w="100%"
        p="10px 20px"
        align="center"
        justify="space-between"
        bgColor="#0A0099"
        color="#FEFCDF"
        textAlign="center"
        gap={{ base: '0.5rem', md: '1rem' }}
    >
        <Text>Biuro podróży, 2022</Text>
        <HeaderLink to={mainRoute}>
            O firmie
        </HeaderLink>
        <HeaderLink to={mainRoute}>
            Kontakt
        </HeaderLink>
        <HeaderLink to={mainRoute}>
            Polityka Prywatności
        </HeaderLink>
    </Flex>
);
