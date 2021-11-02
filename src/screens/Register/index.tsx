import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
    Container,
    Header,
    Title,
    Form,
    ButtonsTransactions,
} from "./styles";

import { Button } from "../../components/Form/Button";
import { Modal, View } from "react-native";
import { ButtonTransaction } from "../../components/Form/ButtonTransaction";
import { SelectButton } from "../../components/Form/SelectButton";
import { CategorySelect } from "../CategorySelect";
import { InputControle } from "../../components/Form/InputControler/inde";

export function Register() {

    interface Form {
        name: string,
        amount: string,
    }

    const [openModal, setOpenModal] = useState(false)
    const [transactionType, setTransacationType] = useState('')

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    })

    const {
        control,
        handleSubmit,
    } = useForm();

    function handleTransactionsTaypeSelect(type: 'up' | 'down') {
        setTransacationType(type);
    }

    function handleOpenModal() {
        setOpenModal(true)
    }

    function handleCloseModal() {
        setOpenModal(false)
    }

    function handleResgiter(form: Form) {
        /* const data = {
            name: form.name,
            amount: form.amount,
            category: category.key,
            transaction: transactionType,
        } */
        console.log(form)
    }

    return (
        <Container>
            <Header >
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <View>
                    <InputControle placeholder="Nome" name="name" control={control} />
                    <InputControle placeholder="Preço" name="amount" control={control} />
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
                <Button
                    title="Enviar"
                    onPress={handleSubmit(handleResgiter)} />
            </Form>
        </Container>
    )
}