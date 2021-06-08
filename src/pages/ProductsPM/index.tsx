import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import pulper from '../../assets/images/PM/pulper.png';

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
                            <Link to="/productsPM" className="card">
                                <div className="card-title">
                                    <h3>Pulper</h3>
                                </div>
                                <img src={pulper} alt="pulper" />
                            </Link>
                            <Link to="/productsPM" className="card">
                                <div className="card-title">
                                    <h3>Cleaner</h3>
                                </div>
                            </Link>
                            <Link to="/productsPM" className="card">
                                <div className="card-title">
                                    <h3>Depuração</h3>
                                </div>
                            </Link>
                            <Link to="/productsPM" className="card">
                                <div className="card-title">
                                    <h3>Refinadores</h3>
                                </div>
                            </Link>
                            <Link to="/productsPM" className="card">
                                <div className="card-title">
                                    <h3>Telas Inox</h3>
                                </div>
                            </Link>
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
