import React, { Component } from 'react';

class Tarefa extends Component {
    state = {
        descricao: this.props.descricao // Poderia ser props.children também, mas não é recomendado
    };
    render() {
        return <li className="list-group-item">{this.state.descricao}</li>;
    }
}

export default Tarefa;