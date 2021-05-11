import React from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, TopBar } from './styles';

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
            </Container>
            <Footer />
        </>
    );
};

export default About;
