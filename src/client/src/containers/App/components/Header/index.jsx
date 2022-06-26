import React from 'react';
import { Link  as RouterLink } from 'react-router-dom';
import { Flex, Image, Link } from '@chakra-ui/react';
import { mainRoute } from '../../../../routes';

export const HeaderLink = ({ children, ...props }) => (
    <Link
        as={RouterLink}
        borderRadius="10px"
        m="5px 10px"
        p="10px 20px"
        color="white"
        textDecoration="none"
        transitionDuration="0.25s"
        fontFamily="Arial, sans-serif"
        fontSize="large"
        fontWeight="bold"
        _hover={{
            bgColor: "rgba(0, 0, 0, 0.2)"
        }}
        {...props}
    >
        {children}
    </Link>
);

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
