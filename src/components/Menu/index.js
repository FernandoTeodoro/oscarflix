import React from 'react';
import Logo from '../../assets/img/logoOscarFlix.png';
import './Menu.css';
import ButtonLink from './ButtonLink'
//import Button from '../Buttton'

// responsável por adicionar o Menu me todas as paginas da aplicação
function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="OscarFlix logo"></img>
            </a>
            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </nav >
    );
}

export default Menu;