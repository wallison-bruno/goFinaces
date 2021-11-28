import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ResumeCard } from "../../components/ResumeCard";
import { categories } from "../../resource/Categories";
import { Container, ContainerCardResume, Header, Title } from "./styles";
import { Alert } from "react-native";

interface TransactionData {
    type: 'up' | 'down';
    name: string;
    amount: string;
    category: string;
    date: string;
}

interface TotalByCategory {
    key: string
    name: string;
    categorySum: string;
    color: string;
    percentege: string
}

export function Resume() {
    const [allTotalByCategory, setAllTotalByCategory] = useState<TotalByCategory[]>([]);

    async function loadData() {
        try {
            const storegeKey = '@gofinacens:Transactons'
            const allTransacations = await AsyncStorage.getItem(storegeKey)
            const currentTransacations = allTransacations ? JSON.parse(allTransacations) : []

            //todos as transações que são do type 'down'
            const categoryDonw = currentTransacations
                .filter((down: TransactionData) => down.type === 'down')

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
                const percentegeFormatted = (percentege.toFixed(0));

                totalByCategory.push({
                    key: categories.key,
                    name: categories.name,
                    categorySum: totalForCategory.toLocaleString('pt-BR',
                        {
                            style: 'currency',
                            currency: 'BRL'
                        }),
                    color: categories.color,
                    percentege: `${percentegeFormatted}%`
                })
            })

            setAllTotalByCategory(totalByCategory)

        } catch (error) {
            Alert.alert('Não foi possivel listar as categorias')
            console.log(error)
        }
    }

    useEffect(() => {
        console.log(allTotalByCategory)
        loadData();
    }, [])

    return (
        <Container>
            <Header>
                <Title>Resumo</Title>
            </Header>
            <ContainerCardResume>
                {
                    allTotalByCategory.map(
                        item => (
                            <>
                                <ResumeCard
                                    key={item.key}
                                    title={item.name}
                                    amount={item.categorySum}
                                    color={item.color}
                                />
                            </>
                        )
                    )
                }
            </ContainerCardResume>
        </Container>
    )
}