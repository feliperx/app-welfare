import React from "react";
import {
    Header,
    Name,
    Image
} from "./style";

export default function MainHeader({ avatar, name}) {
  return (
      <Header>
        <Name>{name}</Name>
        <Image source={{ uri: avatar }}></Image>
      </Header>
  );
};
