# Atividade Avaliativa - Cadastro de Pacientes

Este projeto consiste em uma aplicação web desenvolvida em React para o cadastro de pacientes em uma campanha de prevenção à saúde de uma clínica médica. 

Esta é uma **atividade avaliativa** desenvolvida para a disciplina de **Programação em Dispositivos Móveis I** do **IFPE** (Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco).

---

## Objetivo da Atividade

Desenvolver uma aplicação React utilizando os seguintes conceitos:
- Componentes React (Class Components);
- Props;
- State (Estado do componente);
- Formulários controlados;
- Manipulação de múltiplos campos com um único método manipulador (`handleChange`);
- Eventos de submissão.

## Requisitos Obrigatórios Atendidos

1. **PacienteForm**: Componente de classe dedicado a renderizar e gerenciar o formulário.
2. **Método Único de Eventos**: Utilização do manipulador `handleChange(event)` genérico para atualizar o estado de múltiplos campos de forma dinâmica.
3. **Estado Consolidado**: Todo o estado do formulário está armazenado no `this.state` do componente (`nome`, `idade`, `cidade`, `sexo` e `atendimento`).
4. **Submissão Segura**: Uso de `event.preventDefault()` no evento de envio para impedir o recarregamento automático da página.
5. **Alerta de Confirmação**: Após a submissão, os dados cadastrados são exibidos em um alerta no formato exigido.
6. **Cabecalho**: Componente de classe que recebe o nome da clínica ("Clínica Saúde+") por meio de Props.
7. **App**: Componente principal que reúne e orquestra o cabeçalho e o formulário.
8. **Estrutura Simplificada**: Todo o código está localizado no arquivo `src/App.js` seguindo o modelo fornecido.

---

## Como Executar o Projeto

1. Entre no diretório do projeto:
   ```bash
   cd aula01
   ```

2. Instale as dependências (se necessário):
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

A aplicação estará disponível em seu navegador no endereço: **[http://localhost:3000](http://localhost:3000)** (ou na porta correspondente indicada pelo terminal).
