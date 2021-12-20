import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { BorderlessButton } from "react-native-gesture-handler";

export const Container = styled.View`
    flex: 1;
`;
export const InfonElements = styled.View`
     flex: 70%
     background-color: ${({ theme }) => theme.colors.primary}
     align-items: center;
     justify-content:center;
    `;

export const TextPricipal = styled.Text`
    margin-top: ${RFValue(40)}px; 
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(30)}px;
    `;
export const TextSecundary = styled.Text`
    margin-top:  ${RFValue(60)}px;
    margin-bottom:  ${RFValue(40)}px ;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(16)}px;
    `;
export const ContainerButtons = styled.View`
    flex: 30%;
    background-color: ${({ theme }) => theme.colors.secundary}
    `;

export const BoxButtons = styled.View`
    padding: 0px 32px ;
    margin-top:${RFValue(-30)}px;
 
   `;