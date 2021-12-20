import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons"
export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.backgroud};  
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: ${RFValue(113)}px;
    align-items: center;
    justify-content: flex-end;
`;

export const ContainerCardResume = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingHorizontal: 24,
    }
})``;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(23)}px;
    margin-bottom: 20px;
`;

export const Content = styled.View`
    align-items: center;
    justify-content: center; 
`;

export const MonthSelect = styled.View`
    padding-top: 24px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;   
`;

export const MonthSelectButton = styled(BorderlessButton)`

`;

export const Month = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 20px;
`;

export const IconSelect = styled(Feather).attrs({

})`
font-size: 20px;`;
