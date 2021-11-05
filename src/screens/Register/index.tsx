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
import { Keyboard, Modal, View, TouchableWithoutFeedback, Alert } from "react-native";
import { ButtonTransaction } from "../../components/Form/ButtonTransaction";
import { SelectButton } from "../../components/Form/SelectButton";
import { CategorySelect } from "../CategorySelect";
import { InputControle } from "../../components/Form/InputControler/inde";

import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


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

    const schema = yup.object({
        name: yup
            .string()
            .required('Nome é obrigatório'),
        amount: yup
            .number()
            .typeError('Informe apenas valores numéricos')
            .positive('O valor não pode ser negativo')
            .required('O valor é obrigatório'),
    }).required();

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

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

        if (!transactionType) {
            return Alert.alert('Selecione o tipo da transação.')
        }
        if (category.key === 'category') {
            return Alert.alert('Selecione a categoria.')
        }
        const data = {
            name: form.name,
            amount: form.amount,
            category: category.key,
            transaction: transactionType,
        }
        console.log(data)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header >
                    <Title>Cadastro</Title>
                </Header>

                <Form>
                    <View>
                        <InputControle
                            placeholder="Nome"
                            name="name"
                            control={control}
                            keyboardType="default"
                            autoCorrect={false}
                            error={errors.name && errors.name.message} />
                        <InputControle
                            placeholder="Preço"
                            name="amount"
                            control={control}
                            keyboardType='numeric'
                            error={errors.amount && errors.amount.message} />

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
        </TouchableWithoutFeedback>
    )
}