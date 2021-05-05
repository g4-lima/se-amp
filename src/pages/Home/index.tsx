import React from 'react';

import Header from '../../components/Header';

import BgGears from '../../assets/images/gears-cogwheels.jpg';

import {
    BackgroundImage,
    TextBox,
    Text1,
    Text2,
    AboutUsBox,
    AboutUsButton,
    Industries,
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
                <p>
                    <div>
                        Há mais de <b>10 anos</b> no mercado. <br />
                        Proporcionando produtos com o melhor custo benefício.
                        <br />
                        Parceiros na Alemanha, Holanda, Dinamarca, Suécia,
                        Brasil, <br /> China, entre outros.
                    </div>
                </p>
                <AboutUsButton>SOBRE NÓS</AboutUsButton>
            </AboutUsBox>

            <Industries>
                <h1>Indústrias</h1>
            </Industries>
        </div>
    );
};

export default Home;
