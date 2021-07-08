import React, { useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import WhatsappButton from '../../components/WhatssappButton';

import { ListConvertionProducts } from './data';

import {
    Container,
    Content,
    PageBar,
    ProductsGroup,
    ProductsCard,
} from './styles';

const ConvertionProducts: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <WhatsappButton />
            <Container>
                <SideBar>3</SideBar>
                <Content>
                    <PageBar>
                        <p>Papel e Celulose</p>
                        <IoIosArrowForward size={20} color="#F22020" />
                        <p>Conversão</p>
                    </PageBar>

                    {ListConvertionProducts.map(section => (
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

export default ConvertionProducts;
