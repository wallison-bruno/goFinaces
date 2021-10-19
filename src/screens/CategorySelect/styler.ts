import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

interface CategoryContainer {
    isSelect: boolean
}


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

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(23)}px;
    margin-bottom: 20px;
`;

export const CategoryContainer = styled.TouchableOpacity<CategoryContainer>`
    
    background-color:${({ theme, isSelect }) =>
        isSelect === true ? theme.colors.text : theme.colors.shape} ;
    width: 100%;
    flex-direction: row;
    padding: ${RFValue(15)}px;
    align-items: center;
`;

export const CategoryIcon = styled(Feather)`
    font-size:  ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text_dark}
`;

export const CategoryTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-left: 16px;
    font-size:  ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text_dark}
`;

export const Separetor = styled.View`
    width: 100%;
    height: 0.5px;
    background-color: ${({ theme }) => theme.colors.text};
`;