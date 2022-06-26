import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { mainRoute } from '../../../../routes';
import { HeaderLink } from '../../../../components/HeaderLink';

export const Header = (props) => (
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
        {...props}
    >
        <HeaderLink to={mainRoute}>
            <Image
                h="20px"
                w="60px"
                objectFit="fill"
                src="/images/logo.png"
                alt="Logo"
            />
        </HeaderLink>
        <HeaderLink to={mainRoute}>
            Wycieczki lotnicze
        </HeaderLink>
        <HeaderLink to={mainRoute}>
            Wycieczki autokarowe
        </HeaderLink>
        <HeaderLink to={mainRoute}>
            Moje konto
        </HeaderLink>
    </Flex>
);
