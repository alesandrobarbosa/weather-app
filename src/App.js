import React, { Component } from 'react';

import "./index.css";
import InputSearch from "./components/InputSearch";
import Result from "./components/Result";
class App extends Component {

  render() {

    return (
      <div className="App">
        <InputSearch />
        <Result />
      </div>
    );
  }
}

export default App;
