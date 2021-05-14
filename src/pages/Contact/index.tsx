import React from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosArrowBack, IoMdMail, IoMdCall } from 'react-icons/io';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, TopBar, Content, Contacts } from './styles';

const Contact: React.FC = () => {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    return (
        <>
            <Header />
            <Container>
                <TopBar>
                    <button type="button" onClick={goBack}>
                        <IoIosArrowBack size={24} color="#F22020" />
                        <p>Voltar</p>
                    </button>
                    <p>|</p>
                    <p>Contato</p>
                </TopBar>

                <Content>
                    <Contacts>
                        <h1>Entre em contato:</h1>
                        <div className="infos">
                            <IoMdMail size={24} color="#F22020" />
                            <p>amp@aftermarketpartner.com</p>
                        </div>
                        <div className="infos">
                            <IoMdCall size={24} color="#F22020" />
                            <p>19 3305 2372 | 3305 2382</p>
                        </div>
                        <div className="adress">
                            <p>Endereço:</p>
                            <p>
                                Rua Jose Casarini, 08 <br />
                                Jd. Nilopolis - 13088-855
                                <br />
                                Campinas - SP
                            </p>
                        </div>
                    </Contacts>
                </Content>
            </Container>
            <Footer />
        </>
    );
};

export default Contact;
