import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import Home from './pages/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';

function Pagina404() {
  return(
    <div>
      <h1>Página 404</h1>
=======
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function CadastroVideo() {
  return (
    <div>
      Tela de Cadastro de Video
>>>>>>> master
    </div>
  )
};

ReactDOM.render(
  <BrowserRouter>
    <Switch>
<<<<<<< HEAD
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={Pagina404} />
=======
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/" component={App} />
>>>>>>> master
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
