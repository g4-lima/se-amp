/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';

import LogoAMP from '../../assets/images/logos/LogoAMP-removebg.png';
import LogoSE from '../../assets/images/logos/LogoSE-removebg.png';
import ptbr from '../../assets/images/logos/ptbr.png';
import ing from '../../assets/images/logos/ing.png';

import { Conteiner, Links, SearchBar, ChangeLanguage, Flags } from './styles';

// interface Irefs {
// eslint-disable-next-line react/require-default-props
// myRef?: any;
// }

const Header = () => {
    const history = useHistory();

    // const industry = () => {
    //     props.myRef.current.scrollIntoView();
    // };

    const goTo = async () => {
        await history.push('/');
        window.scrollTo({ top: 1000, behavior: 'smooth' });
        // industry();
    };

    return (
        <>
            <ChangeLanguage>
                <Flags>
                    <img src={ptbr} alt="Protugês" />
                    <img src={ing} alt="Inglês" />
                </Flags>
            </ChangeLanguage>
            <Conteiner>
                <Link to="/" className="logo">
                    <img src={LogoSE} alt="Logo SE" />
                    <img src={LogoAMP} alt="Logo AMP" />
                </Link>
                <Links>
                    <Link to="/" onClick={() => goTo()}>
                        Indústrias
                    </Link>
                    {/* <a href="/">Produtos</a> */}
                    <Link to="/about">Sobre</Link>
                    <Link to="/contact">Contato</Link>
                </Links>
                <SearchBar>
                    <form action="/" method="get" className="search-form">
                        <input
                            type="text"
                            id="header-search"
                            placeholder="Pesquisar"
                            name="s"
                            className="search-input"
                        />
                        <button type="submit" className="search-button">
                            <IoMdSearch size={24} color="#808080" />
                        </button>
                    </form>
                </SearchBar>
            </Conteiner>
        </>
    );
};

export default Header;
