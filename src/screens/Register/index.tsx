import React from "react";
import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";
import { 
    COntainer, 
    Fields,
    Form, 
    Header, 
    Title
 } from "./styles";

export function Register() {
  return (
    <COntainer>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      
      <Form>
        <Fields>
          <Input 
              placeholder="nome"
          />
          <Input 
              placeholder="preço"
          />
        </Fields>

        <Button title="Enviar"/>
      </Form>
    </COntainer>
  );
}
