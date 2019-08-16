import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navigation from './components/layout/Navigation'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
