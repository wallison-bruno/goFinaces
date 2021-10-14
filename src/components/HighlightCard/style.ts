import styled, { css } from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

interface TypeCard {
    type: 'up' | 'donw' | 'total',
}

export const Container = styled.View<TypeCard>`
    padding: 18px 24px;
    width: ${RFValue(300)}px ;
    ${(props) => props.type === 'total' ? css` 
    background-color:${({ theme }) => theme.colors.secundary};` : css`
    background-color:${({ theme }) => theme.colors.shape};
    ` }
    padding-bottom: ${RFValue(42)}px;
    border-radius: 5px;
    margin-right: 16px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
export const Title = styled.Text<TypeCard>`
    ${(props) => props.type === 'total' ? css` 
        color:${({ theme }) => theme.colors.shape};` : css`
        color:${({ theme }) => theme.colors.text_dark};
    ` }
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size:${RFValue(14)}px ;
`;
export const Icon = styled(Feather) <TypeCard>`
    font-size: ${RFValue(40)}px;

    ${(props) => props.type === 'up' && css`
        color:${({ theme }) => theme.colors.sucess};
    `}
     ${(props) => props.type === 'total' && css`
        color:${({ theme }) => theme.colors.shape};
    `}
     ${(props) => props.type === 'donw' && css`
        color:${({ theme }) => theme.colors.anttencion};
    `}
`;

export const Amount = styled.Text<TypeCard>`
    font-family: ${({ theme }) => theme.fonts.midium};
    font-size:  ${RFValue(32)}px;
    margin-top: ${RFValue(38)}px;
    ${(props) => props.type === 'total' ? css` 
        color:${({ theme }) => theme.colors.shape};` : css`
        color:${({ theme }) => theme.colors.text_dark};
    ` }
`;
export const LastTransiction = styled.Text<TypeCard>`
    font-family: ${({ theme }) => theme.fonts.regular};
    ${(props) => props.type === 'total' ? css` 
        color:${({ theme }) => theme.colors.shape};` : css`
        color:${({ theme }) => theme.colors.text};
    ` }
    font-size:  ${RFValue(12)}px;
`;

export const Footer = styled.View`

`;