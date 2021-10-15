import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface IconTypeProps {
    type: 'up' | 'down'
}

interface ContainerProps {
    type: 'up' | 'down',
    isSelcted: boolean,
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    align-items: center;
    border-width: 1.5px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    width: 48%;
    padding: 16px 25px;
   
     ${({ isSelcted, type }) => isSelcted && type === 'up' && css`
        background-color: ${({ theme }) => theme.colors.sucess_light};
        border-width: 0;
     ` }    
     ${({ isSelcted, type }) => isSelcted && type === 'down' && css`
        background-color: ${({ theme }) => theme.colors.attention_ligh};
        border-width: 0;
     ` }
`;

export const Icon = styled(Feather) <IconTypeProps>`
    font-size: ${RFValue(24)}px;
    color: ${({ theme, type }) => type === 'up' ? theme.colors.sucess : theme.colors.anttencion};
    margin-right: 18px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;

export const Elements = styled.View`
    flex-direction: row;
    align-items: center;  
`;