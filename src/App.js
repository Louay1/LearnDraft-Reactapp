import React, { Component } from 'react';
import Atoms from './Atoms';

class App extends Component {
    state ={
        atoms: [
            {name: 'Helium', symbol: 'He', atm: 2, id: 1},
            {name: 'Argon', symbol: 'Ar', atm: 18, id: 2},
            {name: 'Xenon', symbol: 'Xe', atm: 54, id: 3}
        ]
    }
  render() {
    return (
      <div className="App">
        <h1>First Reaction App</h1>
          <p>Welcome boiz xD</p>
          <Atoms atoms={this.state.atoms}/>
      </div>
    );
  }
}

export default App;
