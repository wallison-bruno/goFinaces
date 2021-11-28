import 'intl';
import 'intl/locale-data/jsonp/pt-BR'

import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";
import { useFocusEffect } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import theme from '../../global/styles/theme';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  Greeting,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
  LogoutButton,
  ContainerLoad,
} from "./styles";
import { LastTransiction } from '../../components/HighlightCard/style';

export interface DatalistProps extends TransactionCardProps {
  id: string;
}

interface HighlightProps {
  amount: string;
  lastDate: string;
}

interface HighlightData {
  up: HighlightProps,
  down: HighlightProps,
  total: HighlightProps,
}

const storegeKey = '@gofinacens:Transactons'
export function Dashboard() {

  const [data, setData] = useState<DatalistProps[]>([]);
  const [highlightData, setHighlightData] = useState<HighlightData>({} as HighlightData);
  const [isLoading, setIsloading] = useState(true);


  async function loadTransicion() {
    const response = await AsyncStorage.getItem(storegeKey);
    const transactions = response ? JSON.parse(response) : [];

    let sumUp = 0
    let sumDown = 0

    const transactionsFormatted: DatalistProps[] = transactions.map(
      (item: DatalistProps) => {

        //Somando os valores para o HilightCard
        if (item.type === 'up') {
          sumUp += Number(item.amount)
        } else {
          sumDown += Number(item.amount)
        }

        //Formantando os valores 
        const amount = Number(item.amount)
          .toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })
        const date = Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        }).format(new Date(item.date))

        return {
          id: item.id,
          name: item.name,
          date, // dete: date
          amount, // amount: amount
          type: item.type,
          category: item.category,
        }
      }
    )
    setData(transactionsFormatted.reverse());
    const lasTransactionUp = getLasTransactionDate(transactions, 'up');
    const lasTransactionDown = getLasTransactionDate(transactions, 'down');
    const totalInverval = `01 a ${lasTransactionDown}`
    let total = sumUp - sumDown;
    setHighlightData({
      up: {
        amount: sumUp.toLocaleString('pt-BR',
          {
            style: 'currency',
            currency: 'BRL'
          }),
        lastDate: lasTransactionUp,
      },
      down: {
        amount: sumDown.toLocaleString('pt-BR',
          {
            style: 'currency',
            currency: 'BRL'
          }),
        lastDate: lasTransactionDown,
      },
      total: {
        amount: total.toLocaleString('pt-BR',
          {
            style: 'currency',
            currency: 'BRL'
          }),
        lastDate: `${totalInverval}`
      }
    })

    setIsloading(false)
  }

  function getLasTransactionDate(
    collection: DatalistProps[],
    type: 'up' | 'down'
  ) {
    const lasDate = new Date(
      Math.max.apply(Math, collection
        .filter(transaction => transaction.type === type)
        .map(transaction => new Date(transaction.date).getTime())))
    return `dia ${lasDate.getDate()} de ${lasDate.toLocaleString('pt-BR', { month: 'long' })} `;
  }

  useEffect(() => {
    //AsyncStorage.removeItem(storegeKey);
    loadTransicion();
  }, []);

  useFocusEffect(useCallback(() => {
    loadTransicion();
  }, []))

  return (
    <Container>
      {isLoading ?
        <ContainerLoad>
          <ActivityIndicator color={theme.colors.primary}
            size='large' />
        </ContainerLoad> :
        <>
          <Header>
            <UserWrapper>
              <UserInfo>
                <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/63119956?v=4' }} />
                <Greeting>
                  <UserGreeting>Olá,</UserGreeting>
                  <UserName>Wallyson Bruno</UserName>
                </Greeting>
              </UserInfo>
              <LogoutButton>
                <Icon name={"power"} />
              </LogoutButton>
            </UserWrapper>
          </Header>
          <HighlightCards>
            <HighlightCard
              type={'up'}
              title={'Entradas'}
              amount={highlightData.up.amount}
              lastTransiction={"Última entrada " + highlightData.up.lastDate} />
            <HighlightCard
              type={'donw'}
              title={'Saídas'}
              amount={highlightData.down.amount}
              lastTransiction={'Última saída ' + highlightData.down.lastDate} />
            <HighlightCard
              type={'total'}
              title={'Total'}
              amount={highlightData.total.amount}
              lastTransiction={highlightData.total.lastDate} />
          </HighlightCards>
          <Transactions>
            <Title>Listagem</Title>
            <TransactionList
              data={data}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <TransactionCard data={item} />} />
          </Transactions>
        </>
      }
    </Container>
  )
}