import React, { Component } from 'react';
import InputSearch from "../InputSearch";

class Header extends Component {
  render() {
    return (
      
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <InputSearch />
        </header>
      
    );
  }
}

export default Header;
