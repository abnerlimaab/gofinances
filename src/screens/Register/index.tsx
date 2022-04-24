import React from "react";
import { Input } from "../../components/Form/Input";
import { 
    COntainer, 
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
        <Input 
            placeholder="nome"
        />
        <Input 
            placeholder="preço"
        />
      </Form>
    </COntainer>
  );
}
