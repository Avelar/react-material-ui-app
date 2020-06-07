import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import theme from './theme';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>
        React testes
      </h1>
      </header>
      <Container maxWidth="sm">
        <Box component="subtitle1" display="block">
          <b>Teste 1: </b>
        </Box>
        <Box component="body1" paragraph="true" display="block">
          Utilizar: Container, Box, Paper, Button, <span class="text-decoration--line-through">property m(margin), p(padding)</span> e fazer uma chamada JSON.
        </Box>
        <Paper color="primary" p={10} elevation={2} className="{theme.paper}; paper">
          <Typography variant="subtitle2" component="h2">
            Nomes populares no Brasil
          </Typography>
          <p>
            Escreva um nome para saber a frequência com que pessoas registram seus filhos com este nome no Brasil.
          </p>
          <form className="noValidate" autoComplete="off">
            <TextField id="standard-full-width" label="Exemplo: Eduardo" />
          </form>

          <Button variant="contained" display="block" color="secondary" mt={4}>
            Pesquisar nome
          </Button>
        </Paper>
      </Container>
    </div>
  );
}
export default App;
