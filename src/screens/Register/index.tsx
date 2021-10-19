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
import { Modal, View } from "react-native";
import { ButtonTransaction } from "../../components/Form/ButtonTransaction";
import { SelectButton } from "../../components/Form/SelectButton";
import { CategorySelect } from "../CategorySelect";


export function Register() {

    const [openModal, setOpenModal] = useState(false)
    const [transactionType, setTransacationType] = useState('')

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    })


    function handleTransactionsTaypeSelect(type: 'up' | 'down') {
        setTransacationType(type);
    }

    function handleOpenModal() {
        setOpenModal(true)
    }

    function handleCloseModal() {
        setOpenModal(false)
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

                    <SelectButton
                        onPress={handleOpenModal}
                        title={category.name} />

                    <Modal visible={openModal}>
                        <CategorySelect
                            category={category}
                            setCategory={setCategory}
                            selectCatergoryClose={handleCloseModal}
                        />
                    </Modal>
                </View>
                <Button title="Enviar" />
            </Form>
        </Container>
    )
}