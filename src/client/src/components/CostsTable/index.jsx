import React from "react";
import { Table, Th, Thead, Tbody } from "@chakra-ui/react";
import { CostsTd } from "./CostsTd";
import { CostsTr } from "./CostsTr";

export const CostsTable = ({ price }) => (
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
);
