import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsappButton from '../../components/WhatssappButton';

import BgGears from '../../assets/images/gears-cogwheels.jpg';
import celulose from '../../assets/images/celulose.jpg';
import maquinaDePapel from '../../assets/images/maquinaDePapel.jpg';
import conversao from '../../assets/images/conversao.jpg';
import biomassa from '../../assets/images/biomassa.jpg';
import mdf from '../../assets/images/mdf.jpg';
import grafica from '../../assets/images/grafica.jpg';
import etanol from '../../assets/images/etanol.jpg';

import {
    BackgroundImage,
    TextBox,
    Text1,
    Text2,
    AboutUsBox,
    AboutUsText,
    Industries,
    Row,
    Card,
    CardTitle,
    CardImage,
    IndustryTitle,
    BoxInfo,
    Credits,
} from './styles';

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <BackgroundImage>
                <img src={BgGears} alt="Background Engrenagens" />
                <TextBox>
                    <Text1>
                        {`FORNECEMOS PEÇAS E PRODUTOS PARA DIVERSAS
                        INDÚSTRIAS`}
                    </Text1>

                    <Text2>
                        Trazendo o mundo e o futuro para a América do Sul
                    </Text2>
                </TextBox>
            </BackgroundImage>

            <AboutUsBox>
                <AboutUsText>
                    <p>
                        <div>
                            Há mais de <b>10 anos</b> no mercado. <br />
                            Proporcionando produtos com o melhor custo
                            benefício.
                            <br />
                            Parceiros na Alemanha, Holanda, Dinamarca, Suécia,
                            Brasil, <br /> China, entre outros.
                        </div>
                    </p>
                </AboutUsText>
                <Link to="/about">SOBRE NÓS</Link>
            </AboutUsBox>

            <Industries>
                <h1>Indústrias</h1>
                <IndustryTitle>Papel e Celulose</IndustryTitle>
                <Row>
                    <Card>
                        <CardTitle>
                            <h3>Celulose</h3>
                        </CardTitle>
                        <CardImage>
                            <img src={celulose} alt="Fabrica Celulose" />
                        </CardImage>
                    </Card>
                    <Card>
                        <CardTitle>
                            <h3>Máquina de Papel</h3>
                        </CardTitle>
                        <CardImage>
                            <img src={maquinaDePapel} alt="Máquina de Papel" />
                        </CardImage>
                    </Card>
                    <Card>
                        <CardTitle>
                            <h3>Conversão</h3>
                        </CardTitle>
                        <CardImage>
                            <img src={conversao} alt="Conversão" />
                        </CardImage>
                    </Card>
                </Row>

                <IndustryTitle>Biomassa</IndustryTitle>
                <Row>
                    <Card>
                        <CardTitle>
                            <h3>Peças Para Picadores</h3>
                        </CardTitle>
                        <CardImage>
                            <img src={biomassa} alt="Peças para picador" />
                        </CardImage>
                    </Card>
                </Row>

                <IndustryTitle>Outras Indústrias</IndustryTitle>
                <Row>
                    <Card>
                        <CardTitle>
                            <h3>MDF</h3>
                        </CardTitle>
                        <CardImage>
                            <img src={mdf} alt="MDF" />
                        </CardImage>
                        <BoxInfo>
                            <p>EM BREVE</p>
                        </BoxInfo>
                    </Card>

                    <Card>
                        <CardTitle>
                            <h3>Gráfica</h3>
                        </CardTitle>
                        <CardImage>
                            <img src={grafica} alt="Gráfica" />
                        </CardImage>

                        <BoxInfo>
                            <p>EM BREVE</p>
                        </BoxInfo>
                    </Card>

                    <Card>
                        <CardTitle>
                            <h3>Etanol</h3>
                        </CardTitle>
                        <CardImage>
                            <img src={etanol} alt="Etanol" />
                        </CardImage>

                        <BoxInfo>
                            <p>EM BREVE</p>
                        </BoxInfo>
                    </Card>
                </Row>
            </Industries>

            <WhatsappButton />

            <Credits>
                Background Image: https://www.freepik.com/photos/technology -
                Technology photo created by onlyyouqj - www.freepik.com
            </Credits>

            <Footer />
        </>
    );
};

export default Home;
