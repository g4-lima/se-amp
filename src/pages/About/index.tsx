import React from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import abtcp from '../../assets/images/abtcp.png';

import { Container, TopBar, Contents, DescriptionContainer } from './styles';

const About: React.FC = () => {
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
                </TopBar>
                <Contents>
                    <h1>Trazendo o mundo e o futuro para a América do Sul</h1>
                    <DescriptionContainer>
                        <div className="history">
                            <h3>Nossa história</h3>
                            <div className="history-box">
                                <p>
                                    Localizada em Campinas, São Paulo, a Sharp-e
                                    atua há mais de 10 anos no mercado. Nós
                                    atuamos com o fornecimento das principais
                                    peças de reposição para indústria de papel e
                                    celulose, com o melhor custo-benefício,
                                    vindas de fabricantes ao redor do mundo.
                                </p>
                                <p>
                                    Investimos nas melhores parcerias, com
                                    fornecedores em países como Alemanha,
                                    Holanda, Dinamarca, Suécia, Brasil, China,
                                    etc. para garantir qualidade aos nossos
                                    clientes.
                                </p>
                                <p>
                                    Enquanto a Sharp-e Ltda é a empresa
                                    responsável pela importação e exportação, a
                                    AMP, AfterMarketPartner é nossa
                                    representante comercial.
                                </p>
                            </div>
                        </div>

                        <div className="abtcp-container">
                            <img src={abtcp} alt="Feira ABTCP" />
                            <p>Presente nas últimas 6 ediçoes da ABTCP</p>
                        </div>
                    </DescriptionContainer>
                </Contents>
            </Container>
            <Footer />
        </>
    );
};

export default About;
