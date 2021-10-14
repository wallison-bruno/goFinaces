import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TextInput`
    width: 100%;
    background-color:${({ theme }) => theme.colors.shape};
    color:${({ theme }) => theme.colors.text} ;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size:  ${RFValue(14)}px;
    border-radius: 5px;
    padding: 18px;
    margin-bottom: 8;
`;