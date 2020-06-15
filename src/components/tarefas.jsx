import React, {Component} from 'react';

class Tarefas extends Component {
    state = {
        tarefas: [
            'Declarar IRPF',
            'Estudar React',
            'Levar bicicleta para revisão'
        ]
    };
    render() {
        return(
            <div>
                <h2>Tarefas pendentes</h2>
                <p>{this.state.tarefas.length} tarefas pendentes.</p>
            </div>
        );
    }
}

export default Tarefas;