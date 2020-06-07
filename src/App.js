import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*
          <img src={logo} className="App-logo" alt="logo" />
        */}
        Header
      </header>
      <Container maxWidth="sm">
      Conteiner

      <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />


        <Button variant="contained" color="secondary">
          Continuar
        </Button>
      </Container>
    </div>
  );
}
export default App;
