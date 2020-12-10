import React, { Component } from 'react';

import Header from './components/Header';
import InputSearch from "./components/InputSearch";
import Result from "./components/Result";
class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <InputSearch />
        <Result />
      </div>
    );
  }
}

export default App;
