import React from 'react';
import { Link } from 'react-router-dom';

import LogoAMP from '../../assets/images/logos/LogoAMP-removebg.png';
import LogoSE from '../../assets/images/logos/LogoSE-removebg.png';
import ptbr from '../../assets/images/logos/ptbr.png';
import ing from '../../assets/images/logos/ing.png';

import {
    Conteiner,
    Logo,
    Links,
    SearchBar,
    ChangeLanguage,
    Flags,
} from './styles';

const Header: React.FC = () => {
    return (
        <>
            <ChangeLanguage>
                <Flags>
                    <img src={ptbr} alt="Protugês" />
                    <img src={ing} alt="Inglês" />
                </Flags>
            </ChangeLanguage>
            <Conteiner>
                <Logo>
                    <img src={LogoSE} alt="Logo SE" />
                    <img src={LogoAMP} alt="Logo AMP" />
                </Logo>
                <Links>
                    <a href="/">Indústrias</a>
                    <a href="/">Produtos</a>
                    <Link to="/about">Sobre</Link>
                    <Link to="/contact">Contato</Link>
                </Links>
                <SearchBar>
                    <h3>Pesquisar</h3>
                </SearchBar>
            </Conteiner>
        </>
    );
};

export default Header;
