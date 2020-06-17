import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

class Tarefa extends Component {
    state = {
        descricao: this.props.descricao,
        altera: false,
    };

    render() {
        return <li className="list-group-item">{this.conteudo()}</li>;
    }

    conteudo() {
        if (this.state.altera) {
            return (
                <input
                    className="form-control"
                    type="text"
                    value={this.state.descricao}
                    onChange={this.alteraTarefa}
                    onBlur={this.confirma}
                    onKeyPress={this.teclaEnter}
                    autoFocus
                />
            );
        } else {
            return (
                <div className="align-middle">
                    {this.props.descricao}
                    <span className="btn-group float-right">
                        <button className="btn btn-info btn-sm" onClick={this.edita}>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button className="btn btn-warning btn-sm" onClick={this.apaga}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </span>
                </div>
            );
        }
    }

    edita = () => {
        this.setState({
            altera: true,
        });
    };

    alteraTarefa = (e) => {
        this.setState({
            descricao: e.target.value,
        });
    };

    confirma = () => {
        this.setState({
            altera: false,
        });
        this.props.onAltera(this.props.descricao, this.state.descricao);
    };

    teclaEnter = (e) => {
        if (e.key === 'Enter') this.confirma();
    };

    apaga = () => {
        this.props.onApaga(this.props.descricao);
    };

    constructor(props) {
        super(props);
        console.log('constructor: ', this.props.descricao);
    }
    componentDidMount() {
        console.log('componentDidUpdate: ', this.props.descricao);
    }
    componentDidUpdate() {
        console.log('componentDidUpdate: ', this.props.descricao);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount: ', this.props.descricao);
    }
}
export default Tarefa;