import React from 'react';

import Header from '../../components/Header';

import BgGears from '../../assets/images/gears-cogwheels.jpg';

import { BackgroundImage, TextBox, Text1, Text2 } from './styles';

const Home: React.FC = () => {
    return (
        <div className="container">
            <BackgroundImage>
                <Header />
                <img src={BgGears} alt="Background Engrenagens" />
                <TextBox>
                    <Text1>
                        FORNECEMOS PEÇAS E PRODUTOS PARA DIVERSAS INDÚSTRIAS
                    </Text1>

                    <Text2>
                        Trazendo o mundo e o futuro para a América do Sul
                    </Text2>
                </TextBox>
            </BackgroundImage>
        </div>
    );
};

export default Home;
