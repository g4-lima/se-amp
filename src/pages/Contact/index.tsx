import React from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosArrowBack, IoMdMail, IoMdCall } from 'react-icons/io';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, TopBar, Content, Contacts, Map } from './styles';
import 'leaflet/dist/leaflet.css';

const Contact: React.FC = () => {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };
    const position = [51.505, -0.09];

    return (
        <>
            <Header />
            <Container>
                <TopBar>
                    <button type="button" onClick={goBack}>
                        <IoIosArrowBack size={24} color="#F22020" />
                        <p>Voltar</p>
                    </button>
                    <p>|</p>
                    <p>Contato</p>
                </TopBar>

                <Content>
                    <Contacts>
                        <h1>Entre em contato:</h1>
                        <div className="infos">
                            <IoMdMail size={24} color="#F22020" />
                            <p>amp@aftermarketpartner.com</p>
                        </div>
                        <div className="infos">
                            <IoMdCall size={24} color="#F22020" />
                            <p>19 3305 2372 | 3305 2382</p>
                        </div>
                        <div className="adress">
                            <p>Endereço:</p>
                            <p>
                                Rua Jose Casarini, 08 <br />
                                Jd. Nilopolis - 13088-855
                                <br />
                                Campinas - SP
                            </p>
                        </div>
                    </Contacts>
                </Content>

                <Map>
                    <MapContainer
                        center={[-23.0624507, -47.218688]}
                        zoom={14}
                        style={{ width: '100%', height: '100%' }}
                    >
                        {/* <Marker position={position}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker> */}
                    </MapContainer>
                </Map>
            </Container>
            <Footer />
        </>
    );
};

export default Contact;
