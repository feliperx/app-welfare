import React from "react";
import { useNavigation } from "@react-navigation/native";
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
