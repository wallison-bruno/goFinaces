import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import { Input } from "../Input";
import { Container } from "./styled";

interface Props extends TextInputProps {
    name: string,
    control: Control
}

export function InputControle({ name, control, ...rest }: Props) {
    return (
        <Container>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input
                        onChange={onChange}
                        value={value}
                        {...rest} />
                )}
            />
        </Container>
    )
}

