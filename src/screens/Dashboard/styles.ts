import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.backgroud};
`;

export const Header = styled.View`
   width: 100%;
   height: ${RFPercentage(42)}px;
   background-color: ${({ theme }) => theme.colors.primary};
`;

export const UserWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top:${RFValue(38)}px;
    padding: 0 20px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
   width: ${RFValue(48)}px;
   height: ${RFValue(48)}px;
   border-radius: 10px;
`;

export const Greeting = styled.View`
    margin-left: 10px;
`;

export const UserGreeting = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.secundary} ;
    font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingHorizontal: 24,
    }
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
    flex:1;
    padding: 0 24px;
    margin-top:${RFPercentage(12)}px;
`;

export const TransactionCards = styled.View`
    
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-bottom: 16px;
`;