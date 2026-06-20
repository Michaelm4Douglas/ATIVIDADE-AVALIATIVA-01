import React from 'react';

class Cabecalho extends React.Component {
  render() {
    return (
      <header>
        <h1>{this.props.nome}</h1>
      </header>
    );
  }
}


class PacienteForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      nome: '',
      idade: '',
      cidade: '',
      sexo: '',
      atendimento: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleChange(event) {
    const nameEvt = event.target.name;
    this.setState({ [nameEvt]: event.target.value });
  }

  
  handleSubmit(event) {
    alert(
      `Paciente ${this.state.nome}\n` +
      `Idade: ${this.state.idade} anos\n` +
      `Cidade: ${this.state.cidade}\n` +
      `Sexo: ${this.state.sexo}\n` +
      `Tipo de atendimento: ${this.state.atendimento}`
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Nome do paciente: </label>
          <input
            name="nome"
            type="text"
            onChange={this.handleChange}
            value={this.state.nome}
            required
          />
        </div>

        <div>
          <label>Idade: </label>
          <input
            name="idade"
            type="text"
            onChange={this.handleChange}
            value={this.state.idade}
            required
          />
        </div>

        <div>
          <label>Cidade: </label>
          <input
            name="cidade"
            type="text"
            onChange={this.handleChange}
            value={this.state.cidade}
            required
          />
        </div>

        <div>
          <label>Sexo: </label>
          <select
            name="sexo"
            value={this.state.sexo}
            onChange={this.handleChange}
            required
          >
            <option value="" disabled>Selecione...</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </select>
        </div>

        <div>
          <label>Tipo de atendimento: </label>
          <select
            name="atendimento"
            value={this.state.atendimento}
            onChange={this.handleChange}
            required
          >
            <option value="" disabled>Selecione...</option>
            <option value="Consulta">Consulta</option>
            <option value="Exame">Exame</option>
            <option value="Retorno">Retorno</option>
            <option value="Emergência">Emergência</option>
          </select>
        </div>

        <input type="submit" value="Cadastrar" />
      </form>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Cabecalho nome="Clínica Saúde+" />
        <PacienteForm />
      </div>
    );
  }
}

export default App;
