import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductsPM from './pages/ProductsPM';
import PulpProducts from './pages/PulpProducts';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/ProductsPM" exact component={ProductsPM} />
                <Route path="/PulpProducts" exact component={PulpProducts} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
