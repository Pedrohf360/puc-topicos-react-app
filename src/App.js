import React, { useState, useEffect } from 'react';
import NavBar from './components/navbar';
import Tarefas from './components/tarefas';

function App(props) {
  // estado
  let ts = JSON.parse(localStorage.getItem('tarefas'));
  if (!ts) ts = [];
  const [tarefas, setTarefas] = useState(ts);

  // funções de tratamento de evento
  const adicionaTarefa = (t) => setTarefas([...tarefas, t]);
  const alteraTarefa = (t, d) => {
    const i = tarefas.indexOf(t);
    let novaLista = [...tarefas];
    novaLista[i] = d;
    setTarefas(novaLista);
  };
  const apagaTarefa = (t) =>
    setTarefas(tarefas.filter((tarefa) => tarefa !== t));

  // atualização
  useEffect(() => localStorage.setItem('tarefas', JSON.stringify(tarefas)));

  // interface
  return (
    <React.Fragment>
      <NavBar pendentes={tarefas.length} />
      <div className="container">
        <Tarefas
          tarefas={tarefas}
          onAdiciona={adicionaTarefa}
          onAltera={alteraTarefa}
          onApaga={apagaTarefa}
        />
      </div>
    </React.Fragment>
  );
}

export default App;