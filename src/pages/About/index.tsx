import React from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsappButton from '../../components/WhatssappButton';

import abtcp from '../../assets/images/abtcp.png';
import galpao1 from '../../assets/images/galpao1.jpg';
import galpao2 from '../../assets/images/galpao2.jpg';
import galpao3 from '../../assets/images/galpao3.jpg';

import {
    Container,
    TopBar,
    Contents,
    DescriptionContainer,
    StructureContainer,
    StructureBox,
} from './styles';

const About: React.FC = () => {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    return (
        <>
            <Header />
            <WhatsappButton />
            <Container>
                <TopBar>
                    <button type="button" onClick={goBack}>
                        <IoIosArrowBack size={24} color="#F22020" />
                        <p>Voltar</p>
                    </button>
                    <p>|</p>
                    <p>Sobre Nós</p>
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
                                    entre outros. para garantir qualidade aos
                                    nossos clientes.
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

                    <StructureContainer>
                        <div className="structure">
                            <h3>Nossa Estrutura</h3>
                        </div>
                        <StructureBox>
                            <div className="sctructure-text">
                                <p>
                                    Estrutura completa para garantir o cuidado
                                    apropriado com seus produtos!
                                </p>
                            </div>

                            <div className="structure-images">
                                <img
                                    src={galpao1}
                                    alt="Foto Galpão 1"
                                    className="img1"
                                />
                                <img src={galpao2} alt="Foto Galpão 2" />
                                <img
                                    src={galpao3}
                                    alt="Foto Galpão 3"
                                    className="img3"
                                />
                            </div>
                        </StructureBox>
                    </StructureContainer>
                </Contents>
            </Container>
            <Footer />
        </>
    );
};

export default About;
