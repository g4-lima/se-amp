import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, LeftList } from './styles';

const ProductsPM: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <LeftList>
                    <p>Papel e Celulose</p>
                    <p>Máquina de Papel</p>
                </LeftList>
            </Container>
            <Footer />
        </>
    );
};

export default ProductsPM;
