import React, { useEffect, useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ResumeCard } from "../../components/ResumeCard";
import { categories } from "../../resource/Categories";
import {
    Container,
    ContainerCardResume,
    Header,
    Title,
    Content,
    MonthSelect,
    MonthSelectButton,
    Month,
    IconSelect,
} from "./styles";
import { useFocusEffect } from '@react-navigation/native';
import { ActivityIndicator, Alert } from "react-native";
import { VictoryPie } from 'victory-native'
import { useTheme } from 'styled-components'
import { addMonths, subMonths, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ContainerLoad } from "../Dashboard/styles";
interface TransactionData {
    type: 'up' | 'down';
    name: string;
    amount: string;
    category: string;
    date: string;
}

interface TotalByCategory {
    key: string;
    name: string;
    categorySum: string;
    amount: number;
    color: string;
    percentege: string
}

export function Resume() {
    const [isLoading, setIsLoading] = useState(true);
    const [dateSelected, setDateSelected] = useState(new Date());

    const [allTotalByCategory, setAllTotalByCategory] = useState<TotalByCategory[]>([]);
    const theme = useTheme();

    function handleDateChange(action: 'next' | 'prev') {
        if (action === 'next') {
            setDateSelected(addMonths(dateSelected, 1))
        } else {
            setDateSelected(subMonths(dateSelected, 1))
        }
    }

    async function loadData() {
        setIsLoading(false);
        try {
            const storegeKey = '@gofinacens:Transactons'
            const allTransacations = await AsyncStorage.getItem(storegeKey)
            const currentTransacations = allTransacations ? JSON.parse(allTransacations) : []

            //todos as transações que são do type 'down'
            const categoryDonw = currentTransacations
                .filter((item: TransactionData) => item.type === 'down' && new Date(item.date).getMonth() === dateSelected.getMonth() && new Date(item.date).getFullYear() === dateSelected.getFullYear())

            //soma de todos amaunts das transações do type 'down'
            const downTotal = categoryDonw.reduce((accumulator: Number, down: TransactionData) => {
                return accumulator + down.amount;
            }, 0)

            const totalByCategory: TotalByCategory[] = [];

            categories.forEach(categories => {
                let totalForCategory = 0;

                categoryDonw.forEach((element: TransactionData) => {
                    if (categories.key === element.category) {
                        totalForCategory += Number(element.amount)
                    }
                });

                const percentege = (totalForCategory / downTotal * 100);
                const percentegeFormatted = `${percentege.toFixed(0)}%`;

                (totalForCategory !== 0) && totalByCategory.push({

                    key: categories.key,
                    name: categories.name,
                    categorySum: totalForCategory.toLocaleString('pt-BR',
                        {
                            style: 'currency',
                            currency: 'BRL'
                        }),
                    amount: totalForCategory,
                    color: categories.color,
                    percentege: percentegeFormatted,

                })
            })

            setAllTotalByCategory(totalByCategory)
            setIsLoading(false);
        } catch (error) {
            Alert.alert('Não foi possivel listar as categorias')
            console.log(error)
        }
    }

    useFocusEffect(useCallback(() => {
        loadData();
    }, [dateSelected]))

    return (
        <Container>
            <Header>
                <Title>Resumo</Title>
            </Header>
            {isLoading ?
                <ContainerLoad>
                    <ActivityIndicator color={theme.colors.primary}
                        size='large' />
                </ContainerLoad> :
                <ContainerCardResume>

                    <MonthSelect>
                        <MonthSelectButton onPress={() => {
                            handleDateChange('prev')
                        }}>

                            <IconSelect name="chevron-left" />
                        </MonthSelectButton>
                        <Month> {format(dateSelected, 'MMMM, YYY', { locale: ptBR })}</Month>
                        <MonthSelectButton
                            onPress={() => {
                                handleDateChange('next')
                            }}>
                            <IconSelect name='chevron-right' />
                        </MonthSelectButton>
                    </MonthSelect>

                    <Content>
                        <VictoryPie
                            data={allTotalByCategory}
                            colorScale={allTotalByCategory.map(item => item.color)}
                            x='percentege'
                            y='amount'
                            labelRadius={146}
                            innerRadius={100}

                            style={{
                                labels: {
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    /* fill: theme.colors.shape */
                                }
                            }}
                        />
                    </ Content>
                    {
                        allTotalByCategory.map(
                            item => (

                                <ResumeCard
                                    key={item.key}
                                    title={item.name}
                                    amount={item.categorySum}
                                    color={item.color}
                                />

                            )
                        )
                    }
                </ContainerCardResume>
            }
        </Container>
    )
}