import React from 'react';
import NavBar from './components/navbar';
import Tarefas from './components/tarefas';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <Tarefas />
      </div>
    </React.Fragment>
  );
}

export default App;