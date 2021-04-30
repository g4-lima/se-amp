import React from 'react';

import { Conteiner } from './styles';

const Header: React.FC = () => {
    return (
        <Conteiner>
            <div className="logos" />
            <div className="links">
                <a href="/">Indústrias</a>
                <a href="/">Produtos</a>
                <a href="/">Sobre</a>
                <a href="/">Contato</a>
            </div>
            <div className="search-bar">
                <h3>Pesquisar</h3>
            </div>
        </Conteiner>
    );
};

export default Header;
