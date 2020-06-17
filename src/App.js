import React, { Component } from 'react';
import NavBar from './components/navbar';
import Tarefas from './components/tarefas';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <Tarefas />
        </div>
      </React.Fragment>
    );
  }
}

export default App;