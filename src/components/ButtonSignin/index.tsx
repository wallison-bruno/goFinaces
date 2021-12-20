import React from "react";
import {
    Container,
    ContainerLogo,
    Lable,
} from './styles'

import { RectButtonProperties } from 'react-native-gesture-handler'
import { SvgProps } from "react-native-svg";

interface Props extends RectButtonProperties {
    title: string;
    svg: React.FC<SvgProps>
}

export function ButtonSignin(
    { title,
        svg: Svg,
        ...rest }: Props
) {
    return (
        <Container {...rest}>
            <ContainerLogo>
                <Svg />
            </ContainerLogo>

            <Lable>
                {title}
            </Lable>

        </Container>
    )
}