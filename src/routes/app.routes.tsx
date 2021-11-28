import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from "styled-components";

import { Dashboard } from "../screens/Dashboard";
import { Register } from "../screens/Register";
import { Resume } from "../screens/Resume";

export default function Routs() {
    const Tab = createBottomTabNavigator();
    const theme = useTheme();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        if (route.name === 'Listagem') {
                            return <MaterialIcons name={"format-list-bulleted"} size={size} color={color} />
                        } else if (route.name === 'Registrar') {
                            return <MaterialIcons name={"attach-money"} size={size} color={color} />
                        } else if (route.name === 'Resumo') {
                            return <MaterialIcons name={"pie-chart"} size={size} color={color} />
                        }
                    },
                    tabBarActiveTintColor: theme.colors.secundary,
                    tabBarInactiveTintColor: theme.colors.text,
                    headerShown: false,
                    tabBarLabelPosition: 'beside-icon',
                    tabBarLabelStyle: {
                        fontFamily: theme.fonts.regular,
                        fontSize: 14,
                    },
                    tabBarStyle: {
                        height: 68,
                        paddingLeft: 16,
                    }
                })}
            >
                <Tab.Screen name="Listagem" component={Dashboard} />
                <Tab.Screen name="Registrar" component={Register} />
                <Tab.Screen name="Resumo" component={Resume} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
