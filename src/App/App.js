import React, { Component } from 'react';
import './App.css';
import WelcomeMsg from './WelcomeMsg';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
// import { AppProvider } from './Context/AppProvider';
// import styled, { css } from 'styled-components';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppBar/>
        {/* <AppProvider> */}
        <WelcomeMsg />
        {/* </AppProvider> */}
      </AppLayout>
    );
  }
}

export default App;
