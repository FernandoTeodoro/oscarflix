import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logoOscarFlix.png';
import './Menu.css';
import ButtonLink from './ButtonLink';


// responsável por adicionar o Menu me todas as paginas da aplicação
function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="OscarFlix logo"></img>
            </Link>
            <ButtonLink as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </ButtonLink>
        </nav >
    );
}

export default Menu;