import React, { Component } from 'react';
import NavBar from './components/navbar';
import Tarefas from './components/tarefas';

class App extends Component {
  state = {
    tarefas: ['Declarar IRPF', 'Estudar React', 'Levar o carro para a revisão'],
  };

  render() {
    return (
      <React.Fragment>
        <NavBar pendentes={this.state.tarefas.length} />
        <div className="container">
          <Tarefas
            tarefas={this.state.tarefas}
            onAdiciona={this.adicionaTarefa}
            onAltera={this.alteraTarefa}
            onApaga={this.apagaTarefa}
          />
        </div>
      </React.Fragment>
    );
  }

  adicionaTarefa = (t) => {
    this.setState({
      tarefas: [...this.state.tarefas, t],
    });
  };

  alteraTarefa = (t, d) => {
    const i = this.state.tarefas.indexOf(t);
    const novaLista = [...this.state.tarefas];
    novaLista[i] = d;
    this.setState({
      tarefas: novaLista,
    });
  };

  apagaTarefa = (t) => {
    this.setState({
      tarefas: this.state.tarefas.filter((tarefa) => tarefa !== t),
    });
  };

  constructor(props) {
    super(props);
    console.log('constructor: App');
  }

  componentDidMount() {
    console.log('componentDidMount: App');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate: App');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: App');
  }
  
}

export default App;