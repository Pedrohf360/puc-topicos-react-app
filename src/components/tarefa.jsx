import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function Tarefa(props) {
    const [descricao, setDescricao] = useState(props.descricao);
    const [altera, setAltera] = useState(false);

    useEffect(() => {
        setDescricao(props.descricao);
    }, [props.descricao]);

    // Funções para tratamento dos eventos
    const confirma = (e) => {
        setAltera(false);
        props.onAltera(props.descricao, descricao);
    };
    const teclaEnter = (e) => {
        if (e.key === 'Enter') confirma();
    };

    return (
        <li className="list-group-item">
            {altera ? (
                <input
                    className="form-control"
                    type="text"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    onBlur={confirma}
                    onKeyPress={teclaEnter}
                    autoFocus
                />
            ) : (
                    <div className="align-middle">
                        {props.descricao}
                        <span className="btn-group float-right">
                            <button
                                className="btn btn-info btn-sm"
                                onClick={() => setAltera(true)}
                            >
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button
                                className="btn btn-warning btn-sm"
                                onClick={() => props.onApaga(props.descricao)}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </span>
                    </div>
                )}
        </li>
    );
}

export default Tarefa;