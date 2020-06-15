import React, {Component} from 'react';
import './tarefas.css';

class Tarefas extends Component {
    state = {
        tarefas: [
            'Declarar IRPF',
            'Estudar React',
            'Levar bicicleta para revisão'
        ]
    };
    imagem = 'https://via.placeholder.com/250x100.png';
    // estilo = {fontFamily: 'Impacto, Calibri, sans-serif', color: '#F00'};

    render() {
        return(
            <div>
                <h2 style={this.estilo}>Tarefas pendentes</h2>
                <p>{this.getQuantTarefasPendentes()}</p>
                <ul>{this.getListaTarefasPendentes()}</ul>
                <p>
                    <img src={this.imagem} alt="placeholder"/>
                </p>
            </div>
        );
    }

    getQuantTarefasPendentes() {
        if (this.state.tarefas.length === 1) 
            return `Você possui 1 tarefa pendente`;
        else if (this.state.tarefas.length > 1) 
            return `Você possui ${this.state.tarefas.length} tarefas pendentes`;
        else
            return `Nenhuma tarefa pendente foi encontrada.`;
    }

    getListaTarefasPendentes() {
        return (
            this.state.tarefas.map((t, i) => {
                return (<li key={i}>{t}</li>);
            })
        );
    }
}

export default Tarefas;