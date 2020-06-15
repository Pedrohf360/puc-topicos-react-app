import React, { Component } from 'react';
import './tarefas.css';

class Tarefas extends Component {
  state = {
    tarefas: ['Declarar IRPF', 'Estudar React', 'Levar o carro para a revisão'],
    novaTarefa: '',
  };

  render() {
    return (
      <div>
        <h2>Tarefas pendentes</h2>
        <p>{this.tarefasPendentes()}</p>
        {this.listaDeTarefas()}
        <form className="form-inline mt-4" onSubmit={this.adicionaTarefa}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={this.state.novaTarefa}
              onChange={this.trataNovaTarefa}
            />
            <button className="btn btn-secondary" type="submit">
              +
            </button>
          </div>
        </form>
      </div>
    );
  }

  trataNovaTarefa = (evento) => {
    this.setState({ novaTarefa: evento.target.value });
  };

  adicionaTarefa = (evento) => {
    const novoVetorDeTarefas = [...this.state.tarefas, this.state.novaTarefa];
    this.setState({
      tarefas: novoVetorDeTarefas,
    });
    evento.preventDefault();
  };

  tarefasPendentes() {
    const { tarefas } = this.state;
    if (tarefas.length > 1) return tarefas.length + ' tarefas pendentes.';
    else if (tarefas.length === 1) return '1 tarefa pendente.';
    else return 'Nenhuma tarefa pendente.';
  }

  listaDeTarefas() {
    const { tarefas } = this.state;
    return (
      tarefas.length > 0 && (
        <ul className="list-group mt-4">
          {tarefas.map((t, i) => (
            <li className="list-group-item" key={i}>
              {t}
            </li>
          ))}
        </ul>
      )
    );
  }
}

export default Tarefas;