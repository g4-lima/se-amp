import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import BgGears from '../../assets/images/gears-cogwheels.jpg';
import celulose from '../../assets/images/celulose.png';
import maquinaDePapel from '../../assets/images/maquinaDePapel.png';
import conversao from '../../assets/images/conversao.png';

import {
    BackgroundImage,
    TextBox,
    Text1,
    Text2,
    AboutUsBox,
    AboutUsText,
    AboutUsButton,
    Industries,
    Collum1,
    CardTitle,
    CardImage,
    IndustryTitle,
} from './styles';

const Home: React.FC = () => {
    return (
        <div className="container">
            <BackgroundImage>
                <Header />
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
                <AboutUsButton>SOBRE NÓS</AboutUsButton>
            </AboutUsBox>

            <Industries>
                <h1>Indústrias</h1>
                <IndustryTitle>Papel e Celulose</IndustryTitle>
                <Collum1>
                    <CardTitle>
                        <h3>Celulose</h3>
                        <CardImage>
                            <img src={celulose} alt="Fabrica Celulose" />
                        </CardImage>
                    </CardTitle>

                    <CardTitle>
                        <h3>Máquina de Papel</h3>
                        <CardImage>
                            <img src={maquinaDePapel} alt="Máquina de Papel" />
                        </CardImage>
                    </CardTitle>

                    <CardTitle>
                        <h3>Conversão</h3>
                        <CardImage>
                            <img src={conversao} alt="Conversão" />
                        </CardImage>
                    </CardTitle>
                </Collum1>
            </Industries>

            <Footer />
        </div>
    );
};

export default Home;
