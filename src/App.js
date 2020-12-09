import React, { Component } from 'react';

import Header from './components/Header';
import InputSearch from "./components/InputSearch";
import Result from "./components/Result";
import { DataProvider } from "./components/Context";
class App extends Component {

  render() {

    return (
      <DataProvider>
        <div className="App">
          <Header />
          <InputSearch />
          <Result />
        </div>
      </DataProvider>
    );
  }
}

export default App;
