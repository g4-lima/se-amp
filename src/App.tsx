import React from 'react';

import Routes from './routes';

import GlobalStyle from './assets/styles/global';

const App: React.FC = () => {
    return (
        <>
            <Routes />
            <GlobalStyle />
        </>
    );
};

export default App;
