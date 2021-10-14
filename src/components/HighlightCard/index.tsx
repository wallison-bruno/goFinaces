import React from "react";
import {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransiction,
} from "./style";

interface CardProps {
    type: 'up' | 'donw' | 'total',
    title: string,
    amount: string,
    lastTransiction: string
}

const IconProps = {
    up: 'arrow-up-circle',
    donw: 'arrow-down-circle',
    total: 'dollar-sign',
}

export function HighlightCard({
    type,
    title,
    amount,
    lastTransiction }: CardProps) {
    return (
        <Container type={type}>
            <Header>
                <Title type={type}>
                    {title}
                </Title>
                <Icon name={IconProps[type]} type={type} />
            </Header>
            <Footer>
                <Amount type={type}>
                    {amount}
                </Amount>
                <LastTransiction type={type}>
                    {lastTransiction}
                </LastTransiction>
            </Footer>
        </Container>)
}