import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";
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
  TransactionCards
} from "./styles";

export function Dashboard() {
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
        <TransactionCards>
          <TransactionCard />
        </TransactionCards>
      </Transactions>
    </Container>
  )
}