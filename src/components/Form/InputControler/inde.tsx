import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import { Input } from "../Input";
import { Container } from "./styled";

interface Props extends TextInputProps {
    name: string,
    control: Control
    defaltValue?: string,
}

export function InputControle({ name, control, defaltValue, ...rest }: Props) {
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
                defaultValue={defaltValue}
            />
        </Container>
    )
}

