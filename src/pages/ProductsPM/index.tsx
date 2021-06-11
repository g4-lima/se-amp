import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { ListPMProducts } from './Data';
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

                    {ListPMProducts.map(section => (
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
                                        <img src={pulper} alt="pulper" />
                                    </Link>
                                ))}
                            </ProductsCard>
                        </ProductsGroup>
                    ))}
                </Content>
            </Container>
            <Footer />
        </>
    );
};

export default ProductsPM;
