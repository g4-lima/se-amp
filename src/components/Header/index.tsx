import React from 'react';

import LogoAMP from '../../assets/images/logos/LogoAMP.png';
import LogoSE from '../../assets/images/logos/LogoSE.png';

import { Conteiner, Logo, Links, SearchBar } from './styles';

const Header: React.FC = () => {
    return (
        <Conteiner>
            <Logo>
                <img src={LogoAMP} alt="Logo AMP" />
                <img src={LogoSE} alt="Logo SE" />
            </Logo>
            <Links>
                <a href="/">Indústrias</a>
                <a href="/">Produtos</a>
                <a href="/">Sobre</a>
                <a href="/">Contato</a>
            </Links>
            <SearchBar>
                <h3>Pesquisar</h3>
            </SearchBar>
        </Conteiner>
    );
};

export default Header;
