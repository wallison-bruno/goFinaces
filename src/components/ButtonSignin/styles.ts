import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
    width: 100%;
    height: ${RFValue(56)}px;
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;
    margin-bottom: 16px;
    align-items: center;
    flex-direction: row;
`;
export const ContainerLogo = styled.View`
     height: 100%;
     justify-content:center;
     padding:${RFValue(16)}px;
     border-color: ${({ theme }) => theme.colors.backgroud};
     border-right-width:1px ;
    `;


export const Lable = styled.Text`
        font-family: ${({ theme }) => theme.fonts.midium};
        font-size: 14px;
        text-align: center;
        flex: 1;
    `;
