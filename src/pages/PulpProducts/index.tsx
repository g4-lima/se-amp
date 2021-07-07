import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import WhatsappButton from '../../components/WhatssappButton';
import SideBar from '../../components/SideBar';
import Footer from '../../components/Footer';

import { ListPulpProducts } from './data';

import {
    Container,
    Content,
    PageBar,
    ProductsGroup,
    ProductsCard,
} from './styles';

const PulpProducts: React.FC = () => {
    return (
        <>
            <Header />
            <WhatsappButton />
            <Container>
                <SideBar>2</SideBar>
                <Content>
                    <PageBar>
                        <p>Papel e Celulose</p>
                        <IoIosArrowForward size={20} color="#F22020" />
                        <p>Máquina de Papel</p>
                    </PageBar>

                    {ListPulpProducts.map(section => (
                        <>
                            <ProductsGroup>
                                <h2 key={section.id}>{section.name}</h2>
                                <ProductsCard>
                                    {section.products.map(product => (
                                        <Link
                                            to="/productsPM"
                                            className="card"
                                            key={product.id}
                                        >
                                            <div className="card-title">
                                                <h3>{product.name}</h3>
                                            </div>
                                            <img
                                                src={product.img}
                                                alt={product.name}
                                            />
                                        </Link>
                                    ))}
                                </ProductsCard>
                            </ProductsGroup>
                        </>
                    ))}
                </Content>
            </Container>
            <Footer />
        </>
    );
};

export default PulpProducts;
