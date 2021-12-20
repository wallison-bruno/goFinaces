import React from "react";
import Logo from '../../assets/Logo.svg'
import Google from '../../assets/Google.svg'
import Apple from '../../assets/Apple.svg'

import {
    Container,
    InfonElements,
    TextPricipal,
    TextSecundary,
    ContainerButtons,
    BoxButtons,
} from './styles'

import { ButtonSignin } from "../../components/ButtonSignin";
import { RFValue } from "react-native-responsive-fontsize";

export function Signin() {
    return (
        <Container>
            <InfonElements>
                <Logo
                    width={RFValue(120)}
                    height={RFValue(68)}
                />
                <TextPricipal>
                    Controle suas {'\n'}
                    finanças de forma {'\n'}
                    muito simples
                </TextPricipal>
                <TextSecundary>
                    Faça seu login com {'\n'}
                    uma das contas abaixo
                </TextSecundary>
            </InfonElements>
            <ContainerButtons>
                <BoxButtons>
                    <ButtonSignin
                        svg={Google}
                        title="Entrar com conta Google"
                    />
                    <ButtonSignin
                        svg={Apple}
                        title="Entrar com conta Apple"
                    />
                </BoxButtons>

            </ContainerButtons>
        </Container>
    )
}