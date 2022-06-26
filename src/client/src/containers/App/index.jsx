import React from "react";
import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const App = () => (
    <>
        <Header />
        <Flex
            as="main"
            justifySelf="flex-start"
            p="10px 20px"
            justify="space-between"
            maxW="800px"
            minH="100%"
            flexGrow={1}
        >
            <Outlet />
        </Flex>
        <Footer />
    </>
);

export default App;
