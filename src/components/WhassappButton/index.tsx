import React from 'react';

import Whats from '../../assets/images/icons/whats.png';
import { Container } from './styles';

const WhatsappButton: React.FC = () => {
    function handleWhatsappLink() {
        const url = 'https://web.whatsapp.com/send?phone=55019998363080';
        window.open(url, '_blank');
    }

    return (
        <Container>
            <button
                type="button"
                onClick={handleWhatsappLink}
                className="whats-button"
            >
                <img src={Whats} alt="whatsapp icon" className="icon" />
                WhatsApp
            </button>
        </Container>
    );
};

export default WhatsappButton;
