import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
    Container,
    Icon,
    Title,
    Elements,
} from "./stylers";

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle'
}

interface Props extends TouchableOpacityProps {
    type: 'up' | 'down',
    title: string,
    isSelcted: boolean,
}

export function ButtonTransaction({
    type,
    title,
    isSelcted,
    ...rest }: Props) {
    return (
        <Container {...rest}
            type={type}
            isSelcted={isSelcted}>
            <Elements>
                <Icon name={icon[type]} type={type} />
                <Title>{title}</Title>
            </Elements>
        </Container>
    )
}