import React, { useState } from "react";
import {
    Container,
    Header,
    Title,
    Form,
    ButtonsTransactions,
} from "./styles";

import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { View } from "react-native";
import { ButtonTransaction } from "../../components/Form/ButtonTransaction";
import { SelectButton } from "../../components/Form/SelectButton";


export function Register() {

    const [transactionType, setTransacationType] = useState('')

    function handleTransactionsTaypeSelect(type: 'up' | 'down') {
        setTransacationType(type);
    }

    return (
        <Container>
            <Header >
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <View>
                    <Input placeholder="Nome" />
                    <Input placeholder="Preço" />
                    <ButtonsTransactions>
                        <ButtonTransaction
                            title={'Income'}
                            type={'up'}
                            onPress={() => handleTransactionsTaypeSelect('up')}
                            isSelcted={transactionType === 'up'}
                        />
                        <ButtonTransaction
                            title={'Outcome'}
                            type={'down'}
                            onPress={() => handleTransactionsTaypeSelect('down')}
                            isSelcted={transactionType === 'down'}
                        />
                    </ButtonsTransactions>

                    <SelectButton title={'Categoria...'} />

                </View>
                <Button title="Enviar" />
            </Form>
        </Container>
    )
}