import React from "react";
import {
    InputBox,
    Input,
    Label
} from "./style";

export default function MainInput({ value, setValue, label}) {
  return (
      <InputBox>
        <Label>{label}</Label>
        <Input value={value} onChangeText={setValue} autoCompleteType="off" ></Input>
      </InputBox>
  );
};
