import React from "react";
import { HighlightCard } from "../../components/HighlightCard";

import {
  Container,
  Header,
  UserWrapper,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  IconStyled,
  HighlightCards,
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/67610973?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá ,</UserGreeting>
              <UserName>Abner</UserName>
            </User>
          </UserInfo>
          <IconStyled name="power"/>
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransiction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransiction="Última entrada dia 03 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransiction="01 à 16 de abril"
        />
      </HighlightCards>
    </Container>
  );
}
