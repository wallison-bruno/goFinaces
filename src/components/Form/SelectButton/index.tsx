import React from "react";

import {
    Container,
    Title,
    Icon,
} from "./styles"

interface Props {
    title: string,
}

export function SelectButton({ title }: Props) {

    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Icon name='chevron-down' />
        </Container>
    )

}