import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import { Input } from "../Input";
import { Container, Error } from "./styled";

interface Props extends TextInputProps {
    name: string,
    control: Control
    error: string
}

export function InputControle({ name, control, error, ...rest }: Props) {
    return (
        <Container>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        {...rest}
                    />
                )}
                name={name}
            />
            {error && <Error> {error} </Error>}
        </Container>
    )
}

