import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
    Container,
    LeftList,
    Content,
    PageBar,
    ProductsGroup,
    ProductsCard,
} from './styles';

const ProductsPM: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <LeftList>
                    <p>Papel e Celulose</p>
                    <p>Máquina de Papel</p>
                </LeftList>
                <Content>
                    <PageBar>
                        <p>Papel e Celulose</p>
                        <IoIosArrowForward size={20} color="#F22020" />
                        <p>Máquina de Papel</p>
                    </PageBar>

                    <ProductsGroup>
                        <h2>Preparo de Massa</h2>
                        <ProductsCard>
                            <Link to="/productsPM" className="card" />
                            <Link to="/productsPM" className="card" />
                            <Link to="/productsPM" className="card" />
                            <Link to="/productsPM" className="card" />
                            <Link to="/productsPM" className="card" />
                        </ProductsCard>
                    </ProductsGroup>

                    <ProductsGroup>
                        <h2>Seção de Formação</h2>
                        <ProductsCard>
                            <Link to="/productsPM" className="card" />
                            <Link to="/productsPM" className="card" />
                            <Link to="/productsPM" className="card" />
                            <Link to="/productsPM" className="card" />
                        </ProductsCard>
                    </ProductsGroup>

                    <ProductsGroup>
                        <h2>Seção de Prensa e Secagem</h2>
                        <ProductsCard>
                            <Link to="/productsPM" className="card" />
                            <Link to="/productsPM" className="card" />
                            <Link to="/productsPM" className="card" />
                            <Link to="/productsPM" className="card" />
                        </ProductsCard>
                    </ProductsGroup>
                </Content>
            </Container>
            <Footer />
        </>
    );
};

export default ProductsPM;
