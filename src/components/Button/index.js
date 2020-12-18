import React from "react";
import {
    Button,
    ButtonText,
   
} from "./style";

export default function MainInput({ onPress, text}) {
  return (
      <Button activeOpacity={0.8} onPress={onPress}>
        <ButtonText>{text}</ButtonText>
      </Button>
  );
};
