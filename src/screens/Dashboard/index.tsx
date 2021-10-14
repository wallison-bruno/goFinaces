import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";
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
  TransactionList
} from "./styles";

export interface DatalistProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DatalistProps[] = [{
    id: '1',
    type: 'positive',
    category: {
      name: 'alimentação',
      icon: 'dollar-sign',
    },
    title: 'Desenvolvimento de site',
    amount: '$ 12.000,00',
    date: '13/10/2021',
  },
  {
    id: '2',
    type: 'negative',
    category: {
      name: 'alimentação',
      icon: 'dollar-sign',
    },
    title: 'Desenvolvimento de site',
    amount: '$ 12.000,00',
    date: '13/10/2021',
  },
  {
    id: '3',
    type: 'positive',
    category: {
      name: 'alimentação',
      icon: 'dollar-sign',
    },
    title: 'Desenvolvimento de site',
    amount: '$ 12.000,00',
    date: '13/10/2021',
  },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/63119956?v=4' }} />
            <Greeting>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Wallyson Bruno</UserName>
            </Greeting>
          </UserInfo>
          <Icon name={"power"} />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type={'up'}
          title={'Entradas'}
          amount={'R$ 17.050,00'}
          lastTransiction={'Última entrada dia 13 de abril'} />
        <HighlightCard
          type={'donw'}
          title={'Saídas'}
          amount={'R$ 12.100,00'}
          lastTransiction={'Última entrada dia 13 de abril'} />
        <HighlightCard
          type={'total'}
          title={'Total'}
          amount={'R$ 4.230,00'}
          lastTransiction={'Última entrada dia 13 de abril'} />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />} />
      </Transactions>
    </Container>
  )
}