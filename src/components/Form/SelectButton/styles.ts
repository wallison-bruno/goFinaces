import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.shape};
    width: 100%;
    border-radius: 5px;
    padding: 18px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(20)}px;
`;
