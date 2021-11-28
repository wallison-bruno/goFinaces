import React from "react";

import {
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date,
} from "./styles";

import { categories } from "../../resource/Categories";
export interface TransactionCardProps {
    type: 'up' | 'down'
    category: string,
    name: string,
    amount: string,
    date: string,
}

interface Props {
    data: TransactionCardProps,
}

export function TransactionCard({
    data,
}: Props) {

    const category = categories.filter(
        item => item.key === data.category
    )[0];

    return (
        <Container>
            <Title>{data.name}</Title>
            <Amount type={data.type}>
                {data.type === 'down' && '- '}
                {data.amount}
            </Amount>
            <Footer>
                <Category>
                    <Icon name={category.icon} />
                    <CategoryName>{category.name}</CategoryName>
                </Category>
                <Date>{data.date}</Date>
            </Footer>
        </Container>
    )
}