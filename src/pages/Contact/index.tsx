import React from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosArrowBack, IoMdMail, IoMdCall } from 'react-icons/io';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsappButton from '../../components/WhatssappButton';
import place from '../../assets/images/icons/place.svg';

import { Container, TopBar, Content, Contacts, Map } from './styles';
import 'leaflet/dist/leaflet.css';

const Contact: React.FC = () => {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };
    const icon = new Icon({
        iconUrl: place,
        iconSize: [64, 64],
        iconAnchor: [29, 68],
        popupAnchor: [8, -60],
    });

    return (
        <>
            <Header />
            <WhatsappButton />
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

                    <Map>
                        <MapContainer
                            center={[-22.847094, -47.03992]}
                            zoom={17}
                            style={{ width: '100%', height: '100%' }}
                        >
                            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker
                                position={[-22.847094, -47.03992]}
                                icon={icon}
                            >
                                <Popup>
                                    SE-AMP <br /> Campinas / SP
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </Map>
                </Content>
            </Container>
            <Footer />
        </>
    );
};

export default Contact;
