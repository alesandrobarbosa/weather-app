import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nuuk from './components/Weather/Nuuk';
import Urubici from './components/Weather/Urubici';
import Nairobi from './components/Weather/Nairobi';
import './components/Weather/Cache.js';


class App extends Component {
  
  render() {

    return (
      
      <div className="App">
        <Header/>
        <main>
          <section className="wrapper">
            <Urubici/> 
            <Nuuk/> 
            <Nairobi/>  
          </section>
        </main>
      </div>
    );
  }
}

export default App;
